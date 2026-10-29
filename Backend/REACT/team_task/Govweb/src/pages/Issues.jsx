import { useEffect, useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  X,
  CircleAlert,
} from "lucide-react";

const Issues = () => {
  const [issues, setIssues] = useState([]);

  const [departments, setDepartments] = useState([]);
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [title, setTitle] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  // Load LocalStorage
  useEffect(() => {
    setIssues(
      JSON.parse(localStorage.getItem("issues")) || []
    );

    setDepartments(
      JSON.parse(localStorage.getItem("departments")) || []
    );

    setServices(
      JSON.parse(localStorage.getItem("services")) || []
    );

    setCategories(
      JSON.parse(localStorage.getItem("categories")) || []
    );
  }, []);

  // Save
  const saveIssues = (data) => {
    localStorage.setItem(
      "issues",
      JSON.stringify(data)
    );

    setIssues(data);
  };

  // Add / Edit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !departmentId ||
      !serviceId ||
      !categoryId ||
      !description.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editId) {
      const updated = issues.map((issue) =>
        issue.id === editId
          ? {
              ...issue,
              title,
              departmentId,
              serviceId,
              categoryId,
              description,
              status,
            }
          : issue
      );

      saveIssues(updated);
    } else {
      const newIssue = {
        id: Date.now(),
        title,
        departmentId,
        serviceId,
        categoryId,
        description,
        status,
      };

      saveIssues([
        ...issues,
        newIssue,
      ]);
    }

    closeModal();
  };

  // Edit
  const handleEdit = (issue) => {
    setEditId(issue.id);

    setTitle(issue.title);
    setDepartmentId(issue.departmentId);
    setServiceId(issue.serviceId);
    setCategoryId(issue.categoryId);
    setDescription(issue.description);
    setStatus(issue.status);

    setShowModal(true);
  };

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this issue?"
    );

    if (!confirmDelete) return;

    const updated = issues.filter(
      (issue) => issue.id !== id
    );

    saveIssues(updated);
  };

  // Close
  const closeModal = () => {
    setShowModal(false);

    setEditId(null);

    setTitle("");
    setDepartmentId("");
    setServiceId("");
    setCategoryId("");
    setDescription("");
    setStatus("Pending");
  };

  // Names
  const getDepartmentName = (id) => {
    const item = departments.find(
      (dept) => String(dept.id) === String(id)
    );

    return item?.name || "Unknown";
  };

  const getServiceName = (id) => {
    const item = services.find(
      (service) => String(service.id) === String(id)
    );

    return item?.name || "Unknown";
  };

  const getCategoryName = (id) => {
    const item = categories.find(
      (category) => String(category.id) === String(id)
    );

    return item?.name || "Unknown";
  };

  // Search
  const filteredIssues = issues.filter((issue) =>
    issue.title
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
            Issues
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track and manage reported service issues.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#082850] px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500"
        >
          <Plus size={18} />
          Add Issue
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
              placeholder="Search issue..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            />

          </div>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px] text-left">

            <thead className="bg-slate-50 text-xs uppercase text-slate-500">

              <tr>

                <th className="px-6 py-4">
                  ID
                </th>

                <th className="px-6 py-4">
                  Issue
                </th>

                <th className="px-6 py-4">
                  Department
                </th>

                <th className="px-6 py-4">
                  Service
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

              {filteredIssues.map((issue, index) => (

                <tr
                  key={issue.id}
                  className="transition hover:bg-slate-50"
                >

                  <td className="px-6 py-4 text-sm text-slate-500">
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-lg bg-red-50 p-2 text-red-600">
                        <CircleAlert size={18} />
                      </div>

                      <div>

                        <p className="font-medium text-slate-800">
                          {issue.title}
                        </p>

                        <p className="max-w-[220px] truncate text-xs text-slate-400">
                          {issue.description}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {getDepartmentName(issue.departmentId)}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {getServiceName(issue.serviceId)}
                  </td>

                  <td className="px-6 py-4 text-sm text-slate-600">
                    {getCategoryName(issue.categoryId)}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        issue.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : issue.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {issue.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    <div className="flex justify-end gap-2">

                      <button
                        onClick={() => handleEdit(issue)}
                        className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() => handleDelete(issue.id)}
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


          {filteredIssues.length === 0 && (

            <div className="py-16 text-center">

              <p className="font-medium text-slate-600">
                No issues found
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Add an issue to get started.
              </p>

            </div>

          )}

        </div>

      </div>


      {/* Modal */}

      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm">

          <div className="my-8 w-full max-w-lg animate-[modalIn_0.3s_ease-out] rounded-2xl bg-white p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold text-slate-800">
                  {editId ? "Edit Issue" : "Report Issue"}
                </h2>

                <p className="text-sm text-slate-500">
                  Enter issue details
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

              {/* Title */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Issue Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Certificate application delayed"
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
                  onChange={(e) => {
                    setDepartmentId(e.target.value);
                    setServiceId("");
                    setCategoryId("");
                  }}
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


              {/* Service */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Service
                </label>

                <select
                  value={serviceId}
                  onChange={(e) => {
                    const selectedServiceId = e.target.value;

                    setServiceId(selectedServiceId);

                    const selectedService = services.find(
                      (service) =>
                        String(service.id) ===
                        String(selectedServiceId)
                    );

                    if (selectedService) {
                      setCategoryId(
                        selectedService.categoryId
                      );
                    }
                  }}
                  disabled={!departmentId}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500 disabled:bg-slate-100"
                >

                  <option value="">
                    {departmentId
                      ? "Select Service"
                      : "Select Department First"}
                  </option>

                  {services
                    .filter(
                      (service) =>
                        String(service.departmentId) ===
                        String(departmentId)
                    )
                    .map((service) => (

                      <option
                        key={service.id}
                        value={service.id}
                      >
                        {service.name}
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


              {/* Description */}

              <div>

                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Description
                </label>

                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  placeholder="Describe the issue..."
                  className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />

              </div>


              {/* Status */}

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

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Resolved">
                    Resolved
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
                  {editId ? "Update Issue" : "Save Issue"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Issues;