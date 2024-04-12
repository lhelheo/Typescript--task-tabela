
const thStyle = "px-6 py-3 text-left text-xs font-medium text-gray-500";

const TableRowHeader = () => {
  return (
    <tr>
        <th scope="col" className={thStyle}>
            Nome
        </th>
        <th scope="col" className={thStyle}>
            Idade
        </th>
        <th scope="col" className={thStyle}>
            Ação
        </th>
    </tr>         
  )
}

export default TableRowHeader