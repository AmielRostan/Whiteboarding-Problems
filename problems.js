
// time O(n) and space O(n)
function logBetween(lowNum, highNum) {
    let arr = [];

    for(let i = lowNum; i <= highNum; i++) {
        arr.push(i);
    }

    console.log(arr);
    return arr;
}

// logBetween(-1, 2);  // => [-1, 0, 1, 2]
// logBetween(14, 6);  // => []
// logBetween(4, 6);  // => [4, 5, 6]

// time O(n) and space O(n)
function logBetweenStepper(min, max, step) {
    const arr = [];

    for(let i = min; i <= max; i += step) {
        arr.push(i);
    }

    console.log(arr);
    return arr;
}

// logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
// logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]


// time O(n) and space O(n)
function printReverse(min, max) {
    const arr = [];

    for(let i = max - 1; i > min; i--) {
        arr.push(i);
    }

    console.log(arr);
    return arr;
}

// printReverse(13, 18) // => [17, 16, 15, 14]
// printReverse(90, 94) // => [93, 92, 91]

// time O(n) and space O(n)
function fizzBuzz(max) {
    const result = [];

    for (let i = 1; i < max; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            result.push(i);
        }
    }

    return result;
}

// fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

// time O(n) and space O(n)
function isPrime(number) {
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPrime(2));  // => true
// console.log(isPrime(10));  // => false
// console.log(isPrime(11));  // => true
// console.log(isPrime(9));  // => false
// console.log(isPrime(2017));  // => true


// time O(n) and space O(n)
function maxValue(array) {
    if(array.length === 0) {
        return null;
    }

    let max = array[0];

    for(let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i];
        }
    }

    console.log(max);
    return max;
}

// maxValue([12, 6, 43, 2]);  // => 43
// maxValue([]);  // => null
// maxValue([-4, -10, 0.43]);  // => 0.43

// time O(n) and space O(n)
function myIndexOf(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }

    return -1;
}

// myIndexOf([1,2,3,4],4); // => 3
// myIndexOf([5,6,7,8],2); // => -1

// time O(n) and space O(n)
function factorArray(array, number) {
    const factors = [];

    for(let i = 0; i < array.length; i++) {
        if(number % array[i] === 0) {
            factors.push(array[i]);
        }
    }

    console.log(factors);
    return factors;
}

// factorArray([2,3,4,5,6],20) // => [2,4,5]
// factorArray([2,3,4,5,6],35) // => [5]
// factorArray([10,15,20,25],5) // => []

function oddRange(end) {
    let arr = [];

    for(let i = 0; i < end; i++) {
        if(i % 2 != 0) {
            arr.push(i);
        }
    }

    console.log(arr);
    return arr;
}

// oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
// oddRange(6);  // => [ 1, 3, 5 ]

function reverseHyphenString(string) {
    let arr = string.split('-');
    let reversed = [];

    for(let i = 0; i < arr.length; i++) {
        reversed.push(arr[arr.length - 1 - i]);
    }

    console.log(reversed.join('-'));
    return reversed.join('-');
}

// reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
// reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"

function intersect(arr1, arr2) {
    const common = [];

    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            common.push(arr1[i]);
        }
    }

    console.log(common);
    return common;
}

// intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
// intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []

function mirrorArray(array) {
    let arr = [];

    for(let i = 0; i < array.length; i++) {
        arr.unshift(array[i]);
    }

    console.log(array.concat(arr));
    return array.concat(arr);
}

// mirrorArray([1,2,3]);
//   // => [ 1, 2, 3, 3, 2, 1 ]
// mirrorArray(['a', 'b', 'c', 'd']);
//   // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

function abbreviate(sentence) {
    let abb = [];
    const words = sentence.split(' ');

    for(let i = 0; i < words.length; i++) {
        if(words[i].length < 5) {
            abb.push(words[i]);
        } else {
            abb.push(removeVowels(words[i]));
        }
    }

    abb = abb.join(' ');
    console.log(abb);
    return abb;
}

function removeVowels(words) {
    const vowels = 'aeiou';
    let abb = '';

    for(char of words) {
        if(!vowels.includes(char)) {
            abb += char;
        }
    }

    return abb;
}

// abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
// abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
// abbreviate('hello world'); // => 'hll wrld'
// abbreviate('how are you'); // => 'how are you'

function adults(people) {
    const adults = [];

    for(let i in people) {
        if(people[i].age >= 18) {
            adults.push(people[i].name);
        }
    }

    console.log(adults);
    return adults;
}

// const ppl = [
//     {name: 'John', age: 20},
//     {name: 'Jim', age: 13},
//     {name: 'Jane', age: 18},
//     {name: 'Bob', age: 7}
//   ];

//   adults(ppl); // => [ 'John', 'Jane' ]

function countScores(people) {
    const scores = {};

    for(let i in people) {
        if(scores[people[i].name] === undefined) {
            scores[people[i].name] = people[i].score;
        } else {
            scores[people[i].name] += people[i].score;
        }
    }

    console.log(scores);
    return scores;
}

// // Example 1:
// const ppl = [
// { name: "Anthony", score: 10 },
// { name: "Fred", score : 10 },
// { name: "Anthony", score: -8 },
// { name: "Winnie", score: 12 }
// ];
// countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// // Example 2
// const peeps = [
// { name: "Anthony", score: 2 },
// { name: "Winnie", score: 2 },
// { name: "Fred", score: 2 },
// { name: "Winnie", score: 2 },
// { name: "Fred", score: 2 },
// { name: "Anthony", score: 2 },
// { name: "Winnie", score: 2 }
// ];

// countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }

function firstNPrimes(n) {
    let arr = [];

    for(let i = 2; i < Infinity; i++) {
        if(n <= 0) {
            console.log(arr);
            return arr;
        }
        if(isPrime(i)) {
            arr.push(i);
            n--;
        }
    }
}

// firstNPrimes(0);  // => []
// firstNPrimes(1);  // => [2]
// firstNPrimes(4);  // => [2, 3, 5, 7]

function peakFinder(array) {
    const peaks = [];

    for(let i = 0; i < array.length; i++) {
        if((i === 0 && array[i] > array[i + 1]) ||
           (array[i] > array[i + 1] && array[i] > array[i - 1]) ||
           (i === array.length - 1 && array[i] > array[i - 1])) {
            peaks.push(i);
        }
    }

    console.log(peaks);
    return peaks;
}

// peakFinder([1, 2, 3, 2, 1]); // => [2]
// peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
// peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]

function divisibleByThreePairSum(array) {
    const pairs = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if((array[i] + array[j]) % 3 === 0) {
                pairs.push([i, j]);
            }
        }
    }

    console.log(pairs);
    return pairs;
}

// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// arr2 // => [[1, 3]]

function zipArray(arr1, arr2) {
    const zip = [];

    for(let i = 0; i < arr1.length; i++) {
        zip.push([arr1[i], arr2[i]]);
    }

    console.log(zip);
    return zip;
}

// const a1 = ['a', 'b', 'c', 'd'];
// const a2 = [10, 20, 30, 40];

// const result = zipArray(a1, a2);
// result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

function twoDimensionalTotal(array) {
    let sum = 0;

    for(let i = 0;i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }

    console.log(sum);
    return sum;
}

// const arr1 = [
// [5, 2, 5, 3],
// [12, 13],
// ];

// twoDimensionalTotal(arr1);  // => 40

// const arr2 = [
// [2],
// [1, 9],
// [1, 1, 1]
// ]

// twoDimensionalTotal(arr2);  // => 15

function countInnerElement(arr) {
    const repetitions = {};

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(repetitions[arr[i][j]] === undefined) {
                repetitions[arr[i][j]] = 1;
            } else {
                repetitions[arr[i][j]]++;
            }
        }
    }

    console.log(repetitions);
    return repetitions;
}

// const arr1 = [
// [1, 2, 4, 5],
// [2, 7, 4],
// [1, 4, 5, 2, 7]
// ]

// countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

// const arr2 = [
// ['a','b','c','d'],
// ['a','b'],
// ['a','c','d','a']
// ]

// countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}

