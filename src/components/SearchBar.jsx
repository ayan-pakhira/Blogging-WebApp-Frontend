// src/components/SearchBar.jsx
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-xl mx-auto bg-white shadow-md rounded-full px-4 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 transition"
    >
      <input
        type="text"
        placeholder="Search articles, categories..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 bg-transparent focus:outline-none px-2 text-gray-800"
      />
      <button
        type="submit"
        className="text-blue-600 hover:text-blue-800 transition text-xl"
      >
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;
