import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  BriefcaseBusiness,
} from "lucide-react";

const Services = () => {
  const [services, setServices] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [name, setName] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [status, setStatus] = useState("Active");

  useEffect(() => {
  setDepartments(
    JSON.parse(localStorage.getItem("departments")) || []
  );

  setCategories(
    JSON.parse(localStorage.getItem("categories")) || []
  );

  setServices(
    JSON.parse(localStorage.getItem("services")) || []
  );
}, []);


  // Load all data
  useEffect(() => {
    setServices(
      JSON.parse(localStorage.getItem("services")) || []
    );

    setDepartments(
      JSON.parse(localStorage.getItem("departments")) || []
    );

    setCategories(
      JSON.parse(localStorage.getItem("categories")) || []
    );
  }, []);

  // Save services
  const saveServices = (data) => {
    localStorage.setItem(
      "services",
      JSON.stringify(data)
    );

    setServices(data);
  };

  // Add / Edit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !departmentId ||
      !categoryId
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updated = services.map((service) =>
        service.id === editId
          ? {
              ...service,
              name,
              departmentId,
              categoryId,
              status,
            }
          : service
      );

      saveServices(updated);
    } else {
      const newService = {
        id: Date.now(),
        name,
        departmentId,
        categoryId,
        status,
      };

      saveServices([
        ...services,
        newService,
      ]);
    }

    closeModal();
  };

  // Edit
  const handleEdit = (service) => {
    setEditId(service.id);
    setName(service.name);
    setDepartmentId(service.departmentId);
    setCategoryId(service.categoryId);
    setStatus(service.status);

    setShowModal(true);
  };

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) return;

    const updated = services.filter(
      (service) => service.id !== id
    );

    saveServices(updated);
  };

  // Close
  const closeModal = () => {
    setShowModal(false);
    setEditId(null);

    setName("");
    setDepartmentId("");
    setCategoryId("");
    setStatus("Active");
  };

  // Get department name
  const getDepartmentName = (id) => {
    const department = departments.find(
      (item) => String(item.id) === String(id)
    );

    return department?.name || "Unknown";
  };

  // Get category name
  const getCategoryName = (id) => {
    const category = categories.find(
      (item) => String(item.id) === String(id)
    );

    return category?.name || "Unknown";
  };

  // Search
  const filteredServices = services.filter((service) =>
    service.name
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
            Services
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage government services and their departments.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#082850] px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          <Plus size={18} />
          Add Service
        </button>

      </div>


      {/* Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <div className="border-b p-5">

          <div className="flex max-w-md items-center gap-3 rounded-xl border bg-slate-50 px-4 py-3">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />

          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-slate-50 text-xs uppercase text-slate-500">

              <tr>

                <th className="px-6 py-4">
                  ID
                </th>

                <th className="px-6 py-4">
                  Service
                </th>

                <th className="px-6 py-4">
                  Department
                </th>

                <th className="px-6 py-4">
                  Category
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

              {filteredServices.map((service, index) => (

                <tr
                  key={service.id}
                  className="transition hover:bg-slate-50"
                >

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-lg bg-blue-50 p-2 text-[#082850]">
                        <BriefcaseBusiness size={18} />
                      </div>

                      <span className="font-medium text-slate-800">
                        {service.name}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {getDepartmentName(service.departmentId)}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {getCategoryName(service.categoryId)}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        service.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {service.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() => handleEdit(service)}
                        className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => handleDelete(service.id)}
                        className="rounded-lg p-2 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={17} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>


          {filteredServices.length === 0 && (
            <div className="py-16 text-center">

              <p className="font-medium text-slate-600">
                No services found
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Add a service to get started.
              </p>

            </div>
          )}

        </div>

      </div>


      {/* Modal */}

      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">

          <div className="w-full max-w-lg animate-[modalIn_0.3s_ease-out] rounded-2xl bg-white p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-slate-800">
                  {editId ? "Edit Service" : "Add Service"}
                </h2>

                <p className="text-sm text-slate-500">
                  Connect the service with a department and category.
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

              {/* Service Name */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Service Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Income Certificate"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

              </div>


              {/* Department */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Department
                </label>

                <select
                  value={departmentId}
                  onChange={(e) =>
                    setDepartmentId(e.target.value)
                  }
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500"
                >

                  <option value="">
                    Select Department
                  </option>

                  {departments.map((department) => (

                    <option
                      key={department.id}
                      value={department.id}
                    >
                      {department.name}
                    </option>

                  ))}

                </select>

              </div>


              {/* Category */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Category
                </label>

                <select
                  value={categoryId}
                  onChange={(e) =>
                    setCategoryId(e.target.value)
                  }
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500"
                >

                  <option value="">
                    Select Category
                  </option>

                  {categories.map((category) => (

                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>

                  ))}

                </select>

              </div>


              {/* Status */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Status
                </label>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
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
                  className="flex-1 rounded-xl border px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[#082850] px-4 py-3 text-sm font-medium text-white transition hover:bg-orange-500"
                >
                  {editId ? "Update Service" : "Save Service"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Services;