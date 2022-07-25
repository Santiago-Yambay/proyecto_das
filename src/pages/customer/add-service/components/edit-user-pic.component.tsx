export const EditUserPic = (props: any) => {
  return (
    <div className="flex items-center">
      <button className="relative hover:opacity-50 my-3 rounded-lg bg-pink-600 w-24 h-24 flex flex-col justify-center items-center">
        <img
          className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="../../../assets/svg/user-icon.svg"
          alt="user-icon"
        />
        <div className="bg-white bg-opacity-75 h-6 w-full absolute bottom-0">
          <p>Edit</p>
        </div>
      </button>

      <div className="ml-24">{props.children}</div>
    </div>
  );
};
