import '../styles/PrettyButton.css';

const PrettyButton = ({ onClick, children }) => {
  return (
    <button className="pretty-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default PrettyButton; 