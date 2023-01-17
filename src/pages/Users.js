import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import "./styles/Blobs.css";
import Card from "../components/Card";
import Footer from "../components/Footer";

import { getUsers, loadingState } from "../redux/users/usersSlice";

function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const isLoading = useSelector(loadingState);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isLoading === false) {
      dispatch(getUsers());
    }
  }, [dispatch, isLoading]);

  const filteredUsers = useMemo(
    () =>
      // eslint-disable-next-line array-callback-return
      users.filter((user) => {
        if (query === "") {
          return user;
        } else if (user.name.toLowerCase().includes(query.toLowerCase())) {
          return user;
        }
      }),
    [query, users]
  );

  if (isLoading === true) {
    <p>Loading...</p>;
  }

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            TouchInspo
          </NavLink>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="James Bond"
              className="input input-bordered text-black"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="user" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font blobs">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {filteredUsers.map((user) => {
              return (
                <Card
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  occupation={user.occupation}
                  bio={user.bio}
                  onClick={() => navigate(`/${user.id}`)}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Users;
