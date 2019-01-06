function RandomWord(arr) {
    this.arr = arr;

    this.randomize = function (length) {
        var chars = arr.join("");
        var randomString = "";

        if (!Array.isArray(this.arr)) {
            return '"chars" should be an array';
        }
    
        for (var i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                return '"chars" should include only strings';
            }
        }

        if (isNaN(length)) {
            return '"length" should be a number';
        }
        for (var i = 0; i < length; i++) {
            randomString += chars.charAt(Math.floor(Math.random() * arr.length));
        }
        return randomString;
    }
}

var word = new RandomWord(['a', 'b', 's', 'z', 'a', 'k']);
var result = word.randomize(10);
console.log(result);
result = word.randomize(2);
console.log(result);