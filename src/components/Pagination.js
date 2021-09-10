import { fetchingData } from "../api";

const Pagination = (props) => {
  const { links, onChange } = props;

  if (links && links.length > 0) {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {links.map((i, index) => {
            return (
              <li
                key={index}
                className={i.active ? "page-item active" : "page-item"}
              >
                <button
                  onClick={() => {
                    if (i.url) {
                      let page = i.url.split("?page=");
                      page = page[1];
                      onChange(page);
                      fetchingData();
                    }
                    // }} className="page-link" dangerouslySetInnerHTML={{__html: i.label}}></button>
                  }}
                  className="page-link"
                >
                  {(() => {
                    if (i.label === "&laquo; Previous") {
                      return <span aria-hidden="true">&laquo;</span>;
                    } else if (i.label === "Next &raquo;") {
                      return <span aria-hidden="true">&raquo;</span>;
                    } else {
                      return i.label;
                    }
                  })()}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  } else {
    return '';
  }
};

export default Pagination;
