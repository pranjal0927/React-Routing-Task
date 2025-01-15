import React, { useEffect, useState } from "react";
import Dashboard from "../Header/Dashboard";

function ProductList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        if (!response) {
          throw new Error("something went wrong in fetching data");
        }
        const data = await response.json();
        setData(data.carts);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  if (!loading) {
    return <div>Loading....</div>;
  }
  if (error) return <div>Error:{error}</div>;

  return (
    <>
      <Dashboard />
      <h1 style={{ textAlign: "center" }}>Product Lists</h1>
      <div className="container">
        <div className="card">
          {data.length === 0 ? (
            <p>No products available</p> // Show message if no data is available
          ) : (
            <div
              className="product-item"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              {data.map((cart) => (
                <div className="card-item">
                  {cart.products.map((item) => (
                    <div
                      className="card-body"
                      style={{
                        border: "2px solid black",
                        padding: "10px",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      <p>Id: {item.id}</p>
                      <img
                        src={item.thumbnail}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginBottom: "10px",
                        }}
                      />
                      <p>Title: {item.title}</p>
                      <p>Price: {item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Discount Total: {item.discountedTotal}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
