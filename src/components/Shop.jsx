const data = [
  {
    brand: "Samsung",
    model: "S24",
    price: 550,
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1759733974",
  },
  {
    brand: "Samsung",
    model: "S26 Ultra",
    price: 1890,
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1759733974",
  },
  {
    brand: "iPhone",
    model: "13 Pro",
    price: 700,
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1759733974",
  },
  {
    brand: "iPhone",
    model: "SE",
    price: 380,
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1759733974",
  },
  {
    brand: "iPhone",
    model: "SE",
    price: 380,
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1759733974",
  },
];

function Shop() {
  return (
    <>
      <div className="container">
        <h1 className="text-danger">Shop</h1>

        <div className="card-container d-flex gap-3">
          {data.map(({ brand, model, price, image }) => {
            return (
              <>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={image} class="card-img-top" alt="rasm" />
                  <div class="card-body">
                    <h5 class="card-title"> {brand} </h5>
                    <p class="card-text"> {model} </p>
                    <p class="card-text"> ${price} </p>
                    <a href="#" class="btn btn-primary">
                      Buy
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <ul>
        {data.map(({ brand, model, price }) => {
          return (
            <>
              <li>
                {" "}
                {brand} {model}: {price}${" "}
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Shop;

// return (
//     <>
//         <div class="card" style={{ width: "18rem" }}>
//         <img src={image} class="card-img-top" alt="rasm" />
//         <div class="card-body">
//             <h5 class="card-title"> {brand} </h5>
//             <p class="card-text"> {model} </p>
//             <p class="card-text"> ${price} </p>
//             <a href="#" class="btn btn-primary">Buy</a>
//         </div>
//         </div>
//     </>
// )
