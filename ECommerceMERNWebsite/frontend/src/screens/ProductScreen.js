import React from "react";
import { useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ history,match }) => {
  const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productListDetails = useSelector((state) => state.productDetails)
    console.log(productListDetails);
    const { isLoading, error, product } = productListDetails;

  
    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    },[dispatch,match]);

    const addToCartHandler=()=>{
      history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

  return (
    <>
      <Link to="/" className="bt btn-light my-3">
        Go back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>{product.name}</h2>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price: {product.price}&#8377;</ListGroupItem>
              <ListGroupItem>Description: {product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <Row>
                    <Col>Price</Col>
                    <Col>{product.price}&#8377;</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroupItem>
                {product.countInStock>0 && 
                  <ListGroupItem>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control as='select' value={qty} onChange={(e)=>setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map((x)=>( 
                            <option key={x+1} value={x+1}>{x+1}</option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                }
                <ListGroupItem>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
