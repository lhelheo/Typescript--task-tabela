import data from '../../data.json';
import { Download } from 'lucide-react'


interface TableOptionsProps{
    className: string;
}

const TableOptions = ( props: TableOptionsProps) => {
    const countItems = () => {
        return data.length;
    }

  return (
    <div className={`${props.className} flex p-4 text-gray-500 font-semibold`}>
        <p className='flex w-[140px] gap-2 justify-center items-center'><input type="checkbox" id="" name="" className='cursor-pointer' />{countItems()} peoples(s)</p>
        <p className='w-[140px] flex justify-center cursor-pointer items-center text-red-500'>Show all</p>
        <p className='w-[140px] flex justify-center cursor-pointer items-center'><Download />Download</p>
    </div>
  )
}

export default TableOptions