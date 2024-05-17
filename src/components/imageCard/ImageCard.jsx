import css from "./ImageCard.module.css";

const ImageCard = ({
  data: {
    alt_description,
    urls: { small },
  },
}) => {
  return (
    <div className={css.container}>
      <img src={small} alt={alt_description} />
    </div>
  );
};
export default ImageCard;
