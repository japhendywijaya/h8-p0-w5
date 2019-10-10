function sorting(arrNumber) 
{

    var sortedList = []
    
    function sortingNumber (dataNumber)
      {
        if ( dataNumber.length === 0)
          {
            // console.log('selesai')
            return ''
          }
        else 
          {
              var minNumber = Math.min(...dataNumber)
              var indexOfMinNUmber = dataNumber.indexOf(minNumber)
              dataNumber.splice(indexOfMinNUmber,1)
              // console.log(dataNumber)

              sortedList.push(minNumber)
              
              return  sortingNumber(dataNumber)
          }
          
      }
    
    sortingNumber(arrNumber)
    // console.log(sortedList)
    return sortedList

}
  
  function getTotal(arrNumber)  
{
    console.log('\n', '\n', '-------------------------------------');

    var maxNumber = Math.max(...arrNumber)
    // console.log('Max number =', maxNumber)
    
    function countMax (arrayNumber)
      {
        if (arrayNumber.length === 0)
          {
            return 0
          }
        else
          {
            if (arrayNumber[0] === maxNumber )
              {
                arrayNumber.shift()
                return 1 + countMax(arrayNumber)
              }
            else
              {
                arrayNumber.shift()
                return countMax(arrayNumber)
              }
          }
      }
    

    if (arrNumber.length === 0)
      {
        return ''
      }
    
    return 'angka paling besar adalah ' + maxNumber + 
              ' dan jumlah kemunculan sebanyak ' + countMax(arrNumber) + ' kali'




}
  





  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  





  console.log('case 1 \n', mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log('case 2 \n', mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log('case 3 \n', mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log('case 4 \n', mostFrequentLargestNumbers([]));
  //''
  