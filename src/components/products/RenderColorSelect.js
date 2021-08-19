import { useContext } from "react";
import { ProductState } from "../ProductPage";
import { API_URL } from "../Utils";

export default function RenderColorSelect() {
  const { product, colorValue, setColorValue } = useContext(ProductState);
  let colorLabel = "";

  for (let i = 0; i < product.color.length; i++) {
    if (product.color[i].available) {
      colorLabel = (
        <div className="form-group variant-label color-label">
          <label>Color:</label>
          <span>{product.color[i].name}</span>
        </div>
      );
      break;
    }
  }
  function handleOnChange(e) {
    setColorValue(e.target.value);
  }
  return (
    <>
      {colorLabel}
      <div className="color-select d-flex align-items-center">
        {product.color.map((color, index) => (
          <div key={index} className="form-group">
            <input
              type="radio"
              checked={color.name === colorValue ? true : false}
              name="color-variant"
              value={color.name}
              id={"color" + color.name}
              onChange={color.available ? (e) => handleOnChange(e) : undefined}
            />
            <label
              className={
                !color.available
                  ? "crossed d-flex justify-content-center align-items-center"
                  : "d-flex justify-content-center align-items-center"
              }
              htmlFor={"color" + color.name}
            >
              <span
                style={{
                  backgroundImage: "url(" + API_URL + color.thumb + ")",
                }}
              ></span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
