interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button = ( props: ButtonProps ) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
