export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block-scoped variables
  let task2 = true;

  if (trueOrFalse) {
    // Declare new variables with different names within the block
    let taskWithinBlock = true;
    let task2WithinBlock = false;
  }

  return [task, task2];  // Original task and task2 values are preserved
}
