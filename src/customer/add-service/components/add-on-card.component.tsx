export const AddOnCard = (props: any) => {
  return (
    <div className="border-2 border-gray-100 p-2 rounded-lg">
      <h1 className="font-bold mb-3">{props.data.description}</h1>
      <div className="w-full grid grid-cols-5 sm:grid-cols-3 gap-2">
        {props.data.apps.map((app: string, index: number) => (
          <img key={index} src={`/assets/img/${app}.png`} className="h-10 w-10 mx-1" />
        ))}
      </div>
    </div>
  );
};
