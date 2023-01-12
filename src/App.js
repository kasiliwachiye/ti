import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="lg:w-96 lg:mb-0 m-4 p-4 border">
              <div className="h-full text-center">
                <img
                  alt="user-avatar"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/302x302"
                />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p className="text-gray-500 text-sm">holden@mail.com</p>
                <p className="text-gray-500">Senior Product Designer</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <p className="leading-relaxed">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <div className="flex justify-center items-center">
                  <div>
                    {/* Edit button to open modal */}
                    <label
                      htmlFor="my-modal-4"
                      className="btn btn-outline btn-warning m-2"
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
                  <div>
                    {/* The button to open modal */}
                    <label
                      htmlFor="my-modal"
                      className="btn btn-outline btn-error"
                    >
                      Delete User
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg text-red-600">
                          You are about to delete this user
                        </h3>
                        <p className="py-4">Proceed on deleting this user?</p>
                        <div className="modal-action">
                          <label
                            htmlFor="my-modal"
                            className="btn btn-outline btn-accent"
                          >
                            No
                          </label>
                          <label
                            htmlFor="my-modal"
                            className="btn btn-outline btn-error"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
