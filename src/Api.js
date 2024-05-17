import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
export const getImages = async (topic, currentPage) => {
  const response = await axios.get(
    "/search/photos?client_id=E5ABb0U9uZIG-WiJXhb3ZD8kkLohYHcuGEKhpPQZUBg",
    {
      params: {
        query: topic,
        page: currentPage,
        per_page: 12,
      },
    }
  );

  return response.data;
};
