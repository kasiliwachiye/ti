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

  const user = users?.find((u) => u.id === id);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [occupation, setOccupation] = useState(user?.occupation);
  const [bio, setBio] = useState(user?.bio);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    if (name && email && occupation && bio) {
      dispatch(
        updateUser({
          id: id,
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
      <div className="flex flex-col justify-center items-center blobs">
        <div className="flex justify-center items-center my-4">
          <img
            alt="user-avatar"
            className="w-20 h-20 rounded-full border-gray-200 bg-gray-100"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          />

        </div>
        <div className="flex flex-col mb-6">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="James Bond"
              className="input input-bordered w-96 max-w-xs input-primary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="jamesbond007@spymail.com"
              className="input input-bordered w-96 max-w-xs input-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Occupation</span>
            </label>
            <input
              type="text"
              placeholder="Secret service agent"
              className="input input-bordered w-96 max-w-xs input-primary"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Bio</span>
            </label>
            <textarea
              className="textarea textarea-primary h-24"
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
