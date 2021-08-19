import { useContext } from "react";
import { ProductState } from "../ProductPage";

export default function RenderSizeSelect() {
  const { product, sizeValue, setSizeValue } = useContext(ProductState);
  let sizeLabel = "";

  for (let i = 0; i < product.size.length; i++) {
    if (product.size[i].available) {
      sizeLabel = (
        <div className="form-group variant-label size-label">
          <label>Size:</label>
          <span>{product.size[i].name}</span>
        </div>
      );
      break;
    }
  }
  function handleOnChange(e) {
    setSizeValue(e.target.value);
  }
  return (
    <>
      {sizeLabel}
      <div className="size-select d-flex align-items-center">
        {product.size.map((size, index) => (
          <div key={index} className="form-group">
            <input
              type="radio"
              checked={size.name === sizeValue ? true : false}
              name="size-variant"
              value={size.name}
              id={"size" + size.name}
              onChange={size.available ? (e) => handleOnChange(e) : undefined}
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
