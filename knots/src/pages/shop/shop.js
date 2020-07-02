import React, { useEffect, useState } from 'react';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Container, Items, Card, Img, Title, Price } from './style';
import Api from '../../services/api';
import { Link } from 'react-router-dom';

function Shop(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        async function getData() {

            const res = await Api.get('products')
            console.log(res.data)
            setItems(res.data)
        }

        getData()
    }, [])


    return (
        <Container>
            <Header />

            <h1 style={{ marginTop: '10px' }}>Availables</h1>
            <Items>
                {items.map(a => (
                    <Link key={a.id} to={`product/${a.id}`}>
                        <Card>
                            <Img src={a.image}></Img>
                            <Title>{a.title}</Title>
                            <Price>£ {a.price}</Price>
                        </Card>
                    </Link>
                ))}
            </Items>
            <Footer />
        </Container>
    );
}

export default Shop;