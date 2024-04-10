import React from 'react';
import TableRow from './TableRow';
import data from '../../data.json';
import TableHeader from './TableHeader';
import Searchbar from '../Searchbar';  
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
    <>
      
      <div className="relative overflow-x-auto w-min mx-auto flex items-center h-screen">
      <Searchbar className='absolute top-[32%]'/>
        <table className="min-w-full divide-y divide-gray-200 shadow-xl rounded-md">
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
