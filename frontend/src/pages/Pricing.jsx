export default function Pricing() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <p className="mb-4">Select your plan</p>
      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Basic Plan</th>
                <th className="border border-gray-300 px-4 py-2">
                  Weekly Plan
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Monthly Plan
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">12</td>
                <td className="border border-gray-300 px-4 py-2">20</td>
                <td className="border border-gray-300 px-4 py-2">30</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <ul>
                    <li>Smart workout plan</li>
                    <li>At home workouts</li>
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul>
                    <li>Pro gyms</li>
                    <li>Smart workout plans</li>
                    <li>At home workouts</li>
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul>
                    <li>ELITE gyms and classes</li>
                    <li>Pro gyms</li>
                    <li>Smart workout plans</li>
                    <li>At home workouts</li>
                    <li>Personal Trainings</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
