
interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => (
  <form className="flex items-center w-full max-w-xl mx-auto bg-gray-200 rounded-full mb-5 px-6 py-2">
    <span className="w-4 h-4 bg-black rounded mr-3 inline-block" />
    <input
      type="text"
      className="bg-transparent outline-none flex-1 text-black placeholder-black"
      value={value}
      onChange={onChange}
      placeholder={placeholder || "Search a movie or a series"}
      aria-label="Search"
      autoFocus
    />
  </form>
);

export default SearchBar;