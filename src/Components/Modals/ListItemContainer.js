const ListItemContainer = ({
  result,
  setFirstResult,
  setShowHideModal,
}) => {
  const volumeInfo = result.volumeInfo;
  return (
    <div
      className="list-item-container"
      onClick={() => {
        setFirstResult(result);
        setShowHideModal("confirm-book");
      }}
    >
      <div className="list-item-title">
        {volumeInfo.title}
      </div>
      <div className="list-item-author">
        {volumeInfo.authors &&
          volumeInfo.authors.map((author) => {
            return `${author} `;
          })}
      </div>
      <div className="list-item-thumb">
        <img
          src={
            volumeInfo.imageLinks ? volumeInfo.imageLinks.smallThumbnail : ""
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default ListItemContainer;
