import { useContext, memo } from "react";
import { ProductState } from "../ProductPage";

function RenderSizeSelect() {
  const { product, sizeValue, setSizeValue } = useContext(ProductState);

  return (
    <>
      <div className="form-group variant-label size-label">
        <label>Size:</label>
        <span>{sizeValue}</span>
      </div>
      <div className="size-select d-flex align-items-center">
        {product.size.map((size, index) => (
          <div key={index} className="form-group">
            <input
              type="radio"
              checked={size.name === sizeValue ? true : false}
              name="size-variant"
              value={size.name}
              id={"size" + size.name}
              onChange={
                size.available ? (e) => setSizeValue(e.target.value) : undefined
              }
            />
            <label
              className={!size.available ? "crossed" : ""}
              htmlFor={"size" + size.name}
            >
              {size.name}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
export default memo(RenderSizeSelect);
