// class Laptop{
//     constructor(brand, price, ram){
//         this.brand = brand
//         this.price = price
//         this.ram = ram;

//     }
//     getBrand(){
//         return this.brand
//     }
//     getPrice(){
//         return this.price
//     }
//     getRam(){
//         return this.ram
//     }
//     setBrand(name){
//         this.brand = name
//     }
// }
// let laptop1 = new Laptop("lenovo", "16gb",20000)
// let laptop2 = new Laptop("msi","8gb", 2222222)
// console.log(laptop1.brand,laptop2.ram)
class Product{
    constructor(name, brand){
        this.name = name;
        this.brand = brand;
    }
    getName(){
        return this.name
    }
    getBrand(){
        return this.brand
    }
    getProductDetails(){
        return `the brand is ${this.brand} - name is ${this.name}`
    }
}
class Electronics extends Product{
    constructor(name, brand, ram){
        super(name,brand)
        this.ram = ram
    }
}
let ele = new Electronics("mobile","lenovo","16gb")
console.log(ele.getProductDetails())