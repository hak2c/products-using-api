import { useContext, memo } from "react";
import { ProductState } from "../ProductPage";
import { API_URL } from "../Utils";

function RenderColorSelect() {
  const { product, colorValue, setColorValue } = useContext(ProductState);

  return (
    <>
      <div className="form-group variant-label color-label">
        <label>Color:</label>
        <span>{colorValue}</span>
      </div>
      <div className="color-select d-flex align-items-center">
        {product.color.map((color, index) => (
          <div key={index} className="form-group">
            <input
              type="radio"
              checked={color.name === colorValue ? true : false}
              name="color-variant"
              value={color.name}
              id={"color" + color.name}
              onChange={
                color.available
                  ? (e) => setColorValue(e.target.value)
                  : undefined
              }
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
export default memo(RenderColorSelect);
