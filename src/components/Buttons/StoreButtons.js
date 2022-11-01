import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrAppleAppStore, GrGooglePlay} from "react-icons/gr";
import json from "../../Config";


class StoreButton extends React.Component{
  constructor(props) {
    super();
  this.state = json;

  }

  render(){

return (
            <>
            <Button variant="dark" size='lg' as={Link} target="_blank" to={this.state.appstore}>
                <GrAppleAppStore/> Download on AppStore
            </Button>
            &nbsp;&nbsp;
            <Button variant="teal" size='lg' as={Link} target="_blank" to={this.state.playstore}>
                <GrGooglePlay/> Download on PlayStore
            </Button>
            </>

);

  }

};

export default StoreButton;
