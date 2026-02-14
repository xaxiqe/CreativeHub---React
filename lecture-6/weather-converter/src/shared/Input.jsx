function Input({ unit, value, onChange, readOnly = false }) {
  return (
    <>
      <h3 className="text-2xl text-gray-600">{unit}</h3>
      <input
        className="border pl-3 py-2 border-b-gray-300 text-xl rounded-xl "
        type="number"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        min="1"
      />
    </>
  );
}
export default Input;
