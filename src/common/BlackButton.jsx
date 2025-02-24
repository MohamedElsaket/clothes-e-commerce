const BlackButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white text-xs px-10 py-4 uppercase"
      type="submit"
    >
      {children}
    </button>
  );
};

export default BlackButton;
