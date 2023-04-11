import React from 'react'
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAllItems ,getMyItems,deleteOneItem } from "../../store/items";

import "./MyItems.css";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

export default function MyItems() {
   
  const { allItems,myItems } = useSelector((state) => state.itemsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyItems());
    // dispatch(getAllItems());
  }, [dispatch]);
  // Remove item from favorite list
  const handleRemove = (ele) => {
    dispatch(deleteOneItem(ele.id));
  };
  return (
   <>

      <h2 className="page-title">My Item List</h2>

      {myItems.length > 0 ? (
        <>
          {myItems.map((item) => (
                  <div className="container-fav" key={item.id}>
                    <Card
                      style={{ width: "16rem" }}
                      key={item.id}
                      className="my-4 ms-4"
                    >
                        <Card.Img variant="top" src={item.image} className="card_img"/>
                    
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Button
                          variant="danger"
                          onClick={() => handleRemove(item)}
                        >
                          Remove
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
        </>
      ) : (
        <p className="empty">MY ITEM LIST IS EMPTY</p>
      )}
</>
  )
}



