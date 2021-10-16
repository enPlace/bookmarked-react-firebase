const Overlay = ({ setShowHideModal, showHideModal }) => {
  return showHideModal === false ? null : (
    <div
      id="overlay"
      className="active"
      onClick={() => setShowHideModal(false)}
    ></div>
  );
};

export default Overlay;
