import { useContext } from "react";
import { ProductState } from "../ProductPage";

export default function RenderSizeSelect() {
  const { product } = useContext(ProductState);
  let sizeFirstChecked = false;
  let sizeFirstCheckedForLabel = false;
  let sizeLabel = "";

  for (let i = 0; i < product.size.length; i++) {
    if (product.size[i].available && !sizeFirstChecked) {
      sizeFirstChecked = true;
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
    console.log(e.target.value);
  }
  return (
    <>
      {sizeLabel}
      <div className="size-select d-flex align-items-center">
        {product.size.map((size, index) => {
          let checked = false;
          if (size.available && !sizeFirstCheckedForLabel) {
            checked = true;
            sizeFirstCheckedForLabel = true;
          }
          return (
            <div key={index} className="form-group">
              <input
                type="radio"
                checked={checked}
                name="size-variant"
                value={size.name}
                id={"size" + size.name}
                onChange={(e) => handleOnChange(e)}
              />
              <label
                className={!size.available ? "crossed" : ""}
                htmlFor={"size" + size.name}
              >
                {size.name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
