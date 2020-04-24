import React, { useState } from 'react'
import { addNewMovie } from '../Action/action'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap';

function AddMovieModal(props) {
  const [newMovie, setNewMovie] = useState("")
  const [newImgMovie, setNewImgMovie] = useState("")
  const [newRateMovie, setNewRateMovie] = useState("")
  const [newDescriptionMovie, setNewDescriptionMovie] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const add = () => {
    props.addNewMovie({
      id: Date.now(),
      movieName: newMovie,
      img:newImgMovie,
      rating:newRateMovie,
      edit:false,
      description:newDescriptionMovie

    })
    setShow(false);
    setNewMovie('');
    setNewImgMovie('');
    setNewRateMovie('')
    setNewDescriptionMovie('')
    
  }
  return (
    <div className="blocAdd">
     
      <Button variant="primary"  onClick={ handleShow}>
        +
            </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <input className="form-control col-12" placeholder="Movie Name" type="text" onChange={(event) => setNewMovie(event.target.value)} />
          <br/>
           <input className="form-control col-12" type="text" placeholder="Image link" onChange={(event) => setNewImgMovie(event.target.value)} />
           <br/>
           <input className="form-control col-12" type="text" placeholder="Number of rate" onChange={(event) => setNewRateMovie(event.target.value)} />
            <br/>
           <textarea placeholder="Movie Description" className="form-control" onChange={(event) => setNewDescriptionMovie(event.target.value)} />
           
           </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>add()}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>



  );
}


export default connect(null, { addNewMovie })(AddMovieModal);
