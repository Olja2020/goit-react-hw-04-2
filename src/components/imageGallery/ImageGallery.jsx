import ImageCard from "../imageCard/ImageCard";
import ImageModal from "../imageModal/ImageModal";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard data={item} />
          <ImageModal data={item} />
        </li>
      ))}
    </ul>
  );
}