function twoDiff(array) {
    const two = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(Math.abs(array[i] - array[j]) === 2) {
                two.push([i, j]);
            }
        }
    }

    console.log(two);
    return two;
}

// twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
// twoDiff([])  // => []

function arrayDiff(arr1, arr2) {
    const unique = [];

    for(let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i])) {
            unique.push(arr1[i]);
        }
    }

    for(let i = 0; i < arr2.length; i++) {
        if(!arr1.includes(arr2[i])) {
            unique.push(arr2[i]);
        }
    }

    console.log(unique);
    return unique;
}

// const array1 = [1, 23, 2, 43, 3, 4]
// const array2 = [3, 23]
// arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

// const array3 = ['a', 'ab', 'c', 'd', 'c']
// const array4 = ['d']
// arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']

function valueCounter(obj, val) {
    let count = 0;

    for(let key in obj) {
        if(obj[key] === val) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// valueCounter(obj1, 'Anne')  // => 3

// const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// valueCounter(obj2, 88)  // => 0

// const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// valueCounter(pairs, 'Roman')  // => 2

function elementCount(array) {
    const count = {};

    for(let i = 0; i < array.length; i++) {
        if(count[array[i]] === undefined) {
            count[array[i]] = 1;
        } else {
            count[array[i]]++;
        }
    }

    console.log(count);
    return count;
}

// elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

function nextTwoPrimes(num) {
    const primes = [];

    for(let i = num + 1; primes.length < 2; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }

    console.log(primes);
    return primes;
}

// nextTwoPrimes(2);  // => [ 3, 5 ]
// nextTwoPrimes(3);  // => [ 5, 7 ]
// nextTwoPrimes(7);  // => [ 11, 13 ]
// nextTwoPrimes(8);  // => [ 11, 13 ]
// nextTwoPrimes(20);  // => [ 23, 29 ]
// nextTwoPrimes(97);  // => [ 101, 103 ]

function pairProduct(arr, num) {
    const pairs = [];
    let i = 0;

    while(i < arr.length) {
        let j = i + 1;

        while(j < arr.length) {
            if(arr[i] * arr[j] === num) {
                pairs.push([i, j]);
            }

            j++
        }

        i++
    }

    console.log(pairs);
    return pairs;
}

// pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
// pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
// pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]

function twoDimensionalSize(array) {
    let count = 0;

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// const arr1 = [
// [1, 2, 3],
// [4, 5],
// [6, 7, 8, 9]
// ];
// twoDimensionalSize(arr1);  // => 9

// const arr2 = [
// ['a'],
// ['b', 'c', 'd', 'e']
// ];
// twoDimensionalSize(arr2);  // => 5

function longWordCount(string) {
    const words = string.split(' ');
    let count = 0;

    for(let i = 0; i < words.length; i++) {
        if(longerThan(words[i], 7)) {
            count++;
        }
    }

    console.log(count);
    return count;
}

let longerThan = function(word, num) {
    if(word.length > 7) {
        return true;
    }
    return false;
}

// longWordCount("");  // => 0
// longWordCount("short words only");  // => 0
// longWordCount("one reallylong word");  // => 1
// longWordCount("two reallylong words inthisstring");  // => 2
// longWordCount("allwordword longwordword wordswordword");  // => 3
// longWordCount("seventy schfifty five");  // => 1

const cache = {};

function factorial(n) {
    if(n === 1 || n === 0) {
        return 1;
    }

    if(cache[n] === undefined) {
        cache[n] = n * factorial(n - 1);
    }

    return cache[n];
}

// console.log(factorial(1));  // => 1
// console.log(factorial(4));  // => 24
// console.log(factorial(5));  // => 120
// console.log(factorial(10));  // => 3628800

function lcm(num1, num2) {
    for(let i = num1; i < Infinity; i++) {
        if((i % num1 === 0) && (i % num2 === 0)) {
            console.log(i);
            return i;
        }
    }
}

// lcm(2, 3);  // => 6
// lcm(6, 10);  // => 30
// lcm(24, 26);  // => 312

function hipsterfyWord(word) {
    for(let i = word.length - 1; i >= 0; i--) {
        if(isVowel(word[i])) {
            console.log(word.slice(0, i) + word.slice(i + 1));
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
}

let isVowel = function (char) {
    const vowels = 'aeiou';

    if(vowels.includes(char.toLowerCase())) {
        return true;
    }

    return false;
}

// hipsterfyWord('proper') // => 'propr'
// hipsterfyWord('tonic') // => 'tonc'
// hipsterfyWord('PANTHER') // => 'PANTHR'
// hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

function hipsterfy(sentence) {
    sentence = sentence.split(' ');
    let hipster = [];

    for(let i of sentence) {
        hipster.push(hipsterfyWord(i));
    }

    hipster = hipster.join(' ');
    console.log(hipster);
    return hipster;
}

// hipsterfy("proper");  // => "propr"
// hipsterfy("proper tonic panther");  // => "propr tonc panthr"
// hipsterfy("towel flicker banana");  // => "towl flickr banan"
// hipsterfy("runner anaconda");  // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

function objectToString(count) {
    let string = '';

    for(let i in count) {
        for(let j = 0; j < count[i]; j++) {
            string += i;
        }
    }

    console.log(string);
    return string;
}

// objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
// objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'

function shortestWord(sentence) {
    sentence = sentence.split(' ');
    let shortest = sentence[0];

    for(let word of sentence) {
        if(word.length < shortest.length) {
            shortest = word;
        }
    }

    console.log(shortest);
    return shortest;
}

// shortestWord('app academy is cool') // => 'is'
// shortestWord('programming bootcamp') // => 'bootcamp'

function greatestCommonFactor(num1, num2) {
    for(let i = num1; i > 0; i--) {
        if(num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            return i;
        }
    }
}

// greatestCommonFactor(15, 25) // => 5
// greatestCommonFactor(16, 24) // => 8
// greatestCommonFactor(7, 11) // => 1

function isPassing(assessments) {
    let sum = 0;

    for(let i = 0; i < assessments.length; i++) {
        sum += assessments[i].score;
    }

    return (sum / assessments.length) >= 70;
}

// const assessments1 = [
// { number: 1, score: 60 },
// { number: 2, score: 90 },
// { number: 3, score: 80 },
// { number: 4, score: 100 },
// { number: 5, score: 85 }
// ];

// console.log(isPassing(assessments1)) // => true
// const assessments2 = [
// { number: 1, score: 60 },
// { number: 2, score: 20 },
// { number: 3, score: 45 }
// ];

// console.log(isPassing(assessments2)) // => false

function valueConcat(array, obj) {
    const sol = [];

    for(let i = 0; i < array.length; i++) {
        if(obj[array[i]] != undefined) {
            sol.push(array[i] + obj[array[i]]);
        } else {
            sol.push(array[i]);
        }
    }

    console.log(sol);
    return sol;
}

// const arr = ['alex', 'maurice', 'meagan', 'ali'];
// const obj = { alex: 'bronca', ali: 'harris' }
// valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

// valueConcat(['a', 'b', 'c'], { b: 2, c: 3 }) // => [ 'a', 'b2', 'c3' ]

function threeInARow(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
            return true;
        }
    }
    return false;
}

// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

function variableNameify(words) {
    let string = words[0].toLowerCase();

    for(let i = 1; i < words.length; i++) {
        string += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    console.log(string);
    return string;
}

// variableNameify(['is', 'prime']) // => 'isPrime'
// variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
// variableNameify(['MaX', 'VALUE']) // => 'maxValue'

function threeIncreasing(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] + 1 === arr[i + 1] && arr[i] + 2 === arr[i + 2]) {
            return true;
        }
    }

    return false;
}

// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false

function reverse2D(array) {
    let string = '';

    for(let i = array.length - 1; i >= 0; i--) {
        for(let j = array[i].length - 1; j >= 0; j--) {
            string += array[i][j];
        }
    }

    console.log(string);
    return string;
}

// const arr1 = [
// ['a', 'b', 'c', 'd'],
// ['e', 'f'],
// ['g', 'h', 'i']
// ];

// reverse2D(arr1) // => 'ihgfedcba'
// const arr2 = [
// ['Julian', 'Matt', 'Mike'],
// ['Oscar', 'Patrick']
// ];
// reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'

function reverb(word) {
    let newWord = word;

    for(let i = word.length - 1; i >= 0; i--) {
        if(isVowel(word[i])) {
            newWord += word.slice(i);
        }
    }

    console.log(newWord);
    return newWord;
}

// reverb('running');  // => 'runninging'
// reverb('wild');  // => 'wildild'
// reverb('debugged');  // => 'debuggeded'
// reverb('my');  // => 'my'

function countRepeats(string) {
    const charCount = {};
    let repeats = 0;

    for(let i = 0; i < string.length; i++) {
        const char = string[i];

        if(charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    for(let key in charCount) {
        if(charCount[key] >= 2) {
            repeats++;
        }
    }

    console.log(repeats);
    return repeats;
}

// countRepeats('calvin'); // => 0
// countRepeats('caaaalvin'); // => 1
// countRepeats('pops'); // => 1
// countRepeats('mississippi'); // => 3
// countRepeats('hellobootcampprep'); // => 4

function pairsToString(arr) {
    let string = '';

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i][1]; j++) {
            string += arr[i][0];
        }
    }

    console.log(string);
    return string;
}

