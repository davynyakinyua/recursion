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

// recursive function to create fibonacci sequence
// input is a number
// output is an array of fibonacci sequence
function fibsRec (n) {
  // base case
  if(n <= 0){   // base case if n is 0
    return [];
  }else if(n === 1){ //base case if n is 1
    return [0];
  }else if(n === 2){ // base case is n is 2
    return [0, 1];
  }

  // recursive base
  // reduce n until base case  with n ==2 is active and assign it to sequence
  const sequence = fibsRec(n -1); 
  // get next number now that sequence is [0, 1]
  const nextNum = sequence[sequence.length -1] + sequence[sequence.length -2];
  // push the next number to sequence array
  sequence.push(nextNum);

  return sequence;
};

console.log(fibsRec(8));