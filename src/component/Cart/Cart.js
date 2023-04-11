import { useSelector, useDispatch } from "react-redux";
import { getAllCarts, removeCartItem } from "../../store/cart";
import { getAllItems } from "../../store/items";
import "./Cart.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const { cartList } = useSelector((state) => state.cartsSlice);
  const { allItems } = useSelector((state) => state.itemsSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarts());
    dispatch(getAllItems());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <>
      <h2 className="page-title">Shopping Cart</h2>
      {cartList.length > 0 ? (
        <>
          <div className="subtitle-item cart-container">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Action</p>
          </div>
          {cartList.map((cart) =>
            allItems.filter((item) => item.id === cart.itemId)
              .map((ele) => (
                <div className="" key={ele.id}>
                  <div className="cart-container">
                    <div className="item">
                    <Link to={`/card/${ele.id}`}>
                      <input
                        type="image"
                        className="item-image"
                        src={ele.image}
                        alt="image"
                      />
                      </Link>
                      <div className="item-info">{ele.name}</div>
                    </div>

                    <div className="price">${ele.price}</div>
                    <div className="quantity">{cart.amount}</div>
                    <div className="btn-item-cart">
                      <button
                        className="remove btn-cart"
                        onClick={() => handleRemove(cart.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
          )}
        </>
      ) : (
        <p className="empty">THE CART IS EMPTY</p>
      )}
    </>
  );
}