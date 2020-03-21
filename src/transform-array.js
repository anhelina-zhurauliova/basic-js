module.exports = function transform(arr) {
    // if (arr.length === 0) { return []; }
    if (!Array.isArray(arr)) {
        throw new Error("Error");
    }

    while (arr.includes('--discard-next') ||
        arr.includes('--discard-prev') ||
        arr.includes('--double-next') ||
        arr.includes('--double-prev')) {

        if (arr.includes('--double-next')) {
            let index = arr.indexOf('--double-next');
            if (index !== arr.length - 1) {
                arr.splice(index, 1, arr[index + 1])
            }
            else {
                arr.splice(index, 1)
            }
        }
        if (arr.includes("--double-next")) continue;

        if (arr.includes('--double-prev')) {
            let index = arr.indexOf('--double-prev');
            if (index !== 0) {
                arr.splice(index, 1, arr[index - 1])
            }
            else {
                arr.splice(index, 1)
            }
        }
        if (arr.includes("--double-prev")) continue;

        if (arr.includes('--discard-next')) {
            let index = arr.indexOf('--discard-next');
            if (index !== arr.length - 1) {
                arr.splice(index, 2)
            }
            else {
                arr.splice(index, 1)
            }
        }
        if (arr.includes("--discard-next")) continue;

        if (arr.includes('--discard-prev')) {
            let index = arr.indexOf('--discard-prev');
            if (index !== 0) {
                arr.splice(index - 1, 2)
            }
            else {
                arr.splice(index, 1);
            }
        }
    }

    return arr;
}

