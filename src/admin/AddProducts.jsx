import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row, Spinner } from "reactstrap";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

//
function AddProducts(props) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterImg, setEnterImg] = useState(null);
  const [enterPrice, setEnterPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Add product to database
    try {
      const docRef = collection(db, "products");
      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterImg);

      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          toast.error("Images not uploaded");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
          setLoading(false);

          // Clear input field
          setEnterTitle("");
          setEnterCategory("");
          setEnterDescription("");
          setEnterImg(null);
          setEnterPrice("");
          setEnterShortDesc("");
          toast.success("Product added successfully");
        }
      );
    } catch (err) {
      setLoading(false);
      toast.error("Product not added");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {loading ? (
              <Col lg="12" className="text-center">
                <Spinner>Loading...</Spinner>
              </Col>
            ) : (
              <>
                <h4>Add products</h4>
                <Form>
                  <FormGroup className="form__group">
                    <span>Product title</span>
                    <input
                      required
                      onChange={(e) => setEnterTitle(e.target.value)}
                      value={enterTitle}
                      type="text"
                      placeholder="Double sofa"
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <span>Short Description</span>
                    <input
                      required
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      type="text"
                      placeholder="lorem..."
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <span>Description</span>
                    <input
                      required
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      type="text"
                      placeholder="lorem..."
                    />
                  </FormGroup>

                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form__group w-50">
                      <span>Price</span>
                      <input
                        required
                        onChange={(e) => setEnterPrice(e.target.value)}
                        value={enterPrice}
                        type="number"
                        placeholder="$100"
                      />
                    </FormGroup>

                    <FormGroup className="form__group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2 mb-3"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                      >
                        <option value="chair">Chair</option>
                        <option value="sofa">Sofa</option>
                        <option value="mobile">Mobile</option>
                        <option value="watch">Watch</option>
                        <option value="wireless">Wireless</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div>
                    <FormGroup className="form__group">
                      <span>Product Image</span>
                      <input
                        required
                        onChange={(e) => setEnterImg(e.target.files[0])}
                        type="file"
                      />
                    </FormGroup>
                  </div>

                  <button
                    className="primary__btn buy__btn mt-2"
                    onClick={addProduct}
                  >
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default AddProducts;
