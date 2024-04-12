// No componente Table

import { useState } from 'react';
import TableRow from './TableRow';
import data from '../../data.json';
import { ChevronDown, Download, ListFilter } from 'lucide-react';
import TableRowHeader from './TableRowHeader';

type FilterOption = 'all' | 'age' | 'name';

const liStyle = "cursor-pointer p-2 hover:bg-gray-100";
const pStyle = "w-[140px] flex gap-2 justify-center items-center";

const Table = () => {
  const [filterText, setFilterText] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>(''); 
  const [selectAll, setSelectAll] = useState(false); 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleAllSelection = () => { 
    setSelectAll(!selectAll);
  };

  const countItems = () => {
    return filteredData.length;
  }

  const handleSortOrder = (field: string) => { 
    setSortOrder(prevSortOrder => {
      if (prevSortOrder === 'asc') {
        return 'desc';
      } else {
        return 'asc';
      }
    });
  };

  const handleFilterBy = (option: FilterOption) => {
    setFilterBy(option);
    setDropdownOpen(false);
  };

  const filteredData = data.filter(person => {
    if (filterBy === 'age' && person.age <= 20) {
      return false;
    } else if (filterBy === 'name' && person.name.toLowerCase().charCodeAt(0) < 109) {
      return false;
    }
    if(filterText !== "") {
      const by_name = person.name.toLowerCase().includes(filterText);
      const by_age = person.age.toString().includes(filterText);
      return by_name || by_age;
    }
    return true;
  });

  const sortedData = sortOrder !== '' ? [...filteredData].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name); 
    } else {
      return b.name.localeCompare(a.name); 
    }
  }) : filteredData;

  const rows = sortedData.map((person, index) => (
    <TableRow key={index} name={person.name} age={person.age} selectAll={selectAll} /> 
  ));

  return (
    <>
      <div className="flex flex-col items-center w-[100%] ">
        <label className="flex border min-w-[95%] lg:min-w-[63%]  rounded p-2 m-2 ">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value.toLowerCase())}
            className="p-2 w-[100%]"
          />
          <p onClick={toggleDropdown} className="relative  flex items-center gap-1 min-w-10 border rounded">
            <ListFilter className='text-blue-400'/>
            {filterBy === 'all' ? 'Todos' : filterBy === 'age' ? 'Idade' : 'Nome'}
            <ChevronDown className='text-blue-400'/>
            {dropdownOpen && (
            <ul className="absolute text-black top-full z-10 mt-1 bg-white border rounded shadow-lg ">
              <li className={`${liStyle}${filterBy === 'all' ? 'bg-gray-300' : ''}`} onClick={() => handleFilterBy('all')}>Todos</li>
              <li className={`${liStyle} ${filterBy === 'age' ? 'bg-gray-300' : ''}`} onClick={() => handleFilterBy('age')}>Maiores de 20</li>
              <li className={`${liStyle} ${filterBy === 'name' ? 'bg-gray-300' : ''}`} onClick={() => handleFilterBy('name')}>Nomes depois de M</li>
            </ul>
          )}
          </p>
          <button className="px-2" onClick={() => setFilterText('')}>Limpar</button>
        </label>
        
        <div className="relative m-2 w-full flex justify-center">
          
          
        </div>
      </div>
      
      <div className="relative mx-auto max-w-[1200px]"> 
            <ul className={`flex p-4 text-gray-500 font-semibold`}>
              <li className={`${pStyle} gap-2 justify-center`}>
                <input 
                  type="checkbox" 
                  id="" 
                  name="" 
                  className='cursor-pointer' 
                  checked={selectAll} 
                  onChange={toggleAllSelection} 
                />
                {countItems()} peoples(s)
              </li>
              <li className={`${pStyle} justify-center cursor-pointer text-red-500`}>Show all</li>
              <li className={`${pStyle} justify-center cursor-pointer hover:text-blue-400 hover:transition-all hover:ease-in hover:delay-150`}><Download />Download</li>
            </ul>
        <table className="w-full divide-y divide-gray-200 shadow-xl rounded-md">
          <thead className="bg-gray-50 ">
            <TableRowHeader handleSortOrder={handleSortOrder} /> 
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
