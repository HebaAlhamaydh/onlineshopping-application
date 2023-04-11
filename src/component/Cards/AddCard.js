// import "./AddCard.css";

// import React, { useState, useRef, useEffect } from "react";
// import cookie from "react-cookies";
// import Modal from "react-bootstrap/Modal";
// import { useDispatch } from "react-redux";
// import { Button } from "react-bootstrap";
// import { addItem } from "../../../store/items";

import "bootstrap/dist/css/bootstrap.min.css";

// export default function AddItem() {
//   const dispatch = useDispatch();

//   const [show, setShow] = useState(false);
//   const [file, setFile] = useState("");
//   // const [myImage, setMyImage] = useState("");
//   const [image, setImage] = useState("");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const nameRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const priceRef = useRef(null);
//   const imageRef = useRef(null);

//   const handleSubmit = (event) => {
//     // event.preventDefault()
//     const sendData = {
//       name: nameRef.current.value,
//       description: descriptionRef.current.value,
//       price: priceRef.current.value,
//       // image: imageRef.current.value,
//       image: image,
     
//       userId: cookie.load("userID"),
//     };

//     dispatch(addItem(sendData));
//   };
//   function handleImageChange(event) {
//     const file = event.target.files[0];
//     setImage(file);
//   }
//   // useEffect(() => {
//   //   if (file) {
//   //     const formData = new FormData();
//   //     formData.append("file", file);
//   //     formData.append("upload_preset", "kpc5yviv");
//   //     axios
//   //       .post("https://api.cloudinary.com/v1_1/dminynjzy/image/upload", formData)
//   //       .then((response) => {
//   //         setMyImage(response.data.secure_url);
//   //       });
//   //     setFile("");
//   //     setMyImage("");
//   //   }
//   // }, [file]);
//   return (
//     <>
//       <div className="content-container">
//         <Button
//           variant="primary"
//           size="lg"
//           onClick={handleShow}
//           className="ms-4 mt-3 add-btn "
//         >
//           Add Deal
//         </Button>
//       </div>
//       <Modal show={show} className="add-service-pop-form">
//         <form
//           action=""
//           onSubmit={() => {
//             handleSubmit();
//             handleClose();
//           }}
//         >
//           <div className="wrapper">
//             <div className="title">Add New Item</div>

//             <div className="form">
//               <div className="inputfield">
//                 <label>Item Name:</label>
//                 <input
//                   type="text"
//                   className="input"
//                   placeholder="Enter name"
//                   maxLength={25}
//                   ref={nameRef}
//                   required
//                 />
//               </div>

//               <div className="inputfield">
//                 <label>Item Price</label>
//                 <input
//                   type="number"
//                   className="input"
//                   placeholder="Enter price"
//                   ref={priceRef}
//                   required
//                 />
//               </div>
//               <div className="inputfield">
//                 <label>Item Description</label>
//                 <textarea
//                   className="textarea"
//                   placeholder="Enter Description"
//                   maxLength={150}
//                   ref={descriptionRef}
//                   required
//                 />
//               </div>
//               <div className="add-image">
//                 <label className="add-image-title"> Image</label>
//                 {/* <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(event) => {
//                     setFile(event.target.files[0]);
//                   }}
//                 /> */}
//                 <input
//                   type="text"
//                   placeholder="http//" 
//                   ref={imageRef} 
//                 />
//                 {/* <input type="file" name="image" onChange={handleImageChange} /> */}
               
//               </div>
//               <br />
//               <div className="footer">
//                 <button
//                   type=""
//                   value="Close"
//                   className="btn-submit"
//                   onClick={handleClose}
//                 >
//                   Close
//                 </button>
//                 <input type="submit" value="Add Deal" className="btn-submit" />
//               </div>
//             </div>
//           </div>
//         </form>
//       </Modal>
//     </>
//   );
// }

import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import cookie from "react-cookies";
import { addItem } from "../../store/items";

export default function AddCard({ postData }) {

  const dispatch = useDispatch(); 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);

  const handleSubmit = () => {
    const sendData = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
      userId: cookie.load("userID"),
    };

   dispatch(addItem(sendData));
  };

  return (
    <>
      <Button
        variant="secondary"
        size="lg"
        onClick={handleShow}
        className="ms-4 mt-3"
      >
        Add New Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item Name"
                autoFocus
                ref={nameRef}
              />
            </Form.Group>
            {/* *****************  */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="ex 10$" ref={priceRef} />
            </Form.Group>
            {/* *****************  */}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Add Image</Form.Label>
              <Form.Control type="text" placeholder="http//" ref={imageRef} />
            </Form.Group>
            {/* *****************  */}

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Disription</Form.Label>
              <Form.Control as="textarea" rows={3} ref={descriptionRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleSubmit();
            }}
            className="btn-add"
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}