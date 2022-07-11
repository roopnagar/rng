const products = [{   
    
    name: "RealmeX2 Pro",
    
    brand : "Realme",
    price : 30999,
    category :"64 MP",
    rating: "70"
    
 
 },
 {
    
    name: "RealmeX7 Pro",
    
    brand : "Realme",
    price : 21999,
    category :"64 MP",
    rating: "80"
    
  
  },
  {
    
    name: "MI 11T Pro",
    
    brand : "Xiaomi",
    price : 27999,
    category :"108 MP",
    rating: "90"
  
  },
  {
    
    name: "MI 12 Pro",
    
    brand : "Xiaomi",
    price : 37999,
    category :"108 MP",
    rating: "99"
  
  }];
  

// const ecomproducts = products.filter(products => products.price === "37999");
// console.log(ecomproducts)
// Map
// let productname = products.map()
// let productDesc = products.map(products => `${products.name} ${products.brand}: ${products.price}`)
// console.log(productDesc)
// let productname = products.map(product=>product.rating+1)
// console.log(productname)

// const s = products.sort((p1,p2) => (parseInt(p1.rating) > p2.rating ? 1: -1))
// console.log(s)
Map
const pname = products.map((product => product.price-(product.price*0.1)))
console.log(pname)