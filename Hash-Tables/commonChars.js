var commonChars = function(A) {
    const allWordsArr = []
    const result = []

    for(let i = 0; i < A.length; i++){
        const currentWord = A[i]
        const wordMap = {}
        for(let j = 0; j < currentWord.length; j++){
            const currChar = currentWord[j]
            if(!wordMap[currChar]){
                wordMap[currChar] = 1
            }else{
               wordMap[currChar] += 1 
            }
        }
       allWordsArr.push(wordMap) 
    }    
    
    const firstMap = allWordsArr[0]
    for(let letter in firstMap){
        let count = firstMap[letter]
        for(i = 1; i < allWordsArr.length; i++){
            const currMap = allWordsArr[i]
            if(currMap[letter]){
                if(currMap[letter] < count){
                    count = currMap[letter]
                }
            }else{
                count = 0
            }
        }
        
        for(let i = 0; i < count; i ++){
            result.push(letter)
        }
    }
    return result
};