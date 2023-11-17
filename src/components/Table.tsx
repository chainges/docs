import React from 'react';

const TableComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Actions to Reduce Scope 3 Emissions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1. Purchased goods and services</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Replace high-GHG-emitting raw materials with low-GHG-emitting raw materials</li>
                <li>Implement low-GHG-procurement/purchasing policies</li>
                <li>Encourage tier 1 suppliers to engage their tier 1 suppliers (i.e., the reporting company’s tier 2 suppliers) and disclose these scope 3 emissions to the customer in order to propagate GHG reporting throughout the supply chain</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2. Capital goods</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Replace high-GHG-emitting capital goods with low-GHG-emitting capital goods</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3. Fuel- and energy-related activities (not included in scope 1 or scope 2)</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Reduce energy consumption</li>
                <li>Change energy source (e.g., shift toward lower-emitting fuel/energy sources)</li>
                <li>Generate energy on site using renewable sources</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">4. Upstream transportation and distribution</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Reduce distance between supplier and customer</li>
                <li>Source materials locally if it leads to net GHG reductions</li>
                <li>Optimize efficiency of transportation and distribution</li>
                <li>Replace higher-emitting transportation modes (e.g. air transport) with lower-emitting transportation modes (e.g. marine transport)</li>
                <li>Shift toward lower-emitting fuel sources</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">5. Waste generated in operations</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Reduce quantity of waste generated in operations</li>
                <li>Implement recycling measures that lead to net GHG reductions</li>
                <li>Implement lower-emitting waste treatment methods</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">6. Business travel</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Reduce the amount of business travel (e.g., encourage video conferencing and web-based meetings as an alternative to in-person meetings)</li>
                <li>Encourage more efficient travel</li>
                <li>Encourage lower-emitting modes of travel (e.g., rail instead of plane)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">7. Employee commuting</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Reduce commuting distance (e.g., locate offices/facilities near urban centers and public transit facilities)</li>
                <li>Create disincentives for commuting by car (e.g., parking policies)</li>
                <li>Provide incentives for use of public transit, bicycling, carpooling, etc.</li>
                <li>Implement teleworking/telecommuting programs</li>
                <li>Reduce the number of days worked per week (e.g., 4 days x 10-hour schedule instead of 5 days x 8-hour schedule)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">8. Upstream leased assets</td>
            <td className="border px-4 py-2">
              <ul>
                <li>Increase energy efficiency of operations</li>
                <li>Shift toward lower-emitting fuel sources</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
