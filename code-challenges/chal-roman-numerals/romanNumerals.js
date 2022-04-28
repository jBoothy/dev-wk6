/*
Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

For reference, these are the building blocks for how we encode numbers with Roman numerals:

Decimal

Roman

1

I

5

V

10

X

50

L

100

C

500

D

1,000

M

For example:

toRoman(5)
'V'

toRoman(267)
'CCLXVII'
Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

For example:

toRoman(99)
'LXXXXVIIII'
*/

const toRoman=(input)=>{
 let roman = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
 };
 let solution = '';

 for(let i of Object.keys(roman)){
     let q = Math.floor(input/roman[i])
     input -= q * roman[i]
     solution += i.repeat(q)
 }
 return solution;
}

console.log(toRoman(5))
console.log(toRoman(267))
console.log(toRoman(99))