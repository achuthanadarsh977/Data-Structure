


// function reversestring(word: string):string{
//     let w = word.split('')
//     w.reverse()
//     return w.join('')
// }

// console.log('Word reversed:'+reversestring('Hello'));




// function removeduplicates(word:string):string{
//     let w = word.split('')
//     let e = new Set(w)
    
//     let r = [...e]

//     return r.join("")
// }

// console.log(removeduplicates('Helllo'))


// function vowels(input:string):string{


//     const vowels  = 'aeiouAEIOU';
//     let result: string[] = [];

//     for(let char of input){
//         if(vowels.includes(char)){
//             result.push(char)
//         }
//     }

//     return result.join('')
// }

// console.log(vowels('Hello').length)


// function ispalindrome(word:string):boolean{
//     let r = word.split('').reverse().join('')

//     return word === r

// }

// console.log(ispalindrome('JakDanny'))


// function reverse_word_order(word:string){
//     let r = word.split('').reverse().join('')
//     return r
// }

// console.log('Reversed Word Order:'+reverse_word_order('hello world typescript'))

// function reverseWords(sen:string):string{
//     return sen.split("").map(word => word.split('').reverse()).join()
// }

// console.log(reverseWords('hello world typescript'))


// function RotateString(str:string,k:number){

//     let n = str.length
//     k = k % n
//     return str.slice(n - k) + str.slice(0, n-k)

// }

// console.log(RotateString('hello',2))



function Anagram(str1:string,str2:string):boolean{

    if(str1.length !== str2.length){
        return false
    }

    let ana1 = str1.split('').sort().join('')
    let ana2 = str2.split('').sort().join('')

    return ana1 === ana2


}

console.log(Anagram('listen','nisteln'))
