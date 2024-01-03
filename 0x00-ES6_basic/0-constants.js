export function taskFirst() {
  const task = 'I prefer const when I can.';  // Use const for a value that doesn't change
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';  // Use let for a value that needs to be modified
  combination += getLast();

  return combination;
}
