
import { useUser } from "reactfire";
import { useState } from "react";
import Overlay from "../Modals/Overlay";
import UserInfoModal from "./UserInfoModal";
import "./AuthComponents.css"
const AuthHeader = () => {
  const { status, data: user } = useUser();

  const [showHideModal, setShowHideModal] = useState(false);
  console.log("this is user", user);
  if (status === "loading") {
    return <span>loading...</span>;
  }
  return !user ? null : (
    <div className="authHeader">
      <Overlay
        setShowHideModal={setShowHideModal}
        showHideModal={showHideModal}
      />
      <UserInfoModal
        setShowHideModal={setShowHideModal}
        showHideModal={showHideModal}
        user = {user}
      />
     
      <img src={user.photoURL} alt="" onClick={() => setShowHideModal(true)} />
    </div>
  );
};

export default AuthHeader;
