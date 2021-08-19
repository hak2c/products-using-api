import { useContext } from "react";
import { ProductState } from "../ProductPage";
import { API_URL } from "../Utils";

export default function RenderColorSelect() {
  const { product } = useContext(ProductState);
  let colorFirstChecked = false;
  let colorFirstCheckedForLabel = false;
  let colorLabel = "";

  for (let i = 0; i < product.color.length; i++) {
    if (product.color[i].available && !colorFirstChecked) {
      colorFirstChecked = true;
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
    console.log(e.target.value);
  }
  return (
    <>
      {colorLabel}
      <div className="color-select d-flex align-items-center">
        {product.color.map((color, index) => {
          let checked = false;
          if (color.available && !colorFirstCheckedForLabel) {
            checked = true;
            colorFirstCheckedForLabel = true;
          }
          return (
            <div key={index} className="form-group">
              <input
                type="radio"
                checked={checked}
                name="color-variant"
                value={color.name}
                id={"color" + color.name}
                onChange={(e) => handleOnChange(e)}
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
          );
        })}
      </div>
    </>
  );
}
