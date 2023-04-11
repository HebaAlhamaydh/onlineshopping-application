import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getFav, removeFavorite } from "../../store/favorite";
import { getAllItems } from "../../store/items";
import cookie from "react-cookies";
import "./AddToFav.css";
import { Link } from "react-router-dom";

export default function AddToFav(props) {
  const { favoriteList } = useSelector((state) => state.favoriteSlice);
  const { allItems } = useSelector((state) => state.itemsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFav());
    dispatch(getAllItems());
  }, [dispatch]);

  // Remove item from favorite list
  const handleRemove = (ele) => {
    dispatch(removeFavorite(ele.id));
  };

  return (
    <>
      <h2 className="page-title">Favorite List</h2>

      {favoriteList.length > 0 ? (
        <>
          {favoriteList
            .filter((ele) => ele.userId=== parseInt(cookie.load("userID")))
            .map((ele) =>
            allItems
                .filter((item) => item.id === ele.itemId)
                .map((item) => (
                  <div className="container-fav" key={item.id}>
                    <Card
                      style={{ width: "16rem" }}
                      key={item.id}
                      className="my-4 ms-4"
                    >  
                      <Link to={`/card/${item.id}`}>
                        <Card.Img variant="top" src={item.image} className="card_img"/>
                      </Link>
                     
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Button
                          variant="danger"
                          onClick={() => handleRemove(ele)}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                ))
            )}
        </>
      ) : (
        <p className="empty">THE FAVORITE LIST IS EMPTY</p>
      )}
    </>
  );
}