// const array1 = [
// ['a', 3],
// ['b', 1],
// ['c', 2]
// ];
// pairsToString(array1);  // => 'aaabcc'

// const array2 = [
// ['f', 1],
// ['o', 2],
// ['d', 1],
// ['!', 1]
// ];
// pairsToString(array2);  // => 'food!'

function countAdjacentSums(arr, n) {
    let count = 0;

    for(let i = 0; i < arr.length; i += 2) {
        if(arr[i] + arr[i + 1] == n || arr[i] + arr[i - 1] === n) {
            count++;
        }
    }

    console.log(count);
    return count;
}

// countAdjacentSums([1, 5, 1], 6) // => 2
// countAdjacentSums([7, 2, 4, 6], 7) // => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3

function signFlipCount(nums) {
    let count = 0;
    let positive;
    if(nums[0] > 0) {
        positive = true;
    } else {
        positive = false;
    }

    for(let i = 0; i < nums.length; i++) {
        if(positive === true && nums[i] < 0) {
            count++;
            positive = false;
        } else if (positive === false && nums[i] > 0) {
            count++;
            positive = true;
        }
    }

    console.log(count);
    return count;
}

// signFlipCount([5, 6, 10, 3]); // => 0
// signFlipCount([-12, 0, -3, -5]); // => 0
// signFlipCount([-12, 10, -3, -5]); // => 2
// signFlipCount([1, -2, -3, -4]); // => 1
// signFlipCount([-1, 11.3, -3, 100]); // => 3

