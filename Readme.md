# Special Thansk to UCSC 
Original translation code was developed by Language Technology Research Laboratory - University of Colombo School of Computing. (2011)
https://ucsc.cmb.ac.lk//ltrl/services/feconverter/

# Installation 

Using npm:
```sh
npm i --save sinhala-unicode-coverter
```


# Usage
```ts
// Legacy to unicode
import { dlManelToUnicode } from "sinhala-unicode-coverter"
const a = dlManelToUnicode("Y%S ,xld")
console.log(a) // ශ්‍රී ලංකා 

// Singlish to Unicode
import { singlishToUnicode } from "sinhala-unicode-coverter"
const b = singlishToUnicode("shrii la\\nkaa")
console.log(b) // ශ්‍රී ලංකා 

```



