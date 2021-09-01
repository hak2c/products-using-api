import { memo } from "react";
import { Pagination } from "react-bootstrap";

function PaginationContent({ totalPages, page, setPage, setSpinner }) {
  let items = [];
  if (page > 1) {
    items.push(
      <Pagination.First
        key="first"
        onClick={(e) => {
          setPage(1);
          setSpinner(true);
        }}
      />
    );
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={(e) => {
          setPage(page - 1);
          setSpinner(true);
        }}
      />
    );
  }
  let prevEllis = false;
  let nextEllis = false;
  for (let number = 1; number <= totalPages; number++) {
    if (number < page - 2) {
      if (!prevEllis) {
        items.push(<Pagination.Ellipsis key="prevEllis" />);
        prevEllis = true;
      }
    } else if (number > page + 2) {
      if (!nextEllis) {
        items.push(<Pagination.Ellipsis key="nextEllis" />);
        nextEllis = true;
      }
    } else {
      items.push(
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={
            number !== page ? (e) => handleClickPagination(number) : undefined
          }
        >
          {number}
        </Pagination.Item>
      );
    }
  }
  if (page < totalPages) {
    items.push(
      <Pagination.Next
        key="next"
        onClick={(e) => {
          setPage(page + 1);
          setSpinner(true);
        }}
      />
    );
    items.push(
      <Pagination.Last
        key="last"
        onClick={(e) => {
          setPage(totalPages);
          setSpinner(true);
        }}
      />
    );
  }
  function handleClickPagination(number) {
    setPage(number);
    setSpinner(true);
  }
  return (
    <div className="row mx-lg-0">
      <div className="col-12 text-center">
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
}

export default memo(PaginationContent);
