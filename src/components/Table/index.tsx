import { useState } from 'react';
import TableRow from './TableRow';
import data from '../../data.json';
import TableHeader from './TableHeader';
import Searchbar from '../Searchbar';
import { ArrowDown, ArrowUp, Trash } from 'lucide-react';

const Table = () => {
  const [filterText, setFilterText] = useState('');
  const [orderByAge, setOrderByAge] = useState('default');
  const [orderByName, setOrderByName] = useState('default');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const handleOrderByAge = () => {
    switch (orderByAge) {
      case 'asc':
        setOrderByAge('desc');
        break;
      case 'desc':
        setOrderByAge('');
        break;
      default:
        setOrderByName('default');
        setOrderByAge('asc');
    }
  };

  const handleOrderByName = () => {
    switch (orderByName) {
      case 'asc':
        setOrderByName('desc');
        break;
      case 'desc':
        setOrderByName('');
        break;
      default:
        setOrderByAge('default');
        setOrderByName('asc');
    }
  };

  let sortedData = [...data];

  if (orderByAge === 'asc') {
    sortedData = sortedData.sort((a, b) => a.age - b.age);
  } else if (orderByAge === 'desc') {
    sortedData = sortedData.sort((a, b) => b.age - a.age);
  }

  if (orderByName === 'asc') {
    sortedData = sortedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (orderByName === 'desc') {
    sortedData = sortedData.sort((a, b) => b.name.localeCompare(a.name));
  }

  const filteredData = sortedData.filter(person => {
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
        
        
        <button className='flex' onClick={handleOrderByAge}>Ordenar por Idade {orderByAge === 'asc' ? <ArrowUp /> : orderByAge === 'desc' ? <ArrowDown /> : ' ' }</button>
        <button className='flex' onClick={handleOrderByName}>Ordenar por Nome {orderByName === 'asc' ? <ArrowUp /> : orderByName === 'desc' ? <ArrowDown /> : ' '}</button>
        <Trash className="cursor-pointer text-gray-500" onClick={() => setFilterText('')}/>
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
