import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import { getUsers } from "./redux/users/usersSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {users.map((user) => {
              return (
                <div className="lg:w-96 lg:mb-0 m-4 p-4 border" key={user._id}>
                  <div className="h-full text-center">
                    <img
                      alt="user-avatar"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://dummyimage.com/302x302"
                    />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      {user.name === "" ? "(Missing Name)" : user.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {user.email === "" ? "(Missing Email)" : user.email}
                    </p>
                    <p className="text-gray-500">
                      {user.occupation === ""
                        ? "(Missing Occupation)"
                        : user.occupation}
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                    <p className="leading-relaxed">
                      {user.bio === "" ? "(Missing Bio)" : user.bio}
                    </p>
                    <div className="flex justify-center items-center">
                      <div>
                        {/* Edit button to open modal */}
                        <label
                          htmlFor="my-modal-4"
                          className="btn btn-outline m-2"
                        >
                          Edit
                        </label>
                        <input
                          type="checkbox"
                          id="my-modal-4"
                          className="modal-toggle"
                        />
                        <label
                          htmlFor="my-modal-4"
                          className="modal cursor-pointer"
                        >
                          <label
                            className="modal-box relative flex justify-center"
                            htmlFor=""
                          >
                            <div>
                              <div className="form-control w-full max-w-xs">
                                <label className="label">
                                  <span className="label-text">Name</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="James Bond"
                                  className="input input-bordered w-full max-w-xs"
                                />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                <label className="label">
                                  <span className="label-text">Email</span>
                                </label>
                                <input
                                  type="email"
                                  placeholder="jamesbond@mail.com"
                                  className="input input-bordered w-full max-w-xs"
                                />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                <label className="label">
                                  <span className="label-text">Occupation</span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Secret service agent"
                                  className="input input-bordered w-full max-w-xs"
                                />
                              </div>
                              <div className="form-control w-full max-w-xs">
                                <label className="label">
                                  <span className="label-text">Bio</span>
                                </label>
                                <textarea
                                  className="textarea textarea-bordered"
                                  placeholder="The name's Bond. James Bond."
                                ></textarea>
                                <div className="modal-action">
                                  <label
                                    htmlFor="my-modal-4"
                                    className="btn btn-outline btn-primary w-full"
                                  >
                                    Edit
                                  </label>
                                </div>
                              </div>
                            </div>
                          </label>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
