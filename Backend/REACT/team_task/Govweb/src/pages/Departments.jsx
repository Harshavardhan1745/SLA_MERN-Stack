import { useEffect, useState } from "react";
import { Plus, Search, Pencil, Trash2, X } from "lucide-react";

const Departments = () => {

  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");

  // Load LocalStorage
  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("departments")) || [];

    setDepartments(data);
  }, []);

  // Save LocalStorage
  const saveDepartments = (data) => {
    localStorage.setItem(
      "departments",
      JSON.stringify(data)
    );

    setDepartments(data);
  };

  // Add / Edit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    if (editId) {

      const updated = departments.map((dept) =>
        dept.id === editId
          ? {
              ...dept,
              name,
              status
            }
          : dept
      );

      saveDepartments(updated);

    } else {

      const newDepartment = {
        id: Date.now(),
        name,
        status
      };

      saveDepartments([
        ...departments,
        newDepartment
      ]);
    }

    closeModal();
  };


  // Edit

  const handleEdit = (dept) => {

    setEditId(dept.id);

    setName(dept.name);

    setStatus(dept.status);

    setShowModal(true);

  };


  // Delete

  const handleDelete = (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this department?"
      );

    if (!confirmDelete) return;

    const updated =
      departments.filter(
        (dept) => dept.id !== id
      );

    saveDepartments(updated);

  };


  // Close modal

  const closeModal = () => {

    setShowModal(false);

    setEditId(null);

    setName("");

    setStatus("Active");

  };


  // Search

  const filteredDepartments =
    departments.filter((dept) =>
      dept.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>

          <p className="text-sm font-medium text-orange-500">
            MANAGEMENT
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-800">
            Departments
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage government departments and their status.
          </p>

        </div>


        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#082850] px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >

          <Plus size={18} />

          Add Department

        </button>

      </div>


      {/* Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        {/* Search */}

        <div className="border-b p-5">

          <div className="flex max-w-md items-center gap-3 rounded-xl border bg-slate-50 px-4 py-3">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search department..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full bg-transparent text-sm outline-none"
            />

          </div>

        </div>


        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-slate-50 text-xs uppercase text-slate-500">

              <tr>

                <th className="px-6 py-4">
                  ID
                </th>

                <th className="px-6 py-4">
                  Department Name
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4 text-right">
                  Actions
                </th>

              </tr>

            </thead>


            <tbody className="divide-y">

              {filteredDepartments.map(
                (dept, index) => (

                  <tr
                    key={dept.id}
                    className="group transition hover:bg-slate-50"
                  >

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </td>

                    <td className="px-6 py-4">

                      <p className="font-medium text-slate-800">
                        {dept.name}
                      </p>

                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          dept.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {dept.status}
                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <div className="flex justify-end gap-2">

                        <button
                          onClick={() =>
                            handleEdit(dept)
                          }
                          className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(dept.id)
                          }
                          className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>


          {filteredDepartments.length === 0 && (

            <div className="py-16 text-center">

              <p className="font-medium text-slate-600">
                No departments found
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Add a department to get started.
              </p>

            </div>

          )}

        </div>

      </div>


      {/* Modal */}

      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">

          <div className="w-full max-w-md animate-[modalIn_0.3s_ease-out] rounded-2xl bg-white p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-slate-800">
                  {editId
                    ? "Edit Department"
                    : "Add Department"}
                </h2>

                <p className="text-sm text-slate-500">
                  Enter department details
                </p>

              </div>

              <button
                onClick={closeModal}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={20} />
              </button>

            </div>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Department Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="e.g. Revenue Department"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500"
                >

                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>

                </select>

              </div>


              <div className="flex gap-3 pt-2">

                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 rounded-xl border px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[#082850] px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
                >
                  {editId
                    ? "Update"
                    : "Save"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Departments;