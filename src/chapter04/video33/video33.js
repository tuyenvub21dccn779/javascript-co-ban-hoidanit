
console.log("Video 33");

let globalVar = "Tôi là biến toàn cục";

function show() {
    console.log(globalVar); // truy cập được

}

show();

console.log(globalVar);

function sayHi() {
    let name1 = "hoidanit";
    console.log("hi" + name1);

    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y);
    }

    console.log(x);
}

sayHi();
console.log(name1);
