import React from 'react';
import "../../css/Header.css";
import {
Nav,
Navbar,
Container
} from 'react-bootstrap';
import { Link } from "react-router-dom";
import DropDown from './Dropdown';
import { GrFacebook, GrInstagram, GrTwitter,GrDown } from 'react-icons/gr';
class HeadBar extends React.Component{
  constructor(props) {
    super();
    this.state = {
      title: "JustTalk",
      bgcolor:false,
        }
  }

  render(){

 
return (
<>
      <Navbar collapseOnSelect fixed='top' expand="lg" className='headbar'>
      <Container fluid  className='justify-content-between'>

        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={this.props.icon}
            style={{height:25}}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Text><b className='light'>{this.props.title}</b></Navbar.Text>
        <Navbar.Toggle aria-controls="navbarScroll">
          <GrDown/>
        </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto">
                {this.props.headerLinks ?
                this.props.headerLinks.map(function(Link,i){
                    return(  
                      Link.drop ? 
                        <DropDown key={i} name={Link.title} list={Link.drop} />
                      :
                        <Nav.Link  key={i} href={Link.path}  className={({ isActive }) => (isActive ? "link-active" : "link")} activeStyle={{color:'orange'}} to={Link.path}>
                              {Link.title}
                        </Nav.Link>
                    )
                })
                :null}
                </Nav>


                {this.props.contacts ?
                <Nav className='justify-content-right'>
              <Nav.Link>
              <GrFacebook as={Link} to={"https://facebook.com/" + this.props.contacts.facebook}></GrFacebook>
              </Nav.Link>

              <Nav.Link>
              <GrTwitter as={Link} to={"https://twitter.com/" + this.props.contacts.twitter}></GrTwitter>
              </Nav.Link>

              <Nav.Link>
              <GrInstagram as={Link} to={"https://facebook.com/" + this.props.contacts.GrInstagram}></GrInstagram>
              </Nav.Link>
          </Nav>
          :null}


          {/* <Nav  className='justify-content-right'>
            <NavItem>
            <StoreButton />
            </NavItem>
          </Nav> */}
          </Navbar.Collapse>


        </Container>
      </Navbar>
    </>

);

  }

};

export default HeadBar;
