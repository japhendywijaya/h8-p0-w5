function kaliTerusRekursif(angka) 
{
    
    var changeToString = String(angka)
    var recursiveResult = 1

    for (var x =0; x < changeToString.length; x++)
      {
          recursiveResult *= changeToString[x]
      }
    

    changeToString = String(recursiveResult)
    if (changeToString.length === 1)
      {
          return recursiveResult
      }
    else
      {
          return kaliTerusRekursif(recursiveResult)
      }



}
  






  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
  