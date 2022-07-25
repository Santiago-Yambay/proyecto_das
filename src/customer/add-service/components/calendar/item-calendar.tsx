import './item-calendar.css';

export const ItemCalendar = ({ time, borderRight, onClick }: any) => {
  let className = "m-1 py-1 px-2 bg-opacity-20";

  switch (time.state) {
    case 1:
      className += " hover:bg-primary hover:bg-opacity-20";
      break;
    case 2:
        className += " bg-primary bg-opacity-50";
        break;
    case 3:
      className += " bg-red";
    break;
  }

  const onClickHandler = () => {
    onClick(time);
  }

  return (
    <div className={`border-b ${borderRight? '': 'border-r'} amd__item-calendar`}>
      <button className={className} onClick={onClickHandler} >
        {time.value}
      </button>
    </div>
  );
};
