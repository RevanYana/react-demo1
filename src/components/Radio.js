import React from "react";

const Radio = (props) => {
  const { inline, error, name, value, id, checked, onChange, label } = props;

  return (
    <>
      <div className={`form-check ${inline && "form-check-inline"}`}>
        <input
          className={`form-check-input ${error && "is-invalid"}`}
          name={name}
          type="radio"
          defaultValue={value}
          id={id}
          checked={String(checked) === String(value)}
          onChange={(e) => {
            onChange(e);
          }}
        />
        {label && (
          <label
            className="form-check-label font-weight-bold text-primary"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </>
  );
};

export default Radio;
