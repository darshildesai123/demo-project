import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { addToCartAction } from "../Redux/actions/ecommerceAction";

// const productDetail = {
//   brand: "Redgear",
//   productName:
//     "Redgear Shadow Blade Mechanical Keyboard with Drive Customization, Spectrum LED Lights, Media Control Knob and Wrist Support (Black) ",
//   productDesc:
//     " Blue Switches: Shadow blade comes equipped with mechanical Blue Clicky Switches which gives you a tactile feedback of it. It also helps to increase the gaming speed by reducing the effort required to push the keys all the way through and provides a 100% typing speed bonus. ",
//   basisPrise: 3999,
//   sellPrice: 2470,
//   quantity: 1,
//   image: "https://m.media-amazon.com/images/I/61NKGdlO36L._SL1500_.jpg",
// };

function ProductCard({ productDetail }) {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();

  function addToCart(productDetail) {
    dispatch(
      addToCartAction({ ...productDetail, productId: productDetail.id })
    );
  }

  return (
    <ProductContainer>
      <ProductImage src={productDetail?.image} />
      <ProductDetailWrapper>
        <ProductBrand>{productDetail.brand}</ProductBrand>
        <ProductName>{productDetail.productName}</ProductName>
        <ProductDesc showMore={showMore} onClick={() => setShowMore(!showMore)}>
          {productDetail.productDesc}
        </ProductDesc>
        <PriceWrapper>
          <SellPrice>₹{productDetail.sellPrice}</SellPrice>
          <Price>
            M.R.P: ₹
            <span style={{ textDecoration: "line-through" }}>
              {productDetail.basisPrise}
            </span>
          </Price>
        </PriceWrapper>
      </ProductDetailWrapper>
      <Button onClick={() => addToCart(productDetail)}>Add To Cart</Button>
    </ProductContainer>
  );
}

export default ProductCard;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 325px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductDetailWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductBrand = styled.h2`
  font-weight: 600;
  color: #000;
  padding: 0;
`;
const ProductName = styled.p`
  font-weight: 600;
  color: #000;
  padding: 0;
`;
const ProductDesc = styled.span`
  color: #000;
  ${(props) =>
    props.showMore
      ? `
            overflow: inherit;
        `
      : `
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
`;
const SellPrice = styled.h2`
  font-weight: 500;
  color: #000;
`;
const Price = styled.p`
  font-weight: 500;
  color: #000;
  padding: 0;
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 20px 30px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
`;
