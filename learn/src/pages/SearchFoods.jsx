import { useEffect, useRef, useState } from "react";
import { foods, filterItems } from "./../data/fooddata";
import PropTypes from "prop-types";

export default function SearchFood() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, [query]);

  const filteredFoods = filterItems(foods, debouncedQuery);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container mx-auto p-4 md:max-w-3xl">
      <SearchBar value={query} onChange={handleChange} />
      <List items={filteredFoods} />
    </div>
  );
}

const SearchBar = ({ value, onChange }) => {
  return (
    <label className="block mb-4">
      <input
        type="text"
        placeholder="Search for food"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:w-1/2"
      />
    </label>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const List = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  if (items.length === 0) {
    return <div className="text-center">No items found</div>;
  }

  if (currentPage > totalPages) {
    setCurrentPage(1);
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((food) => (
            <tr key={food.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {food.name}
              </td>
              <td className="px-6 py-4  text-sm text-gray-900">
                {food.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-sm font-medium ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        >
          Previous
        </button>
        <div className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-sm font-medium ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};
