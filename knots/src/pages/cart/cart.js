import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Container, CartContainer, CartItem, Product } from './style';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartProvider';
import Api from '../../services/api';
import DeleteIcon from '../../assets/delete.png';

function Cart(props) {

    const hooks = useContext(CartContext)
    const { cart, productid, deletetheCartitems } = hooks
    const [data, setData] = useState([])

    return (
        <Container>
            <Header />
            <CartContainer>
                {cart.length <= 0 ?
                    <>
                        <h1>the cart is empty at the moment</h1>
                        <Link to='/shop'>
                            <button>Continue Shopping</button>
                        </Link>
                    </> :
                    <>
                        <h1>the cart has items</h1>
                        {cart.map(a => (
                            <ul key={a.id}>


                                <CartItem>
                                    <div style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                                        <img style={{ width: '100%', height: '100%', display: 'block' }} src={a.image}></img>
                                    </div>

                                    <div >
                                        <h3 style={{ margin: '7px 0' }}>{a.title}</h3>
                                        <span style={{ fontSize: '22px' }}>£ {a.price}</span>
                                    </div>

                                    <div>
                                        <h3 style={{ margin: '7px 0' }}>Total Price</h3>
                                        <span style={{ fontSize: '22px' }}>£ {a.price}</span>
                                    </div>

                                    <div style={{ width: '40px', height: '40px', overflow: 'hidden', cursor: 'pointer' }}>
                                        <img onClick={() => deletetheCartitems(a.id)} style={{ width: '100%', height: '100%', display: 'block' }} src={DeleteIcon}></img>
                                    </div>
                                </CartItem>
                            </ul>
                        ))}

                    </>}

            </CartContainer>
            <Footer />

        </Container>
    );
}

export default Cart;