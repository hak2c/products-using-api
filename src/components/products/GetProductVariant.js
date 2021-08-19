import { ProductState } from "../ProductPage";

import RenderSizeSelect from "./RenderSizeSelect";
import RenderColorSelect from "./RenderColorSelect";
import { useContext } from "react";

export default function GetProductVariant() {
  const { product } = useContext(ProductState);
  return (
    <>
      {product.size.length === 0 ? (
        <div className="form-group variant-label">
          <label>Size:</label>One size
        </div>
      ) : (
        <RenderSizeSelect />
      )}
      {typeof product.color !== "undefined" && <RenderColorSelect />}
    </>
  );
}
