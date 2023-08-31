import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MerchScreen = () => {
    const [product, setProduct] = useState({});
    const {id:productId} = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/merch/${productId}`)
            setProduct(data);
        }
        fetchProduct();
    },[productId])
  return (
    <Container className="py-5">
        {
    Object.keys(product).length === 0 && product.constructor === Object ? null : (

        <Row>
            <Col sm={12} md={6} lg={4}>
                <Image src={product.image} fluid/>
                <Row className="mt-2 g-1">
                    <Col xs={3}>
                    <Image src={product.image} fluid/>
                    </Col>
                    <Col xs={3}>
                    <Image src={product.image} fluid/>
                    </Col>
                    <Col xs={3}>
                    <Image src={product.image} fluid/>
                    </Col>
                    <Col xs={3}>
                    <Image src={product.image} fluid/>
                    </Col>
                </Row>
            </Col>
            <Col sm={12} md={6} lg={8}>
                <div>
                    <h3 className="text-center">
                        {product.name}
                    </h3>
                    <div>
                        <h5 className="mt-3 mb-2">{product.options.name}:</h5>
                        <Row className="g-1">
                          { product.options.optionsNames.map(option => (
                          <Col xs="auto">
                            <Button size="sm" className="px-3">{option}</Button>
                          </Col>)
                          )}
                        </Row>
                        <h5 className="mt-3 mb-2">Description :</h5>
                        <p>{product.description}</p>
                        <h5 className="mt-3 mb-2">Price : ${product.price}</h5>
                        <p className="mt-3 mb-2">{product.countInStock > 0 ? `${product.countInStock} in stock`:"Out of stock"}</p>
                        <div className="text-center">
                        <Button size="md" disabled={product.countInStock == 0}>Add to Cart</Button>
                        </div>

                    </div>
                </div>
            </Col>
        </Row>

    )
                          }
</Container>
  )
}

export default MerchScreen
