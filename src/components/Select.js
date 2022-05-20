import React from "react";

const Select = ({
  id,
  label,
  name,
  value,
  error,
  disabled,
  onChange,
  children,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        className={`form-select ${error && "is-invalid"}`}
        name={name}
        defaultValue={value}
        onChange={onChange}
        disabled={disabled}
      >
        {children}
      </select>
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Select;
