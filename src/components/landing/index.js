import React from "react";
import Image1 from "../../Assets/Images/Image1.png";
import Image2 from '../../Assets/Images/Image2.png';
import Image3 from '../../Assets/Images/Image3.png'
import Mascot from "../../Assets/Images/Mascot.png";
import "./index.css";
import Gallery from "react-photo-gallery";
import InfoButton from '../infoButton/infoButton'

const ImgDataSrc = [[
  {
    src: Image1,
    width: 30,
    height: 20,
    borderRadius: "30px",
    direction: "column",
  },
],
[
    {
    src: Image2,
    width: 30,
    height: 20,
    borderRadius: "30px",
    direction: "column",
  },
],
[
    {
    src: Image3,
    width: 30,
    height: 20,
    borderRadius: "30px",
    direction: "column",
  },
]
];
export default function landing() {
  return (
    <div className="container-1">
      <div class="box-1">
        <h3 class="title">BPA</h3>
        <p className="sub-title">Renaissance Highschool</p>
        <section style={{padding:'30px'}}>
        <p className='content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu felis. Quisque id diam vel quam elementum. Fringilla phasellus faucibus scelerisque eleifend. Sit amet purus gravida quis blandit turpis cursus. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Mattis vulputate enim nulla aliquet. Sed risus pretium quam vulputate dignissim suspendisse. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Ut porttitor leo a diam sollicitudin tempor id. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna </p>
        </section>
        <InfoButton/>
      </div>
      <div>
        <section>
          <img className="mascot-header" src={Mascot} />
        </section>
      </div>
      <div class="box-2">
        <section className="content-gallery">
          <Gallery photos={ImgDataSrc[0]} />
          <Gallery photos={ImgDataSrc[1]} />
          <Gallery photos={ImgDataSrc[2]} />
        </section>
      </div>
    </div>
  );
}
