const products = [
  { name: 'Camisa', price: 10.99, category: 'Roupas' },
  { name: 'Chaleira', price: 49.99, category: 'Eletro' },
  { name: 'fogão', price: 424.99, category: 'Eletro' },
  { name: 'Calça Jeans', price: 22.99, category: 'Roupas' },
]

products.map(product => {
  if (product.category === 'Roupas') {
    product.onSale = true
  }
})

console.log(products)
