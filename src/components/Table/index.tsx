import React from 'react';
import TableRow from './TableRow';
import data from '../../data.json';
import TableHeader from './TableHeader';

interface Person {
  name: string;
  age: number;
}

class Table extends React.Component {
  render(): React.ReactNode {

  const filteredData = data.filter((person) => person.age > 20);

  const rows = filteredData.map((person, index) => (
    <TableRow  key={index} name={person.name} age={person.age} />
  ));
    return (
    <>
      <div className="relative overflow-x-auto w-min mx-auto flex items-center h-screen">
        <table className="w-full bordivide-y divide-gray-200 shadow-xl rounded-md">  
          <TableHeader textName='Nome' textAge='Idade' textAcao='Ação'/>
          <tbody className="min-w-full divide-y divide-gray-200">
            {rows}
          </tbody>
        </table>
      </div>
    </>
    );
  }
}

export default Table;
