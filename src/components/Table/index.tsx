import { useState } from 'react';
import TableRow from './TableRow';
import data from '../../data.json';
import TableHeader from './TableHeader';
import Searchbar from '../Searchbar';
import { ArrowDown, ArrowUp, RotateCw, Trash } from 'lucide-react';

const Table = () => {
  const [filterText, setFilterText] = useState('');
  const [orderBy, setOrderBy] = useState({ column: 'default', direction: 'asc' });
  const [filterBy, setFilterBy] = useState('all');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toLowerCase());
  };

  const handleOrderBy = (column) => {
    if (orderBy.column === column) {
      setOrderBy(prevOrder => ({
        ...prevOrder,
        direction: prevOrder.direction === 'asc' ? 'desc' : 'asc'
      }));
    } else {
      setOrderBy({ column: column, direction: 'asc' });
    }
  };

  const handleResetOrder = () => {
    setOrderBy({ column: 'default', direction: 'asc' });
  };

  const handleFilterBy = (option) => {
    setFilterBy(option);
  };

  const sortedData = [...data].sort((a, b) => {
    if (orderBy.column === 'default') {
      return 0; 
    } else if (orderBy.column === 'name') {
      return orderBy.direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (orderBy.column === 'age') {
      return orderBy.direction === 'asc' ? a.age - b.age : b.age - a.age;
    }
    return 0;
  });

  const filteredData = sortedData.filter(person => {
    if (filterBy === 'age') {
      return person.age > 20;
    } else if (filterBy === 'name') {
      return person.name.toLowerCase().charCodeAt(0) <= 109;
    } else {
      return person.name.toLowerCase().includes(filterText) ||
             person.age.toString().includes(filterText);
    }
  });

  const rows = filteredData.map((person, index) => (
    <TableRow key={index} name={person.name} age={person.age} />
  ));

  return (
    <>
      <div className="flex flex-col items-center">
        <label className="flex border rounded p-2 m-2 ">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={filterText}
            onChange={handleFilterChange}
            className="p-2"
          />
          <Trash className="cursor-pointer text-gray-500 h-[40px]" onClick={() => setFilterText('')}/>
          {/* dúvida no height utilizado*/}
        </label>
        
        <div className='text-gray-500 flex flex-col items-center'>
          <button className='flex' onClick={() => handleOrderBy('age')}>Idade {orderBy.column === 'age' ? (orderBy.direction === 'asc' ? <ArrowUp /> : <ArrowDown />) : ''}</button>
          <button className='flex' onClick={() => handleOrderBy('name')}>Nome {orderBy.column === 'name' ? (orderBy.direction === 'asc' ? <ArrowUp /> : <ArrowDown />) : ''}</button>
          <button className='flex' onClick={handleResetOrder}><RotateCw /></button>
        </div>

        <div className="m-2 rounded border border-gray-500">
          <select value={filterBy} onChange={(e) => handleFilterBy(e.target.value)}>
            <option value="all">Todos</option>
            <option value="age">Filtro Idade</option>
            <option value="name">Filtro Nome</option>
          </select>
        </div>
      </div>
      <div className="relative overflow-x-auto w-min mx-auto">
        <table className="w-full divide-y divide-gray-200 shadow-xl rounded-md">  
          <Searchbar className="w-full hidden" onFilterClick={() => console.log('')} />
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
