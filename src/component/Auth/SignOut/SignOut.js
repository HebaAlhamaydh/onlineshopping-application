import cookie from "react-cookies";

import { useNavigate } from "react-router-dom";
import "./SignOut.scss";


export default function Logout(props) {
  const navigate = useNavigate();
  const handleSignout = () => {
    cookie.remove("token");
    cookie.remove("actions");
    cookie.remove("userAccess");
    cookie.remove("userID");
    navigate("/");
    setTimeout(()=>{
      window.location.reload();
    },100)
  };
  return (
    <>
      <button className='button button--link' onClick={handleSignout}>
        Signout
      </button>
    </>
  );
}
