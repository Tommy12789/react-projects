export default function Input({ field, label, textarea, onChange, ...props }) {
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-stone-500 text-sm uppercase font-bold">{label}</label>
      {textarea ? (
        <textarea
          onChange={(event) => onChange(field, event)}
          className={classes}
          {...props}
        />
      ) : (
        <input
          onChange={(event) => onChange(field, event)}
          className={classes}
          {...props}
        />
      )}
    </p>
  );
}
