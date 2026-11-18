import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/cmo-club-logo.png"
        alt="The CMO Club"
        className="box-border caret-transparent h-12 max-w-full outline-neutral-950/50 cursor-pointer"
      />
    </Link>
  );
};
