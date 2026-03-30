import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import routes from "../config/urls.js"

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Get all paths from your routes array
  const route_list = routes.map(route => route.path);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectParam = params.get("redirect"); // e.g., "about"

    if (redirectParam) {
      // 2. Format the param to match your route strings (adding the '/')
      const targetPath = `/${redirectParam}`;

      // 3. Check if that path actually exists in your route list
      if (route_list.includes(targetPath)) {
        navigate(targetPath, { replace: true });
      } else {
        console.warn(`Route ${targetPath} not found.`);
      }
    }
  }, [location, navigate, route_list]);

  return null;
}

export default RedirectHandler;