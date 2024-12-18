import { Link } from "react-router-dom";
import courtPicture from "../photos/Court1.jpg";
import { useEffect, useState } from "react";

const Listings = () => {
  // const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      
    }


    fetchListings();
  }, []);

  return (
    <container>
      <main style={{ 
        display: "flex", 
        flexWrap: "wrap",
        padding: 10, 
        gap: 2 
      }}>
        <div class="box" style={{ 
          border: "1px solid black", 
          width: "300px", 
        }}>
          <div id="box-image" style={{ 
            borderBottom: "1px solid black",
            height: "150px", 
            width: "100%"
          }}>
            <img src={courtPicture} alt="" style={{
              height: "100%",
              width: "100%"
            }} />
          </div>
          <div id="box-content" style={{
            padding: "5px",
            boxSizing: "border-box"
          }}>
            <div style={{ display: "flex" }}>
              <p id="title">Basketball Court 1 -&nbsp;</p> 
              <p id="price">$30.00</p>
            </div>
            <p id="description">Spacious basketball court available for booking. Ideal for practice or games.</p>
            <Link to="/">Go home</Link>
          </div>
        </div>
      </main>
    </container>
  );
}

export default Listings;
