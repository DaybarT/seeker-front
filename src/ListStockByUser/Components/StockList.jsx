import StockCard from "./StockCard";


//SKU,precio,talla,model,img,sizeprice

const StockList = ({stock}) => {
    return(
        <div className="StockList"  style={{ display: 'flex', width: '100%',flexWrap: 'wrap', justifyContent: "center" }}>
            {stock.map((zapa,index)=> {
                return <StockCard 
                key={index}
                _id={zapa._id}
                SKU={zapa.SKU}
                precio={zapa.precio}
                talla={zapa.talla}
                model={zapa.model}
                img={zapa.img}
                Fecha={zapa.Fecha}
                sizePrices={zapa.sizePrices}
                />
            })}
        </div>
    )
}
export default StockList;