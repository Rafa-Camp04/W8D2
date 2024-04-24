// Your code here
Array.prototype.myEach = function(callback) {

    // callback
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    };

};

// [1,2,3,4,5,6].myEach((el) => console.log(el));

Array.prototype.myMap = function(callback) {

    const arr = []

    // closure
    this.myEach((el) => {
        arr.push(callback(el))
    })

    return arr
};

// console.log([1,2,3,4,5,6].myMap((el) => el * el));
// console.log([1,2,3,4,5,6].myMap((el) => el + el));

Array.prototype.myReduce = function(callback) {

    const arr = []

    this.myEach((el) => {

        arr.push(callback(el))

    })

    return arr
}


// without initialValue
[1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }); // => 6
  
  // with initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
// }, 25); // => 31