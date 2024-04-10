import Button from '../Button';
interface TableRowProps {
  name: string;
  age: number;
}

const tdStyle = "px-6 py-4 whitespace-nowrap text-sm text-gray-500"; 

const TableRow = (props
  : TableRowProps) => {
  return (    
    <tr>
      <td className={`${tdStyle}`}>{props.name}</td>
      <td className={`${tdStyle}`}>{props.age}</td>
      <td className={`${tdStyle} flex gap-2`}>
        <Button label="Editar" />
        <Button label="Excluir" />
        <Button label="Atualizar" />
      </td>
    </tr>
  );
};

export default TableRow;