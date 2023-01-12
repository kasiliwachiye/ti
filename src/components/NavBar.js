import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <h1 className=" normal-case text-xl">Touch Inspo</h1>
      </div>
      <div className="navbar-end">
        <div>
          {/* Edit button to open modal */}
          <label htmlFor="my-modal-4" className="btn btn-outline">
            Add user
          </label>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
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
                      Add User
                    </label>
                  </div>
                </div>
              </div>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
