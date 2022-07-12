import { useState } from "react";
export const Pagination = () => {
  let pages = [1, 2, 3, 4];
  const [currentPage, setCurrentPage] = useState(1);
  const PaginationItem = ({ active }) => {
    let customClass = active
      ? "rounded-full bg-blue-500 h-3 w-3 m-2"
      : "rounded-full bg-blue-200 h-3 w-3 m-2";
    return <div className={customClass}></div>;
  };

  const handlePageChange = (element) => {
    setCurrentPage(element);
  };

  const PaginationItems = () => {
    return (
      <div className="flex">
        {pages.map((element, index) => (
          <div key={index} onClick={() => handlePageChange(element)}>
            <PaginationItem active={element === currentPage} />
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <PaginationItems />
    </div>
  );
};
