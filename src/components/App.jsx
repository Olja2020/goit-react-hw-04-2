import { useEffect, useState } from "react";
import LoadMoreBtn from "./loadMoreBtn/LoadMoreBtn";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import SearchBar from "./searchBar/SearchBar";
import ErrorMessage from "./errorMassage/ErrorMessage";
import ImageModal from "./imageModal/ImageModal";
import React from "react";
//import ReactDOM from "react-dom";
//import Modal from "react-modal";

import { getImages } from "../../src/Api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  //const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  let subtitle;

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
        setShowBtn(data.total_pages && data.total_pages !== page);
        console.log(data, page);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  //Modal.setAppElement("#yourAppElement");

  function openModal(image) {
    setIsOpen(true);
    setSelectedImage(image);
  }
  // const openModal = (image) => {
  //   setModalIsOpen(true);
  //   setSelectedImage(image);
  // };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <SearchBar images={images} onSearch={handleSearch} />
      <ImageGallery items={images} />

      {isLoading && <Loader />}

      {showBtn && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {isError && <ErrorMessage />}

      {modalIsOpen && (
        <ImageModal
          onOpen={openModal}
          onClose={closeModal}
          afterOpenModal={afterOpenModal}
          isOpen={modalIsOpen}
        />
      )}
    </div>
  );
}
//ReactDOM.render(<App />, appElement);
