import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./styles/Blobs.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { updateUser } from "../redux/users/usersSlice";

const UpdateUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);

  const user = users?.find((u) => u._id === id);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [occupation, setOccupation] = useState(user?.occupation);
  const [bio, setBio] = useState(user?.bio);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    if (name && email && occupation && bio) {
      dispatch(
        updateUser({
          _id: id,
          name: name,
          email: email,
          occupation: occupation,
          bio: bio,
        })
      );
      navigate("/");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center blobs">
        <div className="m-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="James Bond"
              className="input input-bordered w-full max-w-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="jamesbond007@spymail.com"
              className="input input-bordered w-full max-w-xs"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bio</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="The name's Bond. James Bond."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <button className="btn btn-outline my-4" onClick={handleUpdateUser}>
            Update
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateUser;
