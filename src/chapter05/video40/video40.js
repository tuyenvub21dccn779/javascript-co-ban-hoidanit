
console.log("Video 40");

const scores = [10, 8, 3, 7, 5];

scores.forEach((element, index) => {
    console.log("index = ", index, " value = ", element);
});

console.log("===================");

const newScores = scores.map((value, index) => {
    console.log("index = ", index, " value = ", value);
    return value * 2;
});



console.log(" new scores = ", newScores);

console.log("===================");


const otherScorex2 = scores.map((value, index) => value * 2
);

console.log(" new scores = ", otherScorex2);