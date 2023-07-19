import React, { useState, useEffect } from "react";
import axios from "axios";
const Mainsection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="maindiv">
      {data.map((item,index) => (
        <div className="contenudiv" >
          <div className="conte" key={item.index}>
            <div className="imge">
              <img src={item.thumbnail} alt="" srcSet="" />
            </div>
            <div className="info">
              <h1>{item.title}</h1>
              <h3>{item.brand}</h3>
              <p>{item.description}</p>    
              <div className="prc">
                 <span>{item.price}$</span>
              <button>add to cart</button>
              </div>         
             
            </div>
          </div>
        </div>
      ))}
    
    </div>

  );
};
export default Mainsection;
