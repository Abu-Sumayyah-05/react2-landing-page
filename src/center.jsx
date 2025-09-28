import React from "react";
import Group3 from './Group 44 (1).png';
import Group4 from './Rectangle 10.png';
import Group5 from './Rectangle 10.1.png';
import Group6 from './Rectangle 10.2 (1).png'


export default function Center() {
    return (
        <>
        <main>
  <div className="Add">
    <h2 className="king">Samurai King Resting</h2>
    <a href="" className="add_to">
      Add to cart
    </a>
  </div>
  <img src={Group3} alt="" className="main_image" />
  <div className="about">
    <div className="word">
      <h3>About the Samurai King Resting</h3>
      <p>
        So how did the classical Latin become so incoherent? According to
        McClintock, a 15th century typesetter likely scrambled part of Cicero's
        De Finibus in order to provide placeholder text to mockup various fonts
        for a type specimen book. So how did the classical Latin become so
        incoherent? According to McClintock, a 15th century typesetter likely
        scrambled part of Cicero's De Finibus in order to provide placeholder
        text to mockup various fonts for a type specimen book. So how did the
        classical Latin become so incoherent? According to McClintock, a 15th
        century typesetter likely scrambled part of Cicero's De Finibus in order
        to provide placeholder text to mockup various fonts for a type specimen
        book.
      </p>
    </div>
    <div className="images">
      <h3>People also buy</h3>
      <div className="set">
        <img src={Group4} alt="" />
        <img src={Group5} alt="" />
        <img src={Group6} alt="" />
      </div>
      <div className="details">
        <h3>Details</h3>
        <p className="one">Size: 1020 x 1020 pixels</p>
        <p className="two">size 15 mb</p>
      </div>
    </div>
  </div>
  <hr id="second_line" />
</main>
</>
    )
}