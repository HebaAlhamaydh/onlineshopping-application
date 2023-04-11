import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { useDispatch, useSelector } from "react-redux";
import { getOneItem } from "../../store/items";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useEffect } from "react";

import "./CardsDetails.css";
import { addCart } from "../../store/cart";
import Comments from "./comments/Comments";
import cookie from "react-cookies";

export default function CardDetails(props) {
  const { isLoading, oneItem } = useSelector((state) => state.itemsSlice);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneItem(id));
  }, [dispatch, id]);

  const handleAddToCard = (id) => {
    const sendData = {
      addToCart: true,
      amount: 0,
      userId: cookie.load("userID"),
      itemId: id,
    };
    dispatch(addCart(sendData));
  };

  return !isLoading ? (
    <div className="container-card-details">
      <div className="card-details">
        <Card
          style={{ width: "100rem" }}
          key={oneItem.id}
          className="card-item-details col"
        > <Link to={`/`}>
          <Card.Img
            variant="top"
            style={{  width:"25rem",height:"25rem" }}
            src={
              oneItem.image
                ? oneItem.image
                : "https://cdn.pixabay.com/photo/2015/06/10/16/36/mark-804938_640.jpg"
            }
          />
          </Link>
          <Card.Body className="body-text-card">
            <Card.Title className="title-text">{oneItem.name}</Card.Title>
            <Card.Text className="price-text">${oneItem.price}</Card.Text>
            <Card.Text className="text-dis">{oneItem.description}</Card.Text>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCard(oneItem.id)}
            >
              Add To Cart
            </button>
          </Card.Body>
        </Card>
      </div>
      <Comments itemId={oneItem.id} />
    </div>
  ) : (
    <CircularProgress />
  );
}