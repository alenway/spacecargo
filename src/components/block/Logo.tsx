import { Link } from "react-router-dom";
import logo from "../../assets/image2vector.svg";
type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="flex items-center gap-6">
      <Link to="/">
        <img src={logo} alt="logo" className="w-12 h-12" />
      </Link>
    </div>
  );
};

export default Logo;
