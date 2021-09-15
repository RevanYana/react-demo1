import React from "react";

const Loading = (props) => {
  const { title } = props;
  return (
    <div className="d-flex justify-content-center align-items-center py-5 bg-light text-secondary">
      <div className="spinner-border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
      {props.title ? <h3> &nbsp; {title}</h3> : <h3> &nbsp; Loading . . .</h3>}
    </div>
  );
};

export default Loading;
