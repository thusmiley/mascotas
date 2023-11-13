import { useRouter } from "next/navigation";
import BreedFilter from "./BreedFilter";
import { fetchDogs } from '../utils'

const SearchBar = () => {

  return <div>
    <BreedFilter title="All Breeds" options={breeds}/>
  </div>;
};

export default SearchBar;
