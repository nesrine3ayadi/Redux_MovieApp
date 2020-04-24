import React from "react";
import { connect } from "react-redux";
import Stars from "./Stars";

const Description = (props) => {
  return (
    <div className="container description">
      {props.list.map(
        (movie) =>
          movie.id === Number(props.match.params.id) && (
            <div key={movie.id} className="row">
              <div className="col-md-5">
                <img src={movie.img} alt={movie.movieName} width="100%" />
              </div>
              <div className="col-md-7">
                <h3>{movie.movieName}</h3>
                <Stars rate={movie.rating}/>
                 <p>{movie.description} </p>
              </div>
            </div>
          )
      )}
    </div>
  );
};
const mapStatetpProps = (state) => ({
  list: state.moviesList,
});

export default connect(mapStatetpProps)(Description);
