function equalStacks(h1, h2, h3) {
    let height1=0
    let height2=0
    let height3=0
    let i=0
    let j=0
    let k=0

    for(let el of h1){
        height1 += el
    }
    for(let elem of h2){
            height2 += elem
    }
    for(let element of h3){
            height3 += element
    }

    while(height1 !== height2 || height2 !== height3 || height1 !== height3){
  if(height1 >= height2 && height1 >= height3){
        height1 = height1 - h1[i]
        i = i+1
        console.log('a',height1, i)
    } else if(height2 >= height1 && height2 >= height3){
        height2 = height2 - h2[j]
        j = j+1
        console.log('b',height2, j)
    } else if(height3 >= height2 && height3 >= height1){
        height3 = height3 - h3[k]
        k = k+1
        console.log('c',height3, k)
    }
    console.log('h1:', height1, 'h2:', height2,
    'h3:', height3) 
    }
        return height1
}