export function getRandomEvenNumber() {
  const supportedEvenNumbers = [2, 4, 6, 8]
  const index = Math.floor(Math.random() * supportedEvenNumbers.length)
  return supportedEvenNumbers[index]
}
