// static data.
import { employees } from "@/data/db";

const BasicInformation = () => {
  return (
    <div className="border-2 border-slate-700/70 rounded-md p-2 col-span-2">
      <h2 className="text-xl text-center font-mono mb-2 text-purple-500">
        Employee Information
      </h2>

      <table className="w-full">
        <thead>
          <tr className="bg-zinc-900">
            <th className="text-center w-[10%]">Id</th>
            <th className="text-left w-[30%]">Name</th>
            <th className="text-left w-[30%]">Department</th>
            <th className="text-left w-[30%]">Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(({ id, name, department, role }) => (
            <tr
              key={id}
              className="odd:bg-slate-800/20 even:bg-slate-800/40 text-slate-300"
            >
              <td className="text-center">{String(id).padStart(2, "0")}</td>
              <td className="text-left">{name}</td>
              <td className="text-left">{department}</td>
              <td className="text-left">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicInformation;
