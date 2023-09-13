
const numbers = [1, 4, 8, 7, 3, 15]
const number = 8

const sumPairs = (numbers, n) => {
let pairNum = []
let dif = 0
    for(let i = 0; i<numbers.length;i++ ){

        for(let j = 0; j<numbers.length;j++){

         if((numbers[i] + numbers[j]) === n && (numbers.length - i) !== (numbers.length - j) && pairNum.length === 0){
            pairNum.push(numbers[i],numbers[j])
            dif = Math.abs(i - j)
            
         }else if((numbers[i] + numbers[j]) === n && (numbers.length - numbers[i]) !== (numbers.length - numbers[j]) && Math.abs(i - j) <dif ){
            pairNum = []
            pairNum.push(numbers[i],numbers[j])
            dif = Math.abs(i - j)
         }
        }
    }

    if(pairNum.length === 0){
        pairNum = undefined
    }

    return pairNum

    
}

  console.log(sumPairs(numbers,number))