import React from "react";
import { Pagination } from "react-bootstrap";

export const Paginate = ({ actualPage, setActualPage, maxPages }) => {
  return (
    <Pagination>
      <Pagination.First onClick={() => setActualPage(1)} />
      <Pagination.Prev
        className={actualPage === 1 && "disabled"}
        onClick={() => setActualPage(actualPage - 1)}
      />

      <Pagination.Item
        className={actualPage === 1 && "disabled"}
        onClick={() => setActualPage(actualPage - 1)}
      >
        {actualPage === 1 ? `-` : `${actualPage - 1}`}
      </Pagination.Item>

      <Pagination.Item className="paginate" active>
        {actualPage}
      </Pagination.Item>

      <Pagination.Item
        className={actualPage === maxPages && "disabled"}
        onClick={() => setActualPage(actualPage + 1)}
      >
        {actualPage === maxPages ? `-` : `${actualPage + 1}`}
      </Pagination.Item>

      <Pagination.Next
        className={actualPage === maxPages && "disabled"}
        onClick={() => setActualPage(actualPage + 1)}
      />
      <Pagination.Last onClick={() => setActualPage(maxPages)} />
    </Pagination>
  );
};
