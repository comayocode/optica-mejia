import '../stylesheets/ButtonTable.css'

/* Componente del botón de la tabla ubicado arriba a la izquierda */
const ButtonTable = ({ texto }) => {
  return <a className='btn-table'>{texto}</a>;
};

export default ButtonTable;