function powerSequence(base, length) {
    let powers = [base];
    let num = base;

    for(let i = 1; i < length; i++) {
        num *= base;
        powers.push(num);
    }

    console.log(powers);
    return powers;
}

// powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
// powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
// powerSequence(8, 3);  // => [ 8, 64, 512 ]

function collapseString(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result += str[i];
        }
    }

    console.log(result);
    return result;
}

// collapseString('apple'); // => 'aple'
// collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
// collapseString('hello   app academy'); // => 'helo ap academy'

function oddWordsOut(sentence) {
    let pairWords = [];
    let words = sentence.split(' ');

    for(let i = 0; i < words.length; i++) {
        if(words[i].length % 2 === 0) {
            pairWords.push(words[i]);
        }
    }

    console.log(pairWords.join(' '));
    return pairWords.join(' ');
}

// oddWordsOut('go to the store and buy milk');  // => 'go to milk'
// oddWordsOut('what is the answer');  // => 'what is answer'

function mindPsAndQs(str) {
    let longest = 0;
    let current = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'P' || str[i] === 'Q') {
            current++;
        } else {
            current = 0;
        }
        if(longest < current) {
            longest = current;
        }
    }

    console.log(longest);
    return longest;
}

// mindPsAndQs('BOOTCAMP');  // => 1
// mindPsAndQs('APCDQQPPC');  // => 4
// mindPsAndQs('PQPQ');  // => 4
// mindPsAndQs('PPPXQPPPQ');  // => 5

