import axios from "axios";

const API_KEY = "AIzaSyCBBzINmuahFxbfVH4mi66MrFG4fyWp08U"; // yaha apni key daldo
const BASE_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

export const getPageSpeed = async (url) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        url: url,
        key: API_KEY,
        strategy: "mobile",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching PageSpeed data:", error);
    return null;
  }
};
