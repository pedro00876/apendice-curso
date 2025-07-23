const arr = [1, 2, 4, 5]

const highNumbers = arr.filter(n => {
  if (n >= 3) {
    return n
  }
})

console.log(highNumbers)

const users = [
  { name: 'Pedro', available: true },
  { name: 'Leticia', available: true },
  { name: 'Lucas', available: false },
  { name: 'Marcos', available: false },
]

const availableUsers = users.filter(user => user.available)
const notAvailableUsers = users.filter(user => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)
