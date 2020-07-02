import React, { useContext } from 'react';
import { Container, Ul, Li, Logos, List, Cart } from './style';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartProvider';

function Header(props) {


    const hooks = useContext(CartContext)
    const { count, setCount } = hooks

    return (
        <Container>
            <Logos>

                <Link to='/'>
                    <img style={{ width: '150px' }} src={Logo}></img>
                </Link>

                <List style={{ fontSize: '20px', color: '#2f2f2f' }}>
                    <Ul>
                        <Link to='/shop'>SHOP</Link>
                        <Link to='/about'>ABOUT</Link>
                        <Link to='/contact'>CONTACT</Link>
                    </Ul>
                </List>
            </Logos>

            <Cart>
                <Link to='/cart'>
                    <strong>My Cart</strong>
                </Link>
                {count > 0 ?
                    <span style={{ color: 'green' }}>{count}</span>
                    :
                    <span>{count}</span>}
            </Cart>
        </Container>
    );
}

export default Header;