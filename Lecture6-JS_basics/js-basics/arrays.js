let arr = ["Apple", "Mango", "Kiwi", "melon","grape","lichi","orange"]

arr.push("Banana");//insert at back
arr.pop();//remove from back
arr.shift();//remove from front
arr.unshift("Banana");//insert at front
arr.indexOf("Kiwi"); //finds the index


console.log("Array: ",arr);

if (arr[0] == "Banana") {
    console.log("True");
} else console.log("False");

//slice
let p = arr.slice(3, 6);
console.log("Slice: ", p);
console.log("original Array: ", arr);

//splice
p = arr.splice(4,1);
console.log("Splice: ", p);
console.log("original Array: ", arr);

//splice - replce
p = arr.splice(4,1,"car","bus");
console.log("Splice(replace): ", p);
console.log("original Array: ", arr);


//concat
p = arr.concat("car", "bus");
// p = arr.concat(["car", "bus"]); also correct
console.log("Concat: ", p);
console.log("original Array: ", arr);


let arr2 = [1, 'hello', true, [2, 3]]
for (let i = 0; i < arr2.length; i++) {
    console.log("For: ",arr2[i]);
}

for (const i in arr2) {
    console.log("ForIn: ", arr2[i]);

}

for (const val of arr2) {
    console.log("ForOf: ", val);

}