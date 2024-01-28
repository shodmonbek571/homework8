// //  8 - MASALA
// function isPalindrom(num) {
//     let b = num % 10;
//     let y = Math.trunc(num / 100)
      
//     if (b == y) {
//       return "palindrom";
//     } else {
//       return "paldrom son emas"
//     }
//   }
// console.log(isPalindrom(232)

//     1 - MASALA

// function kubniHajmi(arg) {
//   return arg**3;
// }
// console.log(kubniHajmi(5));

//    2 - MASALA
// function belgiTekshirish(str, belgi) {
//   return str.includes(belgi);
// }
// let satr = "Bu bir test satridir.";
// let belgi = " ";
// let natija = belgiTekshirish(satr, belgi);
// console.log(natija);

//    3 - MASALA
// function natural(n) {
//   const naturalNumbers = [];
//   for (let i = 1; i <= n; i++) {
//     naturalNumbers.push(i);
    
//   }
//   return naturalNumbers;
// }
// console.log(natural(7));

//    4 - MASALA
// function yigindi(raqamlar) {
//   let summa = 0;
//   for (let i = 0; i < raqamlar.length; i++) {
//     summa += raqamlar [i];
//   }
//   return summa;
// }
// console.log(yigindi([1, 2, 3, 4, 5]));

//    5 - MASALA
//function kabisaYil(yil) {
//   if (yil % 4 === 0 && yil % 100 !== 0 || yil % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }

// }
// console.log(kabisaYil(2024));

//    6 - MASALA
// function tasodifiyRaqam(arg1, arg2) {
//   let tasodifiyRaqam = Math.floor(Math.random() * (arg2 - arg1 + 1)) + arg1;
//   return tasodifiyRaqam;
// }
// console.log("Tasodifiy raqam:", tasodifiyRaqam(10, 100));

//    7 - MASALA
// function tortburchak(uzunlik, eni) {
//   return uzunlik * eni;
// }
// console.log(tortburchak(5,10));

//    8 - MASALA
// function farengeytniSelsiygaAylantirish(temperature) {
//   return (temperature - 32) * (5/9 );

// }
// console.log(farengeytniSelsiygaAylantirish(414));

//    9 - MASALA 
// function tekshirishTengYonlimi(a, b, c) {
//   if (a === b && b === c) {
//     return "Teng yonli uchburchak";
//   } else if (a === b || b === c || a === c) {
//     return "Teng yonli mashtabli";
//   } else {
//       return "Oddiy uchburchak";
//   }
// }
// console.log(tekshirishTengYonlimi(3,5,3));

//    10 - MASALA
// function minimaliniTopish(arg1, arg2) {
//   if (arg1 < arg2) {
//     return arg1;
//   } else {
//     return arg2;
//   }
// }
// console.log(minimaliniTopish(15, 7));

//    11 - MASALA
// function doiraRadiusi(radius) {
//   return Math.PI * radius * radius;
// }
// console.log(doiraRadiusi(10));

//    12 - MASALA



//    18 - MASALA
function tasodifiySon(min, max) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNumber % 2 !== 0);
  return randomNumber;
}

let minNumber = 10;
let maxNumber = 50;

console.log(getRandomEvenNumber(minNumber, maxNumber));
