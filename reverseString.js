const reverse = (string) => {
  let aux = ''
  for (let i = string.length - 1; i > -1; i -= 1) {
    aux += string[i]

  }
  return aux
}
module.exports = reverse
