import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window { dataLayer: any[]; }
}

export default function usePageView() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: location.pathname + location.search,
      page_title: document.title
    });
  }, [location.pathname, location.search]);
}
