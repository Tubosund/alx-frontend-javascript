export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList, // Spread all department objects into allEmployees
    },
    getNumberOfDepartments: () => Object.keys(employeesList).length, // Count departments
  };
}
