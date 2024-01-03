export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    // Directly modify the array element
    value = appendString + value;
  }

  return array;
}
