import RenderSizeSelect from "./RenderSizeSelect";
import RenderColorSelect from "./RenderColorSelect";

export default function GetProductVariant({ product }) {
  return (
    <>
      {product.size.length === 0 ? (
        <div className="form-group variant-label">
          <label>Size:</label>One size
        </div>
      ) : (
        <RenderSizeSelect product={product} />
      )}
      {typeof product.color !== "undefined" && (
        <RenderColorSelect product={product} />
      )}
    </>
  );
}
