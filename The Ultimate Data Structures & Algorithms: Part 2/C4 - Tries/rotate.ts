


function rotateright(str:string , k:number):string{

    if(str.length === 0) return str

    k = k % str.length
    return str.slice(-k) + str.slice(0,-k)


}


function rotateleft(str:string,k:number):string{

    if(str.length === 0) return str

    return str.slice(k) + str.slice(0,k)
}


console.log(rotateleft('abcde',2))

console.log(rotateright('abcde',2))