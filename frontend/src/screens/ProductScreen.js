import {useParams} from "react-router-dom"
import products from "../products"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
const ProductScreen = () => {
    const {id:productId} = useParams();
    const product = products.find((p) => p._id === productId )
    console.log(product)
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
                          {product.flavors.map(flavor => (
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
