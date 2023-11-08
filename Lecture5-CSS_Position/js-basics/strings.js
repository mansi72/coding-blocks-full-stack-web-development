let p = 'arnav'
let str = `this is ${p}'s string`
let longstr = "jhcvsvc\
nabjhvcv\
vahcs"


//Searching
let str1 = "this-is-a-string"
console.log("IndexOf: ",str1.indexOf('i', 1));//substring,startIndex
console.log("LastIndexOf: ",str1.lastIndexOf('i', 10));//substring,startIndex

// Extracting

console.log("Slice: ",str1.slice(2, 4))//startIndex,endIndex
console.log("Slice(negative): ",str1.slice(-8, -1))//startIndex,endIndex
console.log("Substr: ",str1.substr(2, 4))//startIndex,length
console.log("Substring: ",str1.substring(2, 4))//startIndex,endIndex

