interface TableHeaderProps{
  name: string;
  age: number;
  acao: string;
}

const thStyle = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

const TableHeader = (props: TableHeaderProps) => {
  return (
        <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className={thStyle}
              >
                {props.name}
              </th>
              <th
                scope="col"
                className={thStyle}
              >
                {props.age}
              </th>
              <th
                scope="col"
                className={thStyle}
              >
                {props.acao}
              </th>
            </tr>
          </thead>
  );
};

export default TableHeader
