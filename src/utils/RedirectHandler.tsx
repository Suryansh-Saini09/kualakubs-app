import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");

    if (redirect === "about") {
      navigate("/about");
    }
  }, []);

  return null;
}

export default RedirectHandler;