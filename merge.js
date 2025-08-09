console.log("im merge");
// array to be sorted
const nums = [5, 4, 2, 3, 1, 6, 8, 7];


// function to perform merge sort
function mergeSort (arr) {

    // base case if arr is empty
    if(arr.length === 0){
        return [];
    }
    // base case if arr has one item
    if(arr.length === 1){
        return arr;
    }

    // recursive case
    const mid = Math.floor(arr.length / 2); // midpoint of array for division into two
    const firstHalf = mergeSort(arr.slice(0, mid));
    const secondHalf = mergeSort(arr.slice(mid));
    
    // merge the sorted halves
    return merge(firstHalf, secondHalf);
}


// function to sort the resuls of mergeSort
function merge (first, second){
    // array to store the sorted results
    const sorted = [];

    // loop to merge the results
    let i = 0;
    let j = 0;

    while(i < first.length && j < second.length){
        if(first[i] < second[j]){
            sorted.push(first[i]);

            i++;
        }else {
            sorted.push(second[j]);

            j++;
        }
    }

    // whatever remains add it to the sorte list
    return sorted.concat(first.slice(i)).concat(second.slice(j));
}

console.log(mergeSort(nums));