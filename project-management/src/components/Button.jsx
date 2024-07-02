export default function Button({ children, onClick, ...props }) {
  return (
    <button
      {...props}
      onClick={onClick}
      className="text-center  md:text-base text-xs px-4 py-2 bg-stone-700 text-stone-400  rounded hover:bg-stone-600 hover:text-stone-100">
      {children}
    </button>
  );
}
