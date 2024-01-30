import { Link, Outlet, useLocation } from "react-router-dom";
import BookRouters from "./_03_Routers";

function NavLinks() {
  const location = useLocation();
  const shouldHideAddBtn = location.pathname.includes("/add");
  const shouldHideBookssBtn = location.pathname.includes("/books");

  return (
    <>
      <div className="container">
        <ul className="nav">
          {!shouldHideBookssBtn && (
            <li className="nav-item">
              <Link to="/books">
                <button className="btn btn-primary m-2">Books</button>
              </Link>
            </li>
          )}
          {!shouldHideAddBtn && (
            <li className="nav-item">
              <Link to="/add">
                <button className="btn btn-warning m-2">Add New Book</button>
              </Link>
            </li>
          )}
        </ul>
        <Outlet />
        <BookRouters />
      </div>
    </>
  );
}

export default NavLinks;
