import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";

const SearchPage = () => {
  return (
    <div className="max-width padding-x padding-y ">
      <NavBar />
      <SearchBar />
      <div className="flex justify-center items-center space-x-2">
        <p className="paragraph">&#60;</p>
        <p className="paragraph">...</p>
        <p className="paragraph">3</p>
        <p className="paragraph">4</p>
        <p className="paragraph">5</p>
        <p className="paragraph">...</p>
        <p className="paragraph">&#62;</p>
      </div>
    </div>
  );
};

export default SearchPage;
