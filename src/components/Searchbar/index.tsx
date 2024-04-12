import Button from "../Button";

interface SearchbarProps {
    onFilterClick: () => void; 
    className: string;
}
  
const Searchbar = (props: SearchbarProps) => {
    const bgSearchbar = "bg-blue-200 text-blue-500";
    return (
        <>  
            <label className={`rounded ${bgSearchbar} font-bold py-3 flex px-4 ${props.className}`}>
                <input type="text" placeholder="Pesquise aqui..." className={`w-full ${bgSearchbar} px-2`}/>
                <Button label="Filtros" onClick={props.onFilterClick}/> {/* Adicionado onClick */}
            </label>
        </>
    );
};
  
export default Searchbar;
