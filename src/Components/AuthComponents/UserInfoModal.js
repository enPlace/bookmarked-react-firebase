import { useUser, useFirebaseApp } from "reactfire";
import { getAuth, signOut } from "@firebase/auth";

const UserInfoModal = ({user, showHideModal, setShowHideModal}) => {
  console.log(user)
  const auth = getAuth(useFirebaseApp());
  return !showHideModal? null: (
      <div className="userInfoModal" id = "userInfoModal">
        <img src={user.photoURL} alt="" onClick={() => setShowHideModal(true)} />
        <div style = {{fontWeight:"bold"}}>{user.displayName}</div>
        <div style = {{fontSize:"15px"}}>{user.email}</div>
        <button
        onClick={() => {
          signOut(auth);
          setShowHideModal(false)
        }}
      >
        sign out
      </button>
      </div>
  );
};

export default UserInfoModal;
