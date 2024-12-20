import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/config";

const SetFavicon = () => {
  const [faviconUrl, setFaviconUrl] = useState("");

  const fetchFavicon = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}favicon/get-all-favicon-logo`
      );

      // Assuming the latest favicon is the last in the array
      const latestFavicon = response.data[response.data.length - 1];
      if (latestFavicon) {
        setFaviconUrl(`${API_BASE_URL}${latestFavicon.image}`);
      }
    } catch (error) {
      console.error("Error fetching favicon:", error);
    }
  };

  useEffect(() => {
    fetchFavicon();
  }, []);

  useEffect(() => {
    if (faviconUrl) {
      // Dynamically update the favicon in the document head
      const link = document.querySelector("link[rel~='icon']");
      if (link) {
        link.href = faviconUrl;
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = faviconUrl;
        document.head.appendChild(newLink);
      }
    }
  }, [faviconUrl]);

  return null; // This component does not render anything
};

export default SetFavicon;
