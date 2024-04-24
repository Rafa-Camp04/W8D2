// Your code here
Array.prototype.uniq = function() {

    const new_arr = [];

    for (let i = 0;i < this.length; i++) {
        if (!new_arr.includes(this[i])) {
            new_arr.push(this[i]);
        };
    };

    return new_arr;
};

// console.log([1,2,2,3,3,4,4,5].uniq());

Array.prototype.twoSum = function() {

    let i = 0;
    const outer_arr = [];

    while (i < this.length) {
        let j = i + 1;

        while (j < this.length) {

            if (this[i] + this[j] === 0) {
                outer_arr.push([i, j]);
            };

            j++;
        };
        i++;
    };

    return outer_arr;
};

// console.log([-1, 0, 2, -2, 1].twoSum())

Array.prototype.transpose = function() {

    const transposed_arr = [];

    for (let i = 0; i < this[0].length; i++) {
        const arr = [];

        for (let j = 0; j < this.length; j++) {
            arr.push(this[j][i]);
        }

        transposed_arr.push(arr);
    }

    return transposed_arr;
}

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())

