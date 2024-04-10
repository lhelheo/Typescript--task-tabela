import Button from "../Button";

interface SearchbarProps{
    className: string;
  }
  
const Searchbar = ( props: SearchbarProps) => {
    const bgSearchbar = "bg-blue-200 text-blue-500 "
    return (
        <>  
            
            <label className={`border w-full border-opacity-60 rounded ${bgSearchbar} font-bold py-3 flex px-4 ${props.className}`}>
                <Button label="Filtros"/>
                <input type="text" placeholder="Pesquise aqui..." className={`w-full ${bgSearchbar} px-2`}/>
            </label>
        </>
    );
};
  
  export default Searchbar;
  
