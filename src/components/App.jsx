import { useEffect, useState } from "react";
import LoadMoreBtn from "./loadMoreBtn/LoadMoreBtn";
import Loader from "./loader/Loader";
import ImageGallery from "./imageGallery/ImageGallery";
import SearchBar from "./searchBar/SearchBar";
import ErrorMessage from "./errorMassage/ErrorMessage";
//import ImageModal from "./imageModal/ImageModal";
import React from "react";

import { getImages } from "../../src/Api";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data.results]);
        setShowBtn(data.total_pages && data.total_pages !== page);
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

  return (
    <div>
      <SearchBar images={images} onSearch={handleSearch} />
      <ImageGallery items={images} />

      {isLoading && <Loader />}

      {showBtn && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {isError && <ErrorMessage />}
    </div>
  );
}
