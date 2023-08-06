import { IconSearch } from '@tabler/icons-react';
import { FC } from 'react';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: FC<SearchInputProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="group group flex w-full items-center justify-center gap-2 rounded border-2 border-slate-800 px-4 py-1">
      <input
        type="text"
        placeholder="Search tasks..."
        className="w-full bg-transparent outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconSearch
        color="currentColor"
        className="transition-all group-focus-within:-translate-x-1"
      />
    </div>
  );
};

export default SearchBar;
