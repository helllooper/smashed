import { useState } from "react";
import { useParams , useNavigate} from "react-router-dom"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem, Form } from "react-bootstrap";
import { useGetMerchDetailsQuery } from "../slices/merchApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";


const MerchScreen = () => {
    const [qty, setQty] = useState(1);
    const {id:productId} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {data:product, isLoading, error } = useGetMerchDetailsQuery(productId)
    const addToCartHandler = () => {
        dispatch(addToCart({
            ...product, qty
        }))
        navigate("/cart")
    }
  return (
    <>
    {isLoading ? (
<Loader />
    ): error ? (
      <Message variant="danger">{error?.data?.message || error.error}</Message>
    ):(
<Container className="py-5">
        {
    Object.keys(product).length === 0 && product.constructor === Object ? null : (

        <Row>
            <Col sm={12}  lg={4}>
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
            <Col sm={12}  lg={5}>
                <div>
                    <h3 className="text-center">
                        {product.name}
                    </h3>
                    <div>
                        {product.options.isThere && <><h5 className="mt-3 mb-2">{product.options.title}:</h5>
                        <Row className="g-1">
                            
                          { product.options.optionsDetails.map(option => (
                          <Col xs="auto">
                           
                            <Button size="sm" className="px-3">{option.name}</Button>
                          </Col>)
                          )}
                        </Row></>}
                        <h5 className="mt-3 mb-2">Description :</h5>
                        <p>{product.description}</p>
                        <h5 className="mt-3 mb-2">Price : ${product.price}</h5>
                        

                    </div>
                </div>
            </Col>
            <Col sm={12}  lg={3}>
                <Card>
                <ListGroup>
                    <ListGroup.Item variant="flush">
                        <Row>
                            <Col>Price:</Col>
                            <Col><strong>${product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item variant="flush">
                        <Row>
                            <Col>Status:</Col>
                            <Col><strong>{product.countInStock > 0 ? "In Stock":"Out of Stock"}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                    {
                        product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col>Qty</Col>
                                    <Col>
                                      <Form.Control as="select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                        {[...Array(product.countInStock).keys()].map((x) => <option key={x + 1} value={x+1}>{x + 1}</option>)}
                                      </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    }
                    <ListGroupItem>
                        <Button className="btn-block" type="button" disabled={product.countInStock === 0} onClick={addToCartHandler}>
                         Add to Cart
                        </Button>
                    </ListGroupItem>
                </ListGroup>
                </Card>
            </Col>
        </Row>

    )
                          }
</Container>
    )}
    </>
    
    
  )
}

export default MerchScreen
