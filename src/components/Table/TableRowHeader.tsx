import data from '../../data.json';
const thStyle = "px-6 py-3 text-left text-xs font-medium text-gray-500";

  const TableRowHeader = () => {
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <tr>
      {headers.map(header => (
        <th key={header} scope="col" className={thStyle}>
          {header.charAt(0).toUpperCase() + header.slice(1)}
        </th>
      ))}
    </tr>
  );
};

export default TableRowHeader;
