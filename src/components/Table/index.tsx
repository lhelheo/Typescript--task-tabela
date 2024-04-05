import React from 'react';
import Button from '../Button';

class Table extends React.Component {
  render(): React.ReactNode {
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
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">João</td>
              <td className="px-6 py-4 whitespace-nowrap">30</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <Button>Editar</Button>
                <Button>Excluir</Button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Maria</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
              <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                <Button>Editar</Button>
                <Button>Excluir</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
