import { memo } from "react";

import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

function Footer() {
  return (
    <div className="container">
      <TopFooter />
      <BottomFooter />
    </div>
  );
}
export default memo(Footer);
