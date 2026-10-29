
import { useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Harsha", salary: 25000 },
    { id: 2, name: "Sam", salary: 30000 },
    { id: 3, name: "Loki", salary: 28000 },
  ]);


  const addEmployee = () => {
    setEmployees([
      ...employees,
      { id: 4, name: "Rakesh", salary: 32000 },
    ]);
  };


  const updateSalary = () => {
    setEmployees(
      employees.map((emp) =>
        emp.id === 2
          ? { ...emp, salary: 35000 }
          : emp
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-md">

        <h1 className="mb-6 text-center text-2xl font-bold text-orange-400">
          Employee List
        </h1>

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={addEmployee}
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Add Employee
          </button>

          <button
            onClick={updateSalary}
            className="rounded-lg bg-orange-400 px-4 py-2 text-white"
          >
            Update Salary
          </button>
        </div>

        <div className="space-y-3">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4"
            >
              <div>
                <h2 className="font-semibold text-gray-800">
                  {emp.name}
                </h2>
                <p className="text-sm text-gray-500">
                  Employee ID: {emp.id}
                </p>
              </div>

              <p className="font-bold text-black">
                ₹{emp.salary}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EmployeeList;

