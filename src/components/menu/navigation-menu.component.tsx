import "./navigation-menu.component.css";

export interface NavigationMenuProps {
  visible: boolean;
}

export const NavigationMenu = (props: NavigationMenuProps): JSX.Element => {
  return (
    <nav
      className={`w-20 absolute flex-none z-20 text-white bg-alternative flex-col justify-between items-center py-3 amd__options-menu md:relative md:flex ${
        props.visible ? "flex" : "hidden"
      }`}
    >
      <div className="flex flex-col items-center">
        <button className="mb-8 mt-1.5 hover:animate-pulse">
          <span className="icon-home"></span>
        </button>

        <button className="mb-8">
          <span className="icon-user"></span>
        </button>

        <button className="mb-8">
          <span className="icon-note"></span>
        </button>

        <button className="mb-8">
          <span className="icon-info"></span>
        </button>

        <button className="mb-8">
          <span className="text-white">KB</span>
        </button>
      </div>

      <div>
        <button>
          <span className="icon-logout"></span>
        </button>
      </div>
    </nav>
  );
};
