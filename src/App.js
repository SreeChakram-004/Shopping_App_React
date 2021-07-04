import "./styles.css";
import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export default function App() {
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      name: "Soft Pillows",
      cost: "250/-",
      image:
        "https://5.imimg.com/data5/PT/RD/AW/SELLER-45227936/colour-pillow-500x500.jpg"
    },

    {
      name: "Sofa Set",
      cost: "99999/-",
      image:
        "https://aarsunwoods.b-cdn.net/wp-content/uploads/2018/04/Traditional-Style-Sofa-Set-in-Natural-Finish-UH-YT-143.jpg"
    },

    {
      name: "Stylish Mug",
      cost: "550/-",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/710OAOrDhFL._SL1500_.jpg"
    },

    {
      name: "Wallpaper Sticker",
      cost: "500/-",
      image: "https://preview.pixlr.com/images/800wm/102/1/102102287.jpg"
    },

    {
      name: "Stylish Watches",
      cost: "2550/-",
      image:
        "https://www.bygoods.com/media/catalog/product/cache/1/image/650x/1dd3c1054c06760f44f47a9755af505d/t/2/t2ooymxbnaxxxxxxxx__793043526_1.jpg"
    },
    {
      name: "Wall Clock",
      cost: "3950/-",
      image:
        "https://i.pinimg.com/originals/db/3c/19/db3c191b2e11512c144a07f64ae0c0be.jpg"
    },
    {
      name: "Stylish Locket",
      cost: "550/-",
      image:
        "https://rukminim1.flixcart.com/image/714/857/pendant-locket/u/c/g/spn01075-men-style-original-imaefa9t9c4jnbzm.jpeg?q=50"
    },
    {
      name: "Teddy Bear",
      cost: "1550/-",
      image:
        "https://cdn.shopify.com/s/files/1/2622/2548/products/wholesale-plush-in-a-rush-120-14242116436070_1024x1024.jpg"
    },
    {
      name: "Artificial flowers",
      cost: "950/-",
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2019/12/15/bbd18059-da43-425e-87e5-64f5321277f41576372604988-1.jpg"
    },
    {
      name: "Art Candles",
      cost: "800/-",
      image:
        "https://rukminim1.flixcart.com/image/416/416/kolsscw0/candle/y/o/7/unscented-buddha-image-printed-pillar-candles-set-of-3-3-buddha-original-imag3ypmyjzthwsz.jpeg?q=70"
    },
    {
      name: "Bedroom Led Kit",
      cost: "3000/-",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91ys6Pv3IHL._SL1500_.jpg"
    }
  ]);

  const addtocart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <>
      <div className="products">
        {products.map((product) => (
          <div>
            <img src={product.image} alt={""} />
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <Button
              onClick={() => addtocart(product)}
              variant="contained"
              color="primary"
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product) => (
          <div>
            <img src={product.image} alt={""} />
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <Button
              onClick={() => removeFromCart(product)}
              variant="contained"
              color="primary"
            >
              Remove Product
            </Button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <div className="shoppe">
        TRENDY SHOPPE
        <span>
          <Button
            onClick={() => navigateTo(PAGE_CART)}
            variant="contained"
            color="primary"
          >
            Go To Cart({cart.length})
          </Button>

          <Button
            onClick={() => navigateTo(PAGE_PRODUCTS)}
            variant="contained"
            color="primary"
          >
            View Products({cart.length})
          </Button>
        </span>
      </div>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}
