export default function createEmployeesObject(departmentName, employees) {
  return {
    // Dynamically create property name using template literal
    [departmentName]: employees,
  };
}
