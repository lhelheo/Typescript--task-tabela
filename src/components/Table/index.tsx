import React from 'react';
import TableRow from './TableRow';
import data from '../../data.json';
interface Person {
  name: string;
  age: number;
}

class Table extends React.Component {
  render(): React.ReactNode {
    const rows = data.map((person: Person, index: number) => (
      <TableRow key={index} name={person.name} age={person.age} />
    ));

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nome
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Idade
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ação
              </th>
            </tr>
          </thead>
          <tbody className="min-w-full divide-y divide-gray-200">
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
