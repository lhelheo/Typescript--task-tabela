import data from '../../data.json';
import { ChevronUp, ChevronDown } from 'lucide-react';

const thStyle = "px-6 py-3 text-left text-xs font-medium text-gray-500";

interface TableRowHeaderProps {
  handleSortOrder: (attribute: string) => void; 
}

const TableRowHeader = ({ handleSortOrder }: TableRowHeaderProps) => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <tr>
      {headers.map(header => (
        <th key={header} scope="col" className={thStyle}>
          {header.charAt(0).toUpperCase() + header.slice(1)}
          {header === 'name' && (
            <button onClick={() => handleSortOrder('name')} className="ml-2 "> 
              <ChevronUp size={15}/>
            </button>
          )}
          {header === 'age' && ( // falta ordenar em função da idade, está ordernado pelo nome
            <button onClick={() => handleSortOrder('age')} className="ml-2 "> 
              <ChevronUp size={15}/>
            </button>
          )}
        </th>
      ))}
    </tr>
  );
};

export default TableRowHeader;
