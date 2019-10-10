function changeVocals (str) 
{
    var groupVocal = ['a', 'i', 'u', 'e', 'o']
    var newChangeVocal = ''


    for (var x = 0; x<str.length; x++)
      {
        var newChar = ''
        for (var y = 0; y < groupVocal.length; y++)  
          {
            if (str[x].toLowerCase() === groupVocal[y])
              {
                newChar = str.charCodeAt(x) + 1
              }
          }

        if (newChar !== '')
          {
            newChangeVocal += String.fromCharCode(newChar)
          }
        else
          {
            newChangeVocal += str[x]
          }
      }
    // console.log('original str =', str)  
    // console.log('new str =', newChangeVocal)
    
    return newChangeVocal


}
  



function reverseWord (str) 
{
  var newReverseWord = ''
  
  for (var x =0; x < str.length; x++)
  {
    newReverseWord += str[str.length - 1 - x]
  }
  // console.log('original str =', str)
  // console.log('new str =', newReverseWord)

  return newReverseWord

}




function setLowerUpperCase (str) 
{

  var newSetLowerUpperCase = ''

  for (var x = 0; x<str.length; x++)
    {
      var temp =''

      if (str[x] === str[x].toLowerCase())
        {
          newSetLowerUpperCase += str[x].toUpperCase()
        }
      else if (str[x] === str[x].toUpperCase())
        {
          newSetLowerUpperCase += str[x].toLowerCase()
        }  
    }
  // console.log('original str =', str)
  // console.log('new str =', newSetLowerUpperCase)
  
  return newSetLowerUpperCase


}




function removeSpaces (str) 
{
  str = str.replace(' ','')
  // console.log(str) 

  return str
}





function passwordGenerator (name) 
{
  console.log('\n\n', 'case for -', name,  '\n', '-------------------------------------');
    
    var minChar = 5
    if (name.length < minChar)
      {
        return 'Minimal karakter yang diinputkan adalah '+ minChar + ' karakter'
      }
    else
      {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
      }

}
  


  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
  