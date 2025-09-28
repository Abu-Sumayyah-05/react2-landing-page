import React, {useState} from 'react';
import Group7 from './Group 49.png';
import Group8 from './Group 51.png';
import Group9 from './Group 52.png';

 export default function Footer() {
  const [selectedPrices, setSelectedPrices] = useState([]);

  // Handle price selection
  const handlePriceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedPrices([...selectedPrices, value]);
    } else {
      setSelectedPrices(selectedPrices.filter(price => price !== value));
    }
  };
    return(
        <>
        <footer>
  <div className="sort">
    <span className="photo">
      <h3>Photography /</h3> <h4>Premium Photos</h4>
    </span>
    <span className="sort_by">
      <p>Sort By</p> <p>Price</p>
    </span>
  </div>
  <div className="category">
    <div className="check">
      <h4>Category</h4>
      <form className="form">
        <label>
          <input type="checkbox" name="People" />
          <span>People</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="Premium" />
          <span>Premium</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="Pets" />
          <span>Pets</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="Food" />
          <span>Food</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="Landmarks" />
          <span>Landmarks</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="Cities" />
          <span>Cities</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="Nature" />
          <span>Nature</span>
        </label>
      </form>
      <hr className="third_line" />
      <h3>Price Range</h3>
      <form className="price">
        <label className="">
          <input type="checkbox" name="price" defaultValue="lt20" onClick={handlePriceChange}/>
          <span>Lower than $20</span>
        </label>
        <br />
        <label className="">
          <input type="checkbox" name="price" defaultValue="20-100" onClick={handlePriceChange} />
          <span>$20 - $100</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="price" defaultValue="100-200" onClick={handlePriceChange} />
          <span>$100 - $200</span>
        </label>
        <br />
        <label>
          <input type="checkbox" name="price" defaultValue="gt200" onClick={handlePriceChange} />
          <span>More than $200</span>
        </label>
      </form>
    </div>
    <div className="photos">
      <img src= {Group7}alt="" id="first_photo" />
      <img src= {Group8} alt="" id="second_photo" />
      <img src= {Group9} alt="" id="third_photo" />
    </div>
  </div>
</footer>
</>
    )
}