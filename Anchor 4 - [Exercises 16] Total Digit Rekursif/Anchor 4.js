function totalDigitRekursif(angka) 
{

    var changeToString = String(angka)

    if (changeToString.length === 0)
      {
          return 0
      }
    else
      {
          var revert = Number(changeToString[0])
          return revert + totalDigitRekursif(changeToString.slice(1))
      }

}
  









  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5