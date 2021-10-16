const ListItemContainer = ({
  result,
  setFirstResult,
  setShowBookListModal,
  setShowBookSearchModal,
}) => {
  const volumeInfo = result.volumeInfo;
  /* console.log("thisis volumeninfo", volumeInfo.imageLinks[0]) */
  return (
    <div
      className="list-item-container"
      data-target="0"
      onClick={() => {
        setFirstResult(result);
        setShowBookListModal(false);
        setShowBookSearchModal(true);
      }}
    >
      <div className="list-item-title" data-target="0">
        {volumeInfo.title}
      </div>
      <div className="list-item-author" data-target="0">
        {volumeInfo.authors &&
          volumeInfo.authors.map((author) => {
            return `${author} `;
          })}
      </div>
      <div className="list-item-thumb">
        <img
          data-target="0"
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
