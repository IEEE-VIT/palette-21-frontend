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
      <ResourceComponent bgimg={img1} title="Design Principles" />
      <ResourceComponent bgimg={img2} title="Assets" />
      <ResourceComponent bgimg={img3} title="UI/UX Basics" />
      <ResourceComponent bgimg={img4} title="Branding and Pitch" />
    </div>
  );
}
