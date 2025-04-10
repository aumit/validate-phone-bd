# 📱 Validate Phone BD
[![npm version](https://img.shields.io/npm/v/validate-phone-bd)](https://npmjs.com/package/validate-phone-bd)
[![npm downloads](https://img.shields.io/npm/dw/validate-phone-bd)](https://npmjs.com/package/validate-phone-bd)
[![license](https://img.shields.io/npm/l/validate-phone-bd)](https://opensource.org/licenses/MIT)
[![bundle size](https://img.shields.io/bundlephobia/min/validate-phone-bd)](https://bundlephobia.com/result?p=validate-phone-bd)


A lightweight TypeScript/JavaScript library to validate Bangladeshi phone numbers — supporting mobile, BTCL landlines, and IP telephony numbers.

---

## ✨ Features

- Detects phone number **type**: `mobile`, `btcl`, `ip`, or `unknown`
- Identifies **mobile operator**, **BTCL zone**, or **IP provider**
- Normalizes phone number to standard format (without country code)
- Supports both Node.js and browser (via CDN)
- ESM, CommonJS, and UMD builds
- Fully typed (TypeScript support)

---

## 📦 Installation

```bash
npm install validate-phone-bd
```
## 🔧 Usage

### Node.js / CommonJS

```js
const { validatePhoneBD } = require('validate-phone-bd');


const result = validatePhoneBD('+8801712345678');
console.log(result);
```
### ESM / TypeScript
```js
import { validatePhoneBD } from 'validate-phone-bd';


const result = validatePhoneBD('01712345678');
console.log(result);
```

### Browser (via CDN)
```html
<!-- Include it from CDN -->
<script src="https://cdn.jsdelivr.net/npm/validate-phone-bd/dist/validate-phone-bd.umd.min.js"></script>

<!-- Use for validation -->
<script>
  const result = ValidatePhoneBD.validatePhoneBD('09611234567');
  console.log(result);
</script>
```

### Output Example

```json
{
  "isValid": true,
  "type": "mobile",
  "normalized": "01712345678",
  "operatorOrZone": "Grameenphone"
}
```

---

## API Reference

### `validatePhoneBD(input: string): ValidationResult`

#### Parameters:
- `input` (string): A phone number to validate. Can include country code (`+880` or `880`), or start with `0`.

#### Returns:
An object with the following structure:

| Property         | Type     | Description                                                  |
|------------------|----------|--------------------------------------------------------------|
| `isValid`        | boolean  | Whether the number is a valid Bangladeshi phone number       |
| `type`           | string   | One of: `'mobile'`, `'btcl'`, `'ip'`, or `'unknown'`         |
| `normalized`     | string   | Normalized number in local format (starts with `0`)          |
| `operatorOrZone` | string   | Name of mobile operator, BTCL zone, or IP phone provider     |

#### Example:

```js
validatePhoneBD('8809612345678');

/*
{
  isValid: true,
  type: 'ip',
  normalized: '09612345678',
  operatorOrZone: 'IP Telephone Provider'
}
*/
```
### License
MIT
### Author
Aumit