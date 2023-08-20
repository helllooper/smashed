import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from "../merch.js";
import {Link} from "react-router-dom"
const TopMerch = () => {
  return (
    <div className="bg2 py-5">
        <div className="text-center">
            <h3 className="mb-2">Top Merch</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Felis ornare curabitur lacus nibh. Maecenas egestas eu dolor ut  .</p>
        </div>
        <Row className="pt-5">
            {products.map((product) => (
                <Col sm={12} md={6} lg={4}>
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="my-2">{product.countInStock} in stock</Card.Subtitle>
                        <Card.Text>
                        Price : {product.price}
                        </Card.Text>
                        <div className="d-flex">
                        <Link className="btn btn-primary" to = {`/merch/${product._id}`}>Learn More</Link>
                        <Button className="mx-2 flex-fill" variant="primary">Add to Cart</Button>
                        </div>

                    </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default TopMerch
