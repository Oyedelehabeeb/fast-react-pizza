import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/userName";

function Header() {
  return (
    <header className="bg-yellow-400 uppercase tracking-widest px-4 py-3 border-b border-stone-200 sm:px-6 flex items-center justify-between">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
