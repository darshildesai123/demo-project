import React from 'react'
import Cartitem from './Cart-item'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

function Cart() {
    const cartData = useSelector((state) => state.ecommrece.cart)
  return (
    <Container>
       {cartData.map((cart) =>
        <Cartitem cart={cart}/>
       )} 
    </Container>
  )
}

export default Cart

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70%;
    margin: 50px auto;
`