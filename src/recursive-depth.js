module.exports = class DepthCalculator {
    calculateDepth(arr, level = 0) {
        let count = 1;
        let depth = 0;
        arr.forEach(element => {
            if (element instanceof Array) {
                count = this.calculateDepth(element);
                if (depth < count) depth = count;
            }
        });
        return ++depth;
    }
};
