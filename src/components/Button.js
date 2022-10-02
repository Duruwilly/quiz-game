
const Button = ({ title }) => {
  return (
    <button
      type="submit"
      className="bg-red-500 w-full text-white font-bold text-xl capitalize"
    >
      {title}
    </button>
  );
}

export default Button