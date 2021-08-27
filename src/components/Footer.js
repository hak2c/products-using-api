import { memo } from "react";

import TopFooter from "./footer/TopFooter";
import BottomFooter from "./footer/BottomFooter";

function Footer() {
  return (
    <div className="container">
      <TopFooter />
      <BottomFooter />
    </div>
  );
}
export default memo(Footer);
