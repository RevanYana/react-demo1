import React from "react";

const Textarea = (props) => {
  const { id, label, name, value, error, placeholder, readOnly, onChange } =
    props;
  return (
    <div className="mb-3">
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`form-control ${error && "is-invalid"}`}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={(e) => onChange(e)}
        rows="3"
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Textarea;
