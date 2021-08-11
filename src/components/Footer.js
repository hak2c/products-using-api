import TopFooter from "./footer/TopFooter";
import BottomFooter from "./footer/BottomFooter";

export default function Footer({ collections }) {
  return (
    <div className="container">
      <TopFooter collections={collections} />
      <BottomFooter />
    </div>
  );
}
