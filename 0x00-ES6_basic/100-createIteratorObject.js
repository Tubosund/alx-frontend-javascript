export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    next() {
      if (departmentIndex >= departments.length) {
        return { done: true };
      }

      const employees = departments[departmentIndex];
      const employee = employees[employeeIndex];

      employeeIndex++;
      if (employeeIndex >= employees.length) {
        departmentIndex++;
        employeeIndex = 0;
      }

      return { value: employee, done: false };
    },
  };
}
