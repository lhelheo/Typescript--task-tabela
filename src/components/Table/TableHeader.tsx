import TableOptions from "./TableOptions";
interface TableHeaderProps{
  textName: string;
  textAge: string;
  textAcao: string;
}



const thStyle = "px-6 py-3 text-left text-xs font-medium text-gray-500";

const TableHeader = (props: TableHeaderProps) => {

  return (
    <>
   
        <thead className="bg-gray-50 ">
          <TableOptions className="" />
            <tr>
              <th
                scope="col"
                className={thStyle}
              >
                {props.textName}
              </th>
              <th
                scope="col"
                className={thStyle}
              >
                {props.textAge}
              </th>
              <th
                scope="col"
                className={thStyle}
              >
                {props.textAcao}
              </th>
              
              
            </tr>
          </thead>
    </>
  );
};

export default TableHeader
