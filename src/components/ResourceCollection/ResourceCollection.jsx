import React from "react";
import ResourceComponent from "../ResourceComponent/ResourceComponent";
import "./ResourceCollection.css";
import img1 from "../../assets/pattern1.png";
import img2 from "../../assets/pattern2.png";
import img3 from "../../assets/pattern3.png";
import img4 from "../../assets/pattern4.png";

export default function ResourceCollection() {
  return (
    <div id="ResourceCollection__container">
      <ResourceComponent
        bgimg={img1}
        title="Design Principles"
        url="https://www.notion.so/Design-Principles-9702b68c24b64faebb694ac71ff76a42"
      />
      <ResourceComponent
        bgimg={img2}
        title="Assets"
        url="https://www.notion.so/Assets-d9ec73e558ff4702b468fa9eafb8cecb"
      />
      <ResourceComponent
        bgimg={img3}
        title="UI/UX Basics"
        url="https://www.notion.so/UI-UX-Basics-48e32f45346848c1a9e9e280494d6d4e"
      />
      <ResourceComponent
        bgimg={img4}
        title="Branding and Pitch"
        url="https://www.notion.so/Branding-and-Pitch-012e9118c60646c097536b854051162c"
      />
    </div>
  );
}
