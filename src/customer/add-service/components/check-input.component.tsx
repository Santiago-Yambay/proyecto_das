export const CheckInput = (props: any) => {
  return (
    <div className="flex items-center my-2">
      <p className="mr-2">{props.label}</p>
      {props.checked ? (
        <button
          onClick={() => props.onClick()}
          className="inline-flex items-center"
        >
          <span className="relative">
            <span className="block w-16 h-8 bg-primary rounded shadow-inner"></span>
            <span className="absolute block w-6 h-6 mt-1 ml-3 rounded shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-200 ease-in-out bg-white transform translate-x-full">
              <input
                id="checked"
                type="checkbox"
                value="true"
                className="absolute opacity-0 w-0 h-0"
              />
            </span>
          </span>
        </button>
      ) : (
        <button
          onClick={() => props.onClick()}
          className="inline-flex items-center"
        >
          <span className="relative">
            <span className="block w-16 h-8 bg-gray-400 rounded shadow-inner"></span>
            <span className="absolute block w-6 h-6 mt-1 ml-1 bg-white rounded shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-200 ease-in-out">
              <input
                id="unchecked"
                type="checkbox"
                value="false"
                className="absolute opacity-0 w-0 h-0"
              />
            </span>
          </span>
        </button>
      )}
    </div>
  );
};
