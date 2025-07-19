
// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["spiderman", "thor"];

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]);  // prints 1

// array methods
myArr.push(6);          // adds 6 at the end of myArr
console.log(myArr);     // prints updated array

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// now slice and splice 
// the diff bet them is that 

console.log("a" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("b" , myArr);

const myn2 = myArr.splice(1,3)
console.log("c" , myArr);

console.log(myn2);


// the splice value is going to delete from the original array (in splice)  

