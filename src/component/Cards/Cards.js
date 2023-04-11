

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Alert, CircularProgress } from "@mui/material";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import "./Card.css";
import cookie from "react-cookies";
import { addFav } from "../../store/favorite";
import { getAllItems, addItem, deleteOneItem, updateItem} from "../../store/items";
import AddCard from './AddCard'
import DeleteCard from "./DeleteCard";
import UpdateCard from "./UpdateCard";
const userId= cookie.load("userID");

export default function Cards(props) {
  const { allItems, isLoading, error } = useSelector((state) => state.itemsSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch]);

  const postDatas = (data) => {
    dispatch(addItem(data));
  };

  const updatedata = (data) => {
    dispatch(updateItem(data));
  };
  
  // const deleteCards = (data) => {
  //   dispatch(deleteOneItem(data));
  // };

  // handle favorite page
  const handleAddToFav = (data) => {
    let sendData = {
      addToFiv: true,
      userId: cookie.load("userID"),
      itemId: data.id,
    };
    dispatch(addFav(sendData));
  };

  return !isLoading ? (
    <>
      {error && <Alert severity="error">{error}</Alert>}
      <AddCard postData={postDatas} />
      <div className="container-cards">
        <div className="cards">
          {allItems.map((ele, idx) => (
            <div className="product-card" key={ele.id}>
              <div className="badge">
                {ele.userId === parseInt(cookie.load("userID"))
                  ? "My Item"
                  : null}
              </div>
              <div className="product-tumb">
                <Link to={`/card/${ele.id}`}>
                  <img
                    alt="product"
                    src={ele.image ? ele.image
                        : "https://cdn.pixabay.com/photo/2015/06/10/16/36/mark-804938_640.jpg"
                    }
                  />
                </Link>
              </div>

              <div className="product-details">
                <h4>
                  <p className="title-card">{ele.name}</p>
                </h4>
                <p>{ele.description}</p>
                <div className="product-bottom-details">
                  <div className="product-price">
                    <small>$96.00</small>
                    ${ele.price}
                  </div>
                  <div className="product-links">
                    <div onClick={() => handleAddToFav(ele)}>
                   <i className="fa fa-heart" /> 
                    </div>
                    {ele.userId === parseInt(cookie.load("userID"))?
                    ( <>
                     <div>
                      <DeleteCard id={ele.id} />
                    </div>
                    <div>
                      <UpdateCard updatedata={updatedata} id={ele.id} />
                    </div>
                    </>
                      ):
                        null
                    }
                  </div>
                </div>
            
                  <a href={`/card/${ele.id}`}>More detail</a>
       
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <CircularProgress />
  );
}