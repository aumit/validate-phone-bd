export type PhoneType = 'mobile' | 'btcl' | 'ip' | 'unknown';

export interface ValidationResult {
    isValid: boolean;
    type: PhoneType;
    normalized: string;
    operatorOrZone: string;
}

const mobileOperators: Record<string, string> = {
    '013': 'Grameenphone',
    '017': 'Grameenphone',
    '014': 'Banglalink',
    '019': 'Banglalink',
    '015': 'Teletalk',
    '016': 'Robi',
    '018': 'Robi',
};

const ipPhonePrefixes = ['096'];

const btclZones: Record<string, string> = {
    '022': 'Central zone: Dhaka City, Narayanganj City, Gazipur City, Narshingdi City, Tongi and Tungipara',
    '023': 'South-East zone: Chittagong District, Chandpur District, Feni District, Comilla District and nearby district',
    '024': 'South-West zone: Khulna District, Barishal District and nearby district',
    '025': 'North-West zone: Rajshahi District, Rangpur District and nearby district',
    '029': 'North-East zone: Sylhet District, Mymensingh District, Manikganj District, Sherpur District, Jamalpur District and nearby districts',
};

export function validatePhoneBD(input: string): ValidationResult {
    let normalized = input.replace(/[^0-9]/g, '');

    if (normalized.startsWith('880')) {
        normalized = '0' + normalized.slice(3);
    } else if (normalized.startsWith('+880')) {
        normalized = '0' + normalized.slice(4);
    }

    const result: ValidationResult = {
        isValid: false,
        type: 'unknown',
        normalized,
        operatorOrZone: '',
    };

    // Mobile number
    if (/^01[3-9]\d{8}$/.test(normalized)) {
        const prefix = normalized.slice(0, 3);
        result.isValid = true;
        result.type = 'mobile';
        result.operatorOrZone = mobileOperators[prefix] || 'Unknown Operator';
        return result;
    }

    // IP Phone number
    if (/^096\d{7,8}$/.test(normalized)) {
        result.isValid = true;
        result.type = 'ip';
        result.operatorOrZone = 'IP Telephone Provider';
        return result;
    }

    // BTCL number with zone detection
    if (/^02[2-5,9]\d{7}$/.test(normalized)) {
        const zoneCode = normalized.slice(0, 3);
        result.isValid = true;
        result.type = 'btcl';
        result.operatorOrZone = btclZones[zoneCode] || 'BTCL - Unknown Zone';
        return result;
    }

    return result;
}
