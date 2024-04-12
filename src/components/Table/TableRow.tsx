import { CircleUserRound, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TableRowProps {
  name: string;
  age: number;
  selectAll: boolean; // Adicionando selectAll como uma propriedade
}

const TableRow = ({ name, age, selectAll }: TableRowProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectAll); // Atualizando o estado isSelected quando selectAll for alterado
  }, [selectAll]);

  const handleActionClick = (action: string) => {
    console.log(action, name);
    setDropdownOpen(false);
  };

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  const liStyle = "cursor-pointer  p-2 hover:bg-gray-100";

  const tdStyle = `px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${isSelected ? 'bg-blue-400 text-white' : ''}`;

  return (
    <tr className='relative'>
      <td className={`${tdStyle} h-full absolute flex items-center w-full h-full lg:gap-2`}>
        <input
          type="checkbox"
          checked={isSelected}
          id=""
          name=""
          className='cursor-pointer mr-4'
          onChange={toggleSelection}
        />
        <CircleUserRound />
        <p className='font-semibold'>{name}</p>
      </td>

      <td className={`${tdStyle} relative pl-7`}>{age}</td>

      <td className={`${tdStyle}  gap-2 relative`}>
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="py-2 px-4 border  rounded hover:text-blue-500 hover:border-blue-500">
          <Play size={15}/>
        </button>
        {dropdownOpen && (
          <ul className="absolute top-full bg-white shadow-lg rounded z-10">
            <li className={`${liStyle}`}
              onClick={() => handleActionClick('Editar')}>Editar</li>
            <li className={`${liStyle}`}
              onClick={() => handleActionClick('Excluir')}>Excluir</li>
            <li className={`${liStyle}`}
              onClick={() => handleActionClick('Atualizar')}>Atualizar</li>
          </ul>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
