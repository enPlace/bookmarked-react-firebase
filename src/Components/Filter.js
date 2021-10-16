import "./Filter.css";
const Filter = ({ setSortBy, hasReadFilter, setHasReadFilter }) => {
  return (
    <div id="form-container" class="search-bar">
      <form autocomplete="off" action="">
        <input
          id="search-bar"
          type="text"
          placeholder="Filter books by title or author..."
        />
      </form>
      <form id="sort-form" action="">
        <label htmlFor="sort">Sort by:</label>
        <select
          name="sort"
          id="sort-select"
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </form>
      <form id="read-filter">
        <div>view:</div>

        <input
          type="radio"
          id="all"
          name="view"
          value="all"
          checked={hasReadFilter === "all" ? "checked" : ""}
          onChange={() => {
            setHasReadFilter("all");
          }}
        />
        <label htmlFor="all">all</label>
        <input
          type="radio"
          id="read"
          name="view"
          value="read"
          checked={hasReadFilter === true ? "checked" : ""}
          onChange={() => {
            setHasReadFilter(true);
          }}
        />
        <label htmlFor="read">read</label>
        <input
          type="radio"
          id="not-read"
          name="view"
          value="not-read"
          checked={hasReadFilter === false ? "checked" : ""}
          onChange={() => {
            setHasReadFilter(false);
          }}
        />
        <label htmlFor="not-read">not read</label>
      </form>
    </div>
  );
};

export default Filter;
