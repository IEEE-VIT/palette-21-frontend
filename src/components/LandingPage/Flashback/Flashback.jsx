import React, {useState} from "react";
import './Flashback.css';
import FlashbackRight from '../../../images/flashback-right-pic1.png';
import FlashbackLeftPic1 from '../../../images/flashback-left-pic1.png';
import FlashbackLeftPic2 from '../../../images/flashback-left-pic2.png';

const Flashback = () => {
    const [moveRight,setMoveRight] = useState(0);
    return(
        <div id="Flashback__container" onScroll={(event)=>{
            setMoveRight(event.nativeEvent.srcElement.scrollTop);
        }}>
                <div id="Flashback__leftcontainer">
                    <h4 >These are few glimpses from our past editions of Palette</h4>
                    <p  >Palette ‘21 is the 4th edition of the prestigious design-a-thon conducted yearly by IEEE VIT. While the last three editions witnessed amazing graphic designs and web designs, this year it is a 48 hour long design hack based entirely on the concepts of UI & UX.</p>
                    <img className="is-inview"  data-scroll src={FlashbackLeftPic1}/>
                    <img id="elem1"  src={FlashbackLeftPic2}/>
                </div>
                <div style={{ marginTop : moveRight}} id="Flashback__rightcontainerdesktop">
                    <img src={FlashbackRight}/>
                </div>
                <div id="Flashback__rightcontainermobile">
                    <img src={FlashbackRight}/>
                </div>
        </div>
    );
  
};
export default Flashback;



