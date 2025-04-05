import { Search } from "lucide-react";

type Props = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }: Props) => {
  return (
    <form
      onSubmit={onSearch}
      className="hidden md:flex items-center relative max-w-3xl w-full"
    >
      <input
        type="text"
        placeholder="Search and Retrieve Cargo"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="absolute right-3 text-gray-400 hover:text-white"
      >
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
