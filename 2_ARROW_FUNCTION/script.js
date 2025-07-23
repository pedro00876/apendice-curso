const sum = function sum(a, b) {
  return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = name => {
  if (name) {
    return 'olá' + name + '!'
  } else {
    return 'olá!'
  }
}

console.log(greeting('Pedro'))
console.log(greeting())

const user = {
  name: 'theo',
  sayUserName() {
    var self = this
    setTimeout(function () {
      console.log(self)
      console.log('Username:' + self.name)
    }, 500)
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this)
      console.log('Username' + this.name)
    }, 700)
  },
}

user.sayUserName()
user.sayUserNameArrow()
