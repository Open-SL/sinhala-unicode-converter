# Special Thansk to UCSC 
Original translation code was developed by Language Technology Research Laboratory - University of Colombo School of Computing. (2011)  
Source:  https://ucsc.cmb.ac.lk//ltrl/services/feconverter/

# Installation 

Using npm:
```sh
npm i --save sinhala-unicode-coverter
```

Using yarn:
```sh
yarn add sinhala-unicode-coverter
```

# API

There are 12 methods exported from the package. Each of them takes an string as a input and returns the converted string.

## Legacy format to Unicode 

Method | Description
--- | ---
`dlManelToUnicode` | DL-Manel to Unicode
`baminiToUnicode` | Bamini to Unicode
`kaputaToUnicode` | Kaputa to Unicode
`fmAbayaToUnicode` | FM-Abaya to Unicode
`amaleeToUnicode` | Amalee to Unicode  

   

## Unicode to Legacy

Method | Description
--- | ---
`unicodeToDlManel` | Unicode to DL-Manel
`unicodeToBamini` | Unicode to Bamini
`unicodeToKaputa` | Unicode to Kaputa

> Unfortunately we don't have unicode to legacy functionality for fmAbaya and Amalee.


## Singlish to Unicode

Method | Description
--- | ---
`singlishToUnicode` | Singlish (Sinhala) to Unicode
   
## Tanglish to Unicode
  
Method | Description
--- | ---
`tanglishToUnicode` | Tanglish (Tamil) to Unicode


# Example Usage
```ts
// Legacy to unicode
import { dlManelToUnicode, singlishToUnicode, unicodeToDlManel } from "sinhala-unicode-coverter"
const a = dlManelToUnicode("Y%S ,xld")
console.log(a) // ශ්‍රී ලංකා 

// Unicode to DL-Manel
const b = dlManelToUnicode("ශ්‍රී ලංක")
console.log(b) // Y%S ,xld


// Singlish to Unicode
const c = singlishToUnicode("shrii la\\nkaa")
console.log(c) // ශ්‍රී ලංකා 

```



