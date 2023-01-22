// FOR ADDITION
let numFor = 0;
for(let i = 0; i<10;i++){
    numFor++;
}
console.log(numFor);

// WHILE ADDITION
let numWhile = 0;
while(numWhile<10){
    numWhile++;
};
console.log(numWhile);

// RECURSIVE ADDITION
const recursiveAddition = (number, limit) => {
    if(number === limit){
        return number;
    }
    return recursiveAddition(number + 1, limit);
}

const result = recursiveAddition(0, 10);
console.log(result);

// RECURSIVE FIBONACCI
const sequence = [];
const iterations = 10;
const fibonacciRecursive = (sequence) => {
    sequence.length < 2 ? sequence.push(1) : sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    if (sequence.length === iterations) {
        return sequence.toString();
    }
    return fibonacciRecursive(sequence);
};

console.log(fibonacciRecursive(sequence));

// JS Visualizer https://www.jsv9000.app/
// Diagramas: https://excalidraw.com/#json=FcVzmQ_v1tmnJlbETAdfW,xbGHkx8mXZwK1DPR8f_H6w
