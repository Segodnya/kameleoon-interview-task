import { useLocation } from "react-router-dom";
import { Back } from "./Back";

export function Footer() {
  const location = useLocation();
  const showFooter = location.pathname !== "/";

  if (!showFooter) {
    return null;
  }

  return (
    <footer>
      <Back />
    </footer>
  );
}
