import { memo } from "react";

import TopFooter from "./footer/TopFooter";
import BottomFooter from "./footer/BottomFooter";

function Footer({ collections }) {
  return (
    <div className="container">
      <TopFooter collections={collections} />
      <BottomFooter />
    </div>
  );
}
export default memo(Footer);
