import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src="https://c.animaapp.com/mlf9rarde0lMWk/img/uploaded-asset-1771865202925-0.png"
        alt="The CMO Club"
        className="box-border caret-transparent h-12 max-w-full outline-neutral-950/50 cursor-pointer"
      />
    </Link>
  );
};
