//find() is almost like filter() 
//find()-> condition jodi multiple element fulfilled korey tobey shudu first element tai return korbey 
//find() desired element na pailey undefined dei

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const whiteProduct=products.find(product=>product.color=='white')
console.log(whiteProduct)

//multiple element of products array fulfilled the condition so find() only returns first element who fulfilld condition
const blackProduct=products.find(product=>product.color=='black')
console.log(blackProduct)