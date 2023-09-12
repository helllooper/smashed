import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import axios from "axios";
const ProductScreen = () => {
  const [product, setProduct] = useState({

  })
    const {id:productId} = useParams();
    useEffect(() => {
      const fetchProduct = async() => {
        const {data} = await axios.get(`/api/products/${productId}`);
        console.log(data);
        setProduct(data);
      }
      fetchProduct();
      console.log(product);
    },[productId]);
  return (
    <Container className="py-5">
        <Row>
            <Col sm={12} md={6} lg={4}>
                <Image src={product.mainImage} fluid/>
            </Col>
            <Col sm={12} md={6} lg={8}>
                <div>
                    <h3 className="text-center">
                        {product.name}
                    </h3>
                    <div>
                        <h5 className="mt-3 mb-2">Flavors :</h5>
                        <Row className="g-1">
                          {console.log(product.flavors)}
                          {product.flavors && product.flavors.map(flavor => (
                          <Col xs="auto">
                            <Button size="sm" className="px-3">{flavor.name}</Button>
                          </Col>)
                          )}
                        </Row>
                        <h5 className="mt-3 mb-2">Description :</h5>
                        <p>{product.description}</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductScreen
