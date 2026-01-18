
console.log("Video 32");

const sum = (a, b, c) => {
    console.log(" run before");
    if (typeof a !== 'number') {
        console.log(" run empty return");
        return 0;
    }
    return a + b + c;
    console.log("run after");
}

console.log(sum("", 2, 3));





