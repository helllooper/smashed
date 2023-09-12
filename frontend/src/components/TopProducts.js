import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

const TopProducts = () => {
  const [products,setProducts] = useState([]);
  useEffect(() => {
   const fetchProducts = async () => {
    const {data} = await axios.get("/api/products");
    setProducts (data);
   }

   fetchProducts();
  },[])
  return (
    <div className="bg2 py-5">
        <div className="text-center">
            <h3 className="mb-2">Top Products</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Felis ornare curabitur lacus nibh. Maecenas egestas eu dolor ut  .</p>
        </div>
        <Row className="pt-5">
            {products.map((product) => (
                <Col sm={12} md={6} lg={4}>
                  <Card>
                    <Card.Img variant="top" src={product.mainImage} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="my-2">{product.category}</Card.Subtitle>
                        <Card.Text>
                        Price : {product.price}
                        </Card.Text>
                        {/* <Button variant="primary">Learn more</Button> */}
                        <Link className="btn btn-primary" to = {`/product/${product._id}`}>Learn More</Link>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default TopProducts
