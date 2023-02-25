import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import useGetData from "../custom-hook/useGetData";
import { toast } from "react-toastify";
import { db } from "../firebase.config";

function Users(props) {
  const { data: usersData, loading } = useGetData("users");

  const deleleUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-3">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td>
                      <Col lg="12" className="text-center">
                        <Spinner>Loading...</Spinner>
                      </Col>
                    </td>
                  </tr>
                ) : (
                  usersData.map((user) => (
                    <tr key={user.uid}>
                      <td>
                        <img src={user.photoURL} alt="" />
                      </td>
                      <td>{user.displayName}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleleUser(user.uid)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Users;
