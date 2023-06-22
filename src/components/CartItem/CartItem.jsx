import React from 'react';
import './CartItem.css';
import { BsFillCartXFill } from 'react-icons/bs';

function CartItem() {
  return (
    <section className="cart-item">
      <img src=""
        alt=""
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-tytle">titulo</h3>
        <h3 className="cart-item-price">R$ 18127</h3>

        <button
          type="button"
          className="button_remove-item"
        >
          <BsFillCartXFill/>
        </button>
      

      </div>
    </section>
  );
}

export default CartItem;
