import React, {Component, useState} from "react";
import {Container, Row, Col, Nav, Navbar} from "react-bootstrap";
import "./Sponsors.css";
import sampleLogo from  '../../../images/sampleLogo.png';
import { motion } from "framer-motion";

const Sponsors = () => {
    const [col,setCol]=useState('linear-gradient(180deg, #373737 0%, #000000 100%)');
    const [logo,setLogo]=useState([<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>])
    function platinum(){
        setCol('linear-gradient(180deg, #373737 0%, #000000 100%)');
        setLogo([<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>])
    }
    function gold(){
        setCol('linear-gradient(180deg, #FDAD00 0%, #F77A0F 100%)');
        setLogo([<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>,<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>,<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>])
    }    
    function silver(){
        setCol('linear-gradient(180deg, #C4C4C4 0%, #515151 100%)');
        setLogo([<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>,<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>])
    }    
    function bronze(){
        setCol('linear-gradient(180deg, #AB8A49 0%, #735822 100%)')
        setLogo([<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>,<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>,<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>,<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>,<motion.img class="logo" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} src={sampleLogo}/>])
    }    
    function collab(){
        setCol('linear-gradient(180deg, #35A7FF 0%, #136DB3 100%)')
    }    
    return(
        
        <Container class="container" style={{background:col}}>
           
            <Row>
                <Col xs="12" style={{color:'white'}}>
                    <p class="sponsors-heading">Meet our Sponsors</p>
                </Col>
            </Row>
            
            <Row>
                <Col></Col>
                <Col xs={12} sm={2}><button className="btn tier" onClick={platinum}>PLATINUM</button></Col>
                <Col xs={12} sm={2}><button className="btn tier" onClick={gold}>GOLD</button></Col>
                <Col xs={12} sm={2}><button className="btn tier" onClick={silver}>SILVER</button></Col>
                <Col xs={12} sm={2}><button className="btn tier" onClick={bronze}>BRONZE</button></Col>
                <Col xs={12} sm={2}><button className="btn tier" onClick={collab}>COLLABORATORS</button></Col>     
                <Col></Col>
            </Row>
            <div class="sponsors-logo">
                {logo}
            </div>
            <br/>
           
        </Container>
    
    );
};
export default Sponsors;

// import React, {Component, useState} from "react";
// import {Container, Row, Col} from "react-bootstrap";
// import "./Sponsors.css";

// export class Sponsors extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             tabType:'platinum',
           
//         }
       
//     }
    
//     toggle=(value)=>{
//                 this.setState({
//                     tabType:value
//                 })
//             }
//     render(){
//         return(
//             <Container class="container">
//             <br/>
//             <Row>
//                 <Col xs="12">
//                     <h4>Meet our Sponsors</h4> 
//                 </Col>
//             </Row>
//             <br/>
//             <Row>
//                 <Col></Col>
//                 <Col><button className="btn" onClick={()=>this.toggle('platinum')}>PLATINUM</button></Col>
//                 <Col><button className="btn" onClick={()=>this.toggle('gold')}>GOLD</button></Col>
//                 <Col><button className="btn" onClick={()=>this.toggle('silver')}>SILVER</button></Col>
//                 <Col><button className="btn" onClick={()=>this.toggle('bronze')}>BRONZE</button></Col>
//                 <Col><button className="btn" onClick={()=>this.toggle('collab')}>COLLABORATORS</button></Col>     
//                 <Col></Col>
//             </Row>
//             <div>
//                 {
//                     this.state.tabType==='platinum' && <div>pl</div> 
//                 }
//                 {
//                     this.state.tabType==='gold' && <div>go</div>
//                 }
//                 {
//                     this.state.tabType==='silver' && <div>si</div>
//                 }
//                 {
//                     this.state.tabType==='bronze' && <div>br</div>
//                 }
//                 {
//                     this.state.tabType==='collab' && <div>i</div>
//                 }
                
//             </div>
           
//         </Container>
//         )
//     }
   
// };
// export default Sponsors;

