
console.log("lab 03");

const product1 = {
    name: "T-shirt",
    price: 200,
    inStock: true
}

const product2 = {
    name: "Quan short",
    price: 500,
    inStock: false
}

const product3 = {
    name: "Ao ba lo",
    price: 300,
    inStock: true
}

const product4 = {
    name: "Ao dai tay",
    price: 350,
    inStock: false
}

const product5 = {
    name: "Tat",
    price: 100,
    inStock: true
}

const products = [product1, product2, product3, product4, product5];

console.log(products[0].name);

console.log("====================");

products[2].price = 150;
console.log(products);

console.log("====================");
products.push({
    name: "Giay",
    price: 500,
    inStock: true
});

console.log(products);

console.log("====================");

products.pop();

console.log(products);

console.log("====================");

products.forEach((item) => {
    console.log(item.name);
});

console.log("====================");

const prices = products.map((item) => {
    return item.price;
});

const inStockProducts = products.filter((item) => {
    return item.inStock;
});

console.log("====================");

for (let key in products[0]) {
    console.log(key, products[0][key]);
}
