let employee = {
    name: 'John Doe',
    streetAddress: '1234 Elm St',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log('Initial Employee:', employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
  console.log('Updated Employee:', updatedEmployee);
  
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '5678 Oak St');
  console.log('Destructively Updated Employee:', destructivelyUpdatedEmployee);
  
  const employeeAfterDeletion = deleteFromEmployeeByKey(employee, 'name');
  console.log('Employee after deletion (non-destructive):', employeeAfterDeletion);
  
  const destructivelyDeletedEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log('Destructively Deleted Employee:', destructivelyDeletedEmployee);
  
  console.log('Original Employee (to verify non-destructive actions):', employee);
  
