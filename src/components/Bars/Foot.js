import React from "react";
import {
Container
} from 'react-bootstrap';
import "../../css/Header.css";

class Foot extends React.Component{
  render(){

 
  return (
    <>
      <div className={this.props.bg + " footer-copyright text-center py-3"}>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> {this.props.name} </a>
        </Container>
      </div>
    </>
  );
            }
}

export default Foot;