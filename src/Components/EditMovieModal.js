import React, { useState } from "react";
import { editMovie, saveMovie } from "../Action/action";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

function EditMovieModal(props) {
  const [editNewMovie, setEditNewMovie] = useState("");
  const [editNewRate, setEditNewRate] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const edit = (id) => {
    props.editMovie(id);
    handleShow();
  };
  const save = (id, update) => {
    props.saveMovie(id, update);
    setEditNewMovie("");
    setEditNewRate('');
    handleClose();
  };
  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          edit(props.id);
        }}
      >
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Movie content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control col-6"
            type="text"
            Value={props.name}
            onChange={(event) => setEditNewMovie(event.target.value)}
          />
          <br />
          <input
            type="text"
           Value={props.star}
            className="form-control col-6"
            onChange={(event) => setEditNewRate(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => save({ id: props.id, movieName: editNewMovie, rating:editNewRate })}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default connect(null, { editMovie, saveMovie })(EditMovieModal);
