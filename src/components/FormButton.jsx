import '../stylesheets/PrimaryButton.css';

const FormButton = ({ type, componentStyle, icon, text }) => {
  return (
    <button
      type={type}
      className={`primary-btn ${
        componentStyle ? `${componentStyle}` : ''
      }`.trimEnd()}
    >
      <img src={icon} className='primary-btn__img' />
      <span>{text}</span>
    </button>
  );
};

export default FormButton;
