import { Play } from 'lucide-react'
import { useState } from 'react';

interface TableRowProps {
  name: string;
  age: number;
  isSelected?: boolean;
  onClick?: () => void;
}

const TableRow = (props
  : TableRowProps) => {
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    const handleActionClick = (action: string) => {
      console.log(action, props.name); 
      setDropdownOpen(false); 
    };
    const toggleSelection = () => { 
      setIsSelected(!isSelected); 
    };


    const tdStyle = `px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${isSelected ? 'bg-blue-400 text-white' : ''}`;
  
    return (
     <>
       <tr>
          <td className={tdStyle}>
            <input
              type="checkbox"
              checked={isSelected}
              id=""
              name=""
              className='cursor-pointer mr-4'
              onChange={toggleSelection}
            />
            {props.name}
          </td>
          <td className={tdStyle}>{props.age}</td>
        <td className={`${tdStyle} flex gap-2 relative`}>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="py-2 px-4 border rounded">
            <Play size={15}/>
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded z-10">
              <li className="block cursor-pointer py-2 px-4 hover:bg-gray-100" onClick={() => handleActionClick('Editar')}>Editar</li>
              <li className="block cursor-pointer py-2 px-4 hover:bg-gray-100" onClick={() => handleActionClick('Excluir')}>Excluir</li>
              <li className="block cursor-pointer py-2 px-4 hover:bg-gray-100" onClick={() => handleActionClick('Atualizar')}>Atualizar</li>
            </ul>
          )}
        </td>
      </tr>
     </>
  );
};

export default TableRow;