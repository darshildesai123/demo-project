import React from "react";
import { styled } from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteCartAction,
  updateQuantityAction,
} from "../Redux/actions/ecommerceAction";

function Cartitem({ cart }) {
  const dispatch = useDispatch();

  function onDeleteCart() {
    dispatch(deleteCartAction(cart?.id));
  }

  function onUpdateQuantity(action) {
    if (action === "increase") {
      dispatch(updateQuantityAction(cart?.id, cart?.quantity + 1));
    } else {
      dispatch(
        updateQuantityAction(
          cart?.id,
          cart?.quantity === 1 ? cart?.quantity : cart?.quantity - 1
        )
      );
    }
  }
  return (
    <>
      <Container>
        <Img src={cart.image} />
        <CardWrapper>
          <h5>{cart.productName}</h5>
          <p>{cart.productDesc} </p>
          <Carticon>
            <AiOutlinePlus
              className="icon"
              onClick={() => onUpdateQuantity("increase")}
            />
            <span>{cart.quantity}</span>
            <AiOutlineMinus
              className="icon"
              onClick={() => onUpdateQuantity()}
            />
            <button onClick={onDeleteCart} className="btn btn-secondary">
              Remove
            </button>
          </Carticon>
        </CardWrapper>
        <Pricesection>
          <h5>200</h5>
        </Pricesection>
      </Container>
    </>
  );
}

export default Cartitem;

const Container = styled.div`
  display: flex;
  justify-content: left;
  border: 1px solid #000;
`;
const CardWrapper = styled.div``;

const Img = styled.img`
  width: 20%;
  height: 20%;
`;

const Carticon = styled.div`
  .icon,
  span {
    font-size: 20px;
    border: 1px solid lightgrey;
    height: 40px;
    width: 40px;
    padding: 10px;
    line-height: 20px;
  }
`;

const Pricesection = styled.div`
  display: flex;
`;
