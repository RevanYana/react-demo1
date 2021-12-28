import React from "react";

const Table = (props) => {
  const { children } = props;
  return (
    <div className="table-responsive">
      <table className="table table-sm table-bordered table-striped">
        {children}
      </table>
    </div>
  );
};

export const Thead = (props) => {
  const { children } = props;
  return (
    <thead className="bg-primary text-white text-center">
      <tr>{children}</tr>
    </thead>
  );
};

export default Table;
