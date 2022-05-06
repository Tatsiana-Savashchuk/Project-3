export const Input = (inputType = null, inputClassName = null, onChangeFunction = null) => {
  return (
    <input type={inputType} className={inputClassName} onChange={onChangeFunction} />
  );
};
