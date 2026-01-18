
console.log("Video 41");

const ages = [10, 20, 30, 25, 12, 19];

const agesx2 = ages.map((item) => {
    return item * 2;
});

const agesGreatThan18 = ages.filter((item) => {
    return item > 18;
});

console.log("original: ", ages);
console.log("agesx2: ", agesx2);
console.log("agesGreatThan18: ", agesGreatThan18);
