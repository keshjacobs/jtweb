import React from 'react';
import {
Container,
Row,
Col
} from 'react-bootstrap';
import "../../css/Brief.css";
import "../../css/Custom.scss";
import List from '../Items/List';

class Brief extends React.Component {
    render(){
        const bg={
            backgroundImage:`url(${this.props.image}`,
            backgroundSize:'cover',
            backgroundPosition:'left',
            backgroundRepeat:'no-repeat'
        }
         const small_bg={
            backgroundImage:`url(${this.props.image}`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            height:"600px",
            position:"relative"
        }
return (
   
<div className='back'>
<div className='brief' style={this.props.full ? bg:null}>
        <Row className={this.props.align}>
            <Col  xs={12} sm={12} md={{span:6,order: this.props.set }} className={this.props.dark ? 'bg-red  padding':'bg-light  padding'}>
                    <br/>
                    <br/>
                    <br/>
                <br/><br/>
                <div className='case'>
                    {
                        this.props.data.title ?
                        <h1 style={{maxWidth:500,float:"right"}}>{this.props.data.title}</h1>:null
                    }
                    <br/>
                    <p style={{maxWidth:400,float:"right"}} className={(this.props.dark ? 'light':'dark') + ''}>
                    {this.props.data.body}
                    </p>
                    {
                    this.props.list ? <List items={this.props.list}/>:null
                    }
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {
                    this.props.button ? this.props.button:null
                    }
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}  className={this.props.dark ? 'bg-red  padding':'bg-light  padding'}>
                    <div style={this.props.full ? null:small_bg}></div>
            </Col>
        </Row>  
</div>
</div>
);
            }

};

export default Brief;
