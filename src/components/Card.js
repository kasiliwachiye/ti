const Card = ({ name, email, occupation, bio, onClick, imageURL = "https://dummyimage.com/302x302" }) => {
  return (
    <div className="m-4 p-4 border w-full md:w-64 lg:w-96 lg:mb-0">
      <div className="h-full text-center">
        <img
          alt="user-avatar"
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={imageURL}
        />
        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
          {name}
        </h2>
        <p className="text-gray-500 text-sm">{email}</p>
        <p className="text-gray-500">{occupation}</p>
        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
        <p className="leading-relaxed">{bio}</p>
        <div className="flex justify-center items-center">
          <div>
            <button
              className="btn btn-outline mt-4"
              onClick={onClick}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
