module.exports = function repeater(str, options) {
    let final = [];
    let additions = [];
    if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
        final.push(str);
        final.push(options.addition);
        final.join('');
        return final.join('');
    }
    else if (!options.separator) {
        let counter2 = 0;
        final.push(String(str));
        while (counter2 !== options.repeatTimes - 1) {
            final.push('+');
            final.push(String(str));
            counter2++;
        }
        return final.join('')
    }
    else if (options.addition === undefined) {
        let counter3 = 0;
        final.push(String(str))
        while (counter3 !== options.repeatTimes - 1) {
            final.push(options.separator);
            final.push(String(str));
            counter3++;
        }
        return final.join('')
    }
    else {
        let counter = 0;
        additions.push(String(options.addition))
        while (counter !== options.additionRepeatTimes - 1) {
            additions.push(options.additionSeparator);
            additions.push(String(options.addition));
            counter++
        }
        let counter1 = 0;
        final.push(String(str));
        final.push(additions.join(''))
        while (counter1 !== options.repeatTimes - 1) {
            final.push(String(options.separator));
            final.push(String(str));
            final.push(additions.join(''));

            counter1++;
        }
    }

    return final.join("")
};
