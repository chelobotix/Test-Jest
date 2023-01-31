class Calculator {

  add = (array) => this.#operator(1, array)
  substract = (array) => this.#operator(2, array)
  multiple = (array) => this.#operator(3, array)
  divide = (array) => this.#operator(4, array)

  #operator(symbol, array) {
    let result = array[0]
    if (symbol == 1) {
      array.slice(1, array.length + 1).forEach(number => {
        result += number
      });
    } else if (symbol == 2) {
      array.slice(1, array.length).forEach(number => {
        result -= number
      });
    } else if (symbol == 3) {
      array.slice(1, array.length).forEach(number => {
        result *= number
      });
    } else if (symbol == 4) {
      array.slice(1, array.length).forEach(number => {
        result /= number
      });
    }

    return result
  }
}

// const calc = new Calculator()
// console.log(calc.add([, 2]))

module.exports = Calculator
