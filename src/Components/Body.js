import React from "react";
import { connect } from "react-redux";
import { removeMovie, editMovie, saveMovie } from "../Action/action";
import { Button, Card } from "react-bootstrap";
import AddMovieModal from "./AddMovieModal";
import Stars from "./Stars";
import EditMovieModal from "./EditMovieModal";
import { Link } from "react-router-dom";

function Body(props) {
    
  return (
    <div className="container">
      <div className="row">

      
        {props.list
          .filter(
            (movie) =>
            movie.rating >= props.rate &&
              movie.movieName
                .toLowerCase()
                .includes(props.keyWord.toLowerCase()) 
                
          )
          .map((element) => (
            <Card key={element.id} className="col-md-3 card-block col-auto">
              <Card.Img variant="top" src={element.img} width="100%" />
              <Card.Body>
                <Card.Title>
                  {element.movieName}
                 
                  <Stars rate={element.rating}/>
                </Card.Title>
                <Link to={`/description/${element.id}`}>
                        <Button className="btn-dark" >Description</Button>
                </Link>
                
              </Card.Body>
              <Card.Footer>
                <EditMovieModal id={element.id} name={element.movieName} star={element.rating} />
                <Button
                  className="btn-danger"
                  onClick={() => props.removeMovie(element.id)}
                >
                  Remove
                </Button>
              </Card.Footer>
            </Card>
          ))}
     
      <AddMovieModal />
    </div>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  list: state.moviesList,
  keyWord: state.keyWord,
  rate: state.rate,
});

export default connect(mapStatetoProps, { removeMovie, editMovie, saveMovie })(
  Body
);
