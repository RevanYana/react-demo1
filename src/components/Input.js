import React from "react";

const Input = (props) => {
  const {
    id,
    label,
    type,
    name,
    value,
    error,
    placeholder,
    readOnly,
    onChange,
  } = props;
  return (
    <div className="mb-3">
      {label && (
        <label
          className="form-label"
          htmlFor={id}
          dangerouslySetInnerHTML={{ __html: label }}
        ></label>
      )}
      {type === "text" || !type || type === "password" ? (
        <input
          id={id}
          type={type ? type : "text"}
          className={`form-control ${error && "is-invalid"}`}
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          readOnly={readOnly}
          onKeyUp={(e) => onChange(e)}
        />
      ) : (
        <input
          id={id}
          type={type ? type : "text"}
          className={`form-control ${error && "is-invalid"}`}
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          readOnly={readOnly}
          onChange={(e) => onChange(e)}
        />
      )}
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
