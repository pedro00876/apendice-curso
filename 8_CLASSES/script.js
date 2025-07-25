class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa gola V', 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))


const tenis = new Product('Nike', 320)

console.log(tenis.name)
console.log(tenis.productWithDiscount)

