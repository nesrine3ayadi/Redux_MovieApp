import React from 'react'
import { connect } from 'react-redux'
import { searchMovieByName } from '../Action/action'
import Stars from './Stars'
import { Jumbotron, Container } from 'react-bootstrap';

function header(props) {
    return (
        <Jumbotron fluid>
            <Container className='text-center'>
                <h1>Movie APP</h1>
                
                <input  className="form-control col-12" type="text"  placeholder="Search..." 
                onChange={(event)=>props.searchMovieByName(event.target.value)}
                />    
               <Stars rate={props.rate}/>
            </Container>
        </Jumbotron>
    )
}
const mapDispatchtoProps = (Dispatch)=>{
    return {
        searchMovieByName: (payload)=> Dispatch(searchMovieByName(payload))
    }
}
const mapStatetoProps = (state) =>({
        rate: state.rate
})
export default connect(mapStatetoProps, mapDispatchtoProps)(header)

