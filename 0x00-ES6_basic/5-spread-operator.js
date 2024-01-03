export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string.split('')]; // Spread elements into a new array
}
