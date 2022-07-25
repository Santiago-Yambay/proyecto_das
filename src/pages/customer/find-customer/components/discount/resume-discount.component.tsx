export const ResumeDiscount = (props: any) => (
  <article className="p-2 mt-2 bg-alternative filter drop-shadow">
    <h3>
      {props.title}
    </h3>
    <div className="flex justify-between">
      <small>{props.description}</small>
      <strong className="text-secondary text-2xl">{props.discount}</strong>
    </div>
    <a href="#">
      <small>More info</small>
    </a>
  </article>
);
