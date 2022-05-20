import React from "react";

const Datalist = ({
  id,
  label,
  name,
  value,
  error,
  placeholder,
  readOnly,
  onChange,
  children,
}) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        className={`form-control ${error && "is-invalid"}`}
        list={`list_${name}`}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="invalid-feedback">{error}</div>
      <datalist id={`list_${name}`}>{children}</datalist>
    </>
  );
};

export default Datalist;
