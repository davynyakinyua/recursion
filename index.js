console.log("Hello node.js");

// create a function that returns a fibonacci sequence using a loop
// input is a number
// output is an array of numbers
function fibs (n) {
    const fib = [];
    for(let i = 0; i < n; i++){
        if(i === 0){
            fib.push(0); // first fibonacci number
        } else if(i === 1){
            fib.push(1);  // second fibonacci number
        } else {
            fib.push(fib[i -1] + fib[i -2]); //calculate the next fibonacci number
        }
        
    }
   console.log(fib);
   return fib;
}

fibs(8);