const fruits = ['Maçã', 'Banana', 'Kiwi']

const [f1, f2, f3] = fruits

console.log(f1)

const productsDetail = {
  name: 'Mouse',
  price: 42.99,
  category: 'Periféricos',
  color: 'preto',
}

const {
  name: productsName,
  price,
  category: productsCategory,
  color,
} = productsDetail

console.log(
  `O nome do produto é ${productsName}, seu preço é ${price}, sua categoria é ${productsCategory} e a sua cor é ${color} `
)
