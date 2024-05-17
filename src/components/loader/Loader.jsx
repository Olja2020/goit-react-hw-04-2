import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={css.loader}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#3846ad"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
