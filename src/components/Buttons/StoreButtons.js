import React from 'react';
import "../../css/Buttons.css";
import {
Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrAppleAppStore, GrGooglePlay} from "react-icons/gr";


class StoreButton extends React.Component{
  constructor(props) {
    super();
    this.state = {
        }
  }

  render(){

return (
            <>
            <Button variant="dark" size='lg' as={Link} target="_blank" to="/appstore">
                <GrAppleAppStore/> Download on AppStore
            </Button>
            &nbsp;&nbsp;
            <Button variant="teal" size='lg' as={Link} target="_blank" to="/playstore">
                <GrGooglePlay/> Download on PlayStore
            </Button>
            </>

);

  }

};

export default StoreButton;
