import Search from "./_components/search";
import Header from "./_components/header";
const home = () => {
  return (
    <>
      <Header />;
      <div className="px-5 pt-6">
        <Search />
      </div>
      ;
    </>
  );
};

export default home;
