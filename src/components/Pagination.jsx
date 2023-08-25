import Pagination from "react-bootstrap/Pagination";

function totalPages(total) {
  const pages = [];
  for (let i = 0; i < total; i++) {
    if (i % 2 === 0) {
      pages.push(<Pagination.Ellipsis />);
    } else {
      pages.push(<Pagination.Item>{i}</Pagination.Item>);
    }
  }
  return pages;
}

function Paginator({ totalPage }) {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {totalPages(totalPage)}
      {/* <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Paginator;
