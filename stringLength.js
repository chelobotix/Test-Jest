let counterChar = (string) => {
  let counter = 0
  const charArray = string.split('')
  charArray.forEach(char => {
    counter += 1
  });
  if (counter < 1 || counter > 10) {
    return false
  }
  return counter
}



module.exports = counterChar;
