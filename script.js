//task 1
const text1 = 'Hello';
const text2 = 'world'
const text3 = `${text1} ${text2}!`;
console.log(`task 1 (join strings): ${text3}`);

//task 2
const multiply = (a=1, b=1) => a*b;
console.log(`task 2 (fn multiply default params): ${multiply()}`);
console.log(`task 2 (fn multiply(2)): ${multiply(2)}`);
console.log(`task 2 (fn multiply(2,2)): ${multiply(2,2)}`);

//task 3
const average = (...args) => args.reduce( ( a, b ) => a + b, 0 ) / args.length;
console.log(`task 3: (Average calculation): ${average(4,2,2)}`);

  
//task 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(`task 4: (Average from grades): ${average(...grades)}`);

//task 5
const vars = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstname,,lastname] = vars;
console.log(`task 5 (destructuring): ${firstname} ${lastname}`);

//extra task

//task 1
//Help Timmy with his string template so it works as he expects!

function buildString(...template){
  return `I like ${template.join(',')}`;
};

console.log(`extra task 1 (correct Timmy typo): ${buildString('Cheese','Milk','Chocolate')}`);

//task 2

/*
Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.*/

const shuffleIt = (arr, ...rest) => { 
  for (t of rest) {
      if (Array.isArray(t) && t.length == 2) {
          let [idx1, idx2] = t;
          [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]       
      }      
    }
  return arr;
}

console.log(`extra task 3 (create fn shuffleIt): ${shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])}`);

//task 3

//Sum all the values in an array using Arrow style function

const Sum = arr => arr.reduce((a,b) => a + b);

console.log(`extra task 3 (sum values in array using arrow fn): ${Sum([1,2,3,4,5])}`);

//task 4

/*You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

  spread(someFunction, [1, true, "Foo", "bar"] ) 
  is the same as...
  someFunction(1, true, "Foo", "bar")*/

function spread(func, args) {
  return func(...args)
};

console.log(`extra task 4 (create spread fn which return some_fn(args)): 1 + 2 = ${spread((x,y) => x+y, [1,2])}`);













