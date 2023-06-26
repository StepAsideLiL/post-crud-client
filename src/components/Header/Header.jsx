import NavLeft from "./parts/NavLeft";
import NavRight from "./parts/NavRight";

const Header = () => {
  return (
    <div className="border-b-[1px]">
      <div className="contaniner navbar mx-auto max-w-5xl bg-base-100">
        <NavLeft />

        <NavRight />
      </div>
    </div>
  );
};

export default Header;
