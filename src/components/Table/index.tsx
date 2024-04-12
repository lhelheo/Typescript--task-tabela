import { useState } from 'react';
import TableRow from './TableRow';
import data from '../../data.json';
import TableHeader from './TableHeader';
import Searchbar from '../Searchbar';

const Table = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const filteredData = data.filter(person => {
    return person.name.toLowerCase().includes(filterText) ||
           person.age.toString().includes(filterText);
  });

  const rows = filteredData.map((person, index) => (
    <TableRow key={index} name={person.name} age={person.age} />
  ));

  return (
    <>
      <div className="flex flex-col items-center">
        <label className="flex border rounded p-2 m-2">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={filterText}
            onChange={handleFilterChange}
            className="p-2"
          />
        </label>
        <button className="m-2" onClick={() => setFilterText('')}>
          clear
        </button>
      </div>
      <div className="relative overflow-x-auto w-min mx-auto">
        <table className="w-full divide-y divide-gray-200 shadow-xl rounded-md">  
          <Searchbar className="w-full" onFilterClick={() => console.log('')} />
          <TableHeader textName='Nome' textAge='Idade' textAcao='Ação'/>
          <tbody className="divide-y divide-gray-200">
            {rows}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
