import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
