export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = "";

  while (true) {
    const { value, done } = reportWithIterator.next();
    if (done) {
      break;
    }

    employeeNames += value + " | ";
  }

  return employeeNames.slice(0, -3);
}
