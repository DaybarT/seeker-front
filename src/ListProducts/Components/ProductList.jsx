import ProductCard from "./ProductCard";

//SKU,precio,talla,model,img,sizeprice

const ProductList = ({ zapas }) => {

  return (
    <div
      className="ProductList"
      style={{ display: "flex", width: "100%", flexWrap: "wrap" , justifyContent: "center"}}
    >
      {zapas.map((zapa, index) => {
        return (
          <ProductCard
            key={index}
            SKU={zapa.SKU}
            Fecha={zapa.Fecha}
            model={zapa.model}
            img={zapa.img}
            sizePrices={zapa.sizePrices}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
