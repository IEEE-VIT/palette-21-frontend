import React, {useState} from "react";
import './Flashback.css';
import FlashbackRightPic1 from '../../../images/flashback-right-pic1.png';
import FlashbackRightPic2 from '../../../images/flashback-right-pic2.png';
import FlashbackLeftPic1 from '../../../images/flashback-left-pic1.png';
import FlashbackLeftPic2 from '../../../images/flashback-left-pic2.png';
import FlashbackLeftPic3 from '../../../images/flashback-left-pic3.png';
import FlashbackLeftPic4 from '../../../images/flashback-left-pic4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Flashback = () => {
    const [moveRight,setMoveRight] = useState(0);
    return(
        <div id="Flashback__container" onScroll={(event)=>{
            setMoveRight(event.nativeEvent.srcElement.scrollTop);
        }}>
                <div id="Flashback__leftcontainer">
                    <h4 >These are few glimpses from our past editions of Palette</h4>
                    <p  >Palette ‘21 is the 4th edition of the prestigious design-a-thon conducted yearly by IEEE VIT. While the last three editions witnessed amazing graphic designs and web designs, this year it is a 48 hour long design hack based entirely on the concepts of UI & UX.</p>
                    <img src={FlashbackLeftPic1}/>
                    <img  src={FlashbackLeftPic2}/>
                    <img  src={FlashbackLeftPic3}/>
                    <img  src={FlashbackLeftPic4}/>
                </div>
                <div style={{ marginTop : moveRight}} id="Flashback__rightcontainerdesktop">
                    <Carousel infiniteLoop autoPlay interval={3000}>
                            <div>
                                <img src={FlashbackRightPic1} />
                           </div>
                            <div>
                                <img src={FlashbackRightPic2} />
                            </div>
                    </Carousel>
                </div>
                <div style={{ marginTop : moveRight}} id="Flashback__rightcontainermobile">
                    <Carousel infiniteLoop autoPlay interval={3000}>
                            <div>
                                <img src={FlashbackRightPic1} />
                           </div>
                            <div>
                                <img src={FlashbackRightPic2} />
                            </div>
                    </Carousel>
                </div>
                
        </div>
    );
  
};
export default Flashback;



