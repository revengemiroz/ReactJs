import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Container, ProductDetails, Description, CartDetails, Image, Details } from './style';
import api from '../../services/api';
import { useParams, Link } from 'react-router-dom';
import animeGirl from '../../assets/anime-girl.png';
import { CartContext, CartProvider } from '../../context/cartProvider';

function Product(props) {

    const hooks = useContext(CartContext)
    const { cart, setCart, productid, setProductid, stock, setStock } = hooks
    console.log(cart)


    const [data, setData] = useState([])
    let { id } = useParams()

    function handleClick() {
        async function postToCart() {
            if (id > 7 || id < 0) {
                console.log('cant find it')
            }
            else {
                const res = await api.get(`products/${id}`)
                setCart([...cart, res.data])
            }
        }

        postToCart()
        setProductid(id)
    }

    async function getData() {
        if (id > 7 || id < 0) {
            console.log('cant find it')
        }
        else {
            const res = await api.get(`products/${id}`)
            console.log(res.data)
            setData(res.data)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Container>

            <Header />

            {id > 7 || id < 0 ? <>

                <ProductDetails style={{ display: "flex", flexDirection: 'column', padding: '20px 0 70px 0px', }}>
                    <h2 style={{ textAlign: 'center' }}>the product doesnt exist</h2>
                    <div style={{ width: '300px', height: '400px', margin: '0 auto' }}>
                        <img style={{ width: '100%', height: '100%', marginTop: '40px', display: 'block' }} src={animeGirl}></img>
                    </div>
                </ProductDetails>

            </> : <>
                    <ProductDetails>
                        <Description>
                            <span>About the {data.title}</span>
                            <p>{data.description}</p>

                            <Details>
                                <span>Fiber Content</span>
                                <p>{data.content}</p>
                            </Details>

                            <Details>
                                <span>Approx. Length</span>
                                <p>{data.length}</p>
                            </Details>

                            <Details>
                                <span>Diameter</span>
                                <p>{data.diameter}</p>
                            </Details>

                            <Details>
                                <span>Ply</span>
                                <p>{data.ply}</p>
                            </Details>

                            <Details>
                                <span>Dimensions</span>
                                <p>{data.dimension}</p>
                            </Details>

                            <Details>
                                <span>Weight</span>
                                <p>{data.weight}</p>
                            </Details>

                            <Details>
                                <span>Origin</span>
                                <p>{data.origin}</p>
                            </Details>

                            <Details>
                                <span>Recommended Skill Level</span>
                                <p>{data.commentlevel}</p>
                            </Details>


                        </Description>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image>
                                <img style={{ display: 'block', width: '100%', height: '100%', boxShadow: '-14px 16px 43px -14px rgba(0,0,0,0.67)' }} src={data.image}></img>
                            </Image>

                            <CartDetails>
                                <h1>{data.title}</h1>
                                <span>€ {data.price}</span>
                                <Link to='/cart'>
                                    <button onClick={handleClick}>Add to Cart</button>
                                </Link>
                            </CartDetails>
                        </div>


                    </ProductDetails>
                </>
            }

            <Footer />
        </Container >
    );
}

export default Product;