function commonFactors(num1, num2) {
    let common = [];

    for(let i = 1; i <= num1; i++) {
        if(num1 % i === 0 && num2 % i === 0) {
            common.push(i);
        }
    }

    console.log(common);
    return common;
}

// commonFactors(12, 50);  // => [ 1, 2 ]
// commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22);  // => [ 1, 11 ]
// commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]

function commonPrimeFactors(num1, num2) {
    let common = [];

    for(let i = 2; i <= num1; i++) {
        if(isPrime(i)) {
            if(num1 % i === 0 && num2 % i === 0) {
                common.push(i);
            }
        }
    }

    console.log(common);
    return common;
}

// commonPrimeFactors(12, 50);  // => [ 2 ]
// commonPrimeFactors(6, 24);  // => [ 2, 3 ]
// commonPrimeFactors(11,22);  // => [ 11 ]
// commonPrimeFactors(45, 60);  // => [ 3, 5 ]

function splitHalfArray(array) {
    let split = [];
    let middle = (array.length / 2) - (array.length / 2 % 1);

    split.push(array.slice(0, middle));
    split.push(array.slice(-middle));

    console.log(split);
    return split;
}

// splitHalfArray([1, 2, 3, 4, 5]);
//   // => [ [ 1, 2 ], [ 4, 5 ] ]

// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// //   => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

function threeUniqueVowels(string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let different = '';

    for(let i = 0; i < string.length; i++) {
        if(isVowel(string[i]) && !different.includes(string[i])) {
            different += string[i]
        }
        if(different.length >= 3) {
            return true;
        }
    }

    return false;
}

// console.log(threeUniqueVowels('delicious'));  // => true
// console.log(threeUniqueVowels('the bootcamp'));  // => true
// console.log(threeUniqueVowels('bootcamp'));  // => false
// console.log(threeUniqueVowels('dog'));  // => false
// console.log(threeUniqueVowels('go home'));  // => false

function vowelShift(sentence) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let arr = sentence.split(' ');

    for(let i = 0; i < arr.length; i++) {
        let word = arr[i].split('');

        for(let j = 0; j < word.length; j++) {
            if(VOWELS.includes(word[j])) {
                let index = VOWELS.indexOf(word[j]) + 1;
                word[j] = VOWELS[index];
            }
        }

        arr[i] = word.join('');
    }

    console.log(arr.join(' '));
    return arr.join(' ');
}

// vowelShift('bootcamp');  // => 'buutcemp'
// vowelShift('hello world');  // => 'hillu wurld'
// vowelShift('on the hunt');  // => 'un thi hant'

function hasSymmetry(array) {
    for(let i = 0; i < array.length / 2; i++) {
        if(array[i] != array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
// console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false

function evenSumArray(array) {
    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        let sum = 0;
        for(let j  = 0; j <= array[i]; j++) {
            if(isEven(j)) {
                sum += j;
            }
        }
        newArray.push(sum);
    }

    console.log(newArray);
    return newArray;
}

let isEven = function(num) {
    if(num % 2 === 0) {
        return true;
    }
    return false;
}


// evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
// evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]

function numsToWords(numString) {
    const nums = {
        0: 'Zero', 1: 'one', 2: 'Two', 3: 'Three', 4: 'Four',
        5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine'
    }

    let str = '';

    for(let i = 0; i < numString.length; i++) {
        str += nums[numString[i]];
    }

    console.log(str);
    return str;
}

// numsToWords('42') // => 'FourTwo'
// numsToWords('123') // => 'OneTwoThree'
// numsToWords('159598') // => 'OneFiveNineFiveNineEight'

function moreDotLessDash(str) {
    let dot = 0;
    let slash = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '-') {
            slash++;
        } else if (str[i] === '.'){
            dot++;
        }
    }

    return console.log(dot > slash);
}

moreDotLessDash('2-D arrays are fun. I think.');  // => true
moreDotLessDash('.-.-.');  // => true
moreDotLessDash('.-');  // => false
moreDotLessDash('..--');  // => false
