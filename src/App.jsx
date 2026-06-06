// import { useState } from "react";
// import "./App.css";

// function App() {
//   const products = [
//     {
//       id: 1,
//       name: "Gaming Laptop",
//       price: 65000,
//       image:
//         "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
//     },
//     {
//       id: 2,
//       name: "Smartphone",
//       price: 25000,
//       image:
//         "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
//     },
//     {
//       id: 3,
//       name: "Smart Watch",
//       price: 5000,
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
//     },
//     {
//       id: 4,
//       name: "Headphones",
//       price: 3000,
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
//     },
//     {
//       id: 5,
//       name: "Bluetooth Speaker",
//       price: 2500,
//       image:
//         "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
//     },
//     {
//       id: 6,
//       name: "Wireless Mouse",
//       price: 1200,
//       image:
//         "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
//     },
//   ];

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const exist = cart.find((item) => item.id === product.id);

//     if (exist) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   const increaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       )
//     );
//   };

//   const decreaseQty = (id) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id
//             ? { ...item, qty: item.qty - 1 }
//             : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const removeItem = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   const placeOrder = () => {
//     alert(`🎉 Order Placed Successfully!\nTotal Amount: ₹${total}`);
//     setCart([]);
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <h2>SummerMart</h2>

//         <ul className="nav-links">
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#products">Products</a></li>
//           <li><a href="#cart">Cart</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>

//         <div className="cart-count">
//           🛒 {cart.length}
//         </div>
//       </nav>

//       <section className="hero" id="home">
//         <div className="hero-content">
//           <h1>SUMMER SALE 2026</h1>
//           <h2>UP TO 70% OFF</h2>
//           <p>
//             Premium Electronics, Gadgets &
//             Accessories at Amazing Prices
//           </p>
//           <button>Shop Now</button>
//         </div>
//       </section>

//       <section className="about" id="about">
//         <h2>Why Choose SummerMart?</h2>

//         <p>
//           SummerMart provides top-quality electronics,
//           secure shopping, fast delivery, and exciting
//           seasonal discounts for customers.
//         </p>

//         <div className="features">
//           <div className="feature-box">
//             🚚
//             <h3>Fast Delivery</h3>
//           </div>

//           <div className="feature-box">
//             🔒
//             <h3>Secure Payment</h3>
//           </div>

//           <div className="feature-box">
//             🎁
//             <h3>Best Offers</h3>
//           </div>

//           <div className="feature-box">
//             ⭐
//             <h3>Premium Products</h3>
//           </div>
//         </div>
//       </section>

//       <section id="products">
//         <h2 className="title">Featured Products</h2>

//         <div className="products">
//           {products.map((product) => (
//             <div className="card" key={product.id}>
//               <img src={product.image} alt={product.name} />

//               <h3>{product.name}</h3>

//               <p>₹{product.price}</p>

//               <button onClick={() => addToCart(product)}>
//                 Add To Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="cart" id="cart">
//         <h2>Shopping Cart</h2>

//         {cart.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <h4>{item.name}</h4>

//             <div>
//               <button
//                 onClick={() => decreaseQty(item.id)}
//               >
//                 -
//               </button>

//               <span>{item.qty}</span>

//               <button
//                 onClick={() => increaseQty(item.id)}
//               >
//                 +
//               </button>
//             </div>

//             <h4>
//               ₹{item.price * item.qty}
//             </h4>

//             <button
//               className="remove"
//               onClick={() => removeItem(item.id)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}

//         <h2>Total: ₹{total}</h2>

//         {cart.length > 0 && (
//           <button
//             className="order-btn"
//             onClick={placeOrder}
//           >
//             Place Order
//           </button>
//         )}
//       </section>

//       <section className="contact" id="contact">
//         <h2>Contact Us</h2>
//         <p>Email: support@summermart.com</p>
//         <p>Phone: +91 9876543210</p>
//       </section>

//       <footer>
//         <p>© 2026 SummerMart. All Rights Reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default App;

import React from "react";
import Form from "./Form";
import "./App.css";

const App = () => {
    return (
        <div>
            <Form />
        </div>
    );
};

export default App;