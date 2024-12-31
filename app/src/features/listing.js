import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getListing, formatTime } from "../common/utils";

import img from "../photos/Court3.jpg";

const Listing = () => {
  const [listing, setListing] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams(); // listing id

  useEffect(() => {
    const fetchListing = async (id) => {
      try {
        setLoading(true);
        const response = await getListing(id);
        if (response && response.data) {
          setListing(response.data[0]);
        } else {
          throw new Error("No data found");
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching listing.");
      } finally {
        setLoading(false);
      }
    };

    fetchListing(id);
  }, [id]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "0 auto" }}>
      <Link to="/" style={{ 
        textDecoration: "underline", 
        color: "#007bff", 
        fontSize: "14px",
        display: "inline-block"
      }}>
        &lt; Back 
      </Link>
      {loading ? (
        <p>Loading listing...</p>
      ) : error ? (
        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
      ) : (
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "15px" }}>{listing.title}</h1>
          {/* Banner Section */}
          <div style={{ marginBottom: "10px" }}>
            <img
              src={img}
              alt="Basketball Court"
              style={{ width: "100%", height: "500px", borderRadius: "8px" }}
            />
          </div>

          {/* Content Section */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
            {/* Court Details */}
            <div style={{ flex: "2" }}>
              <p style={{ color: "#555", marginBottom: "20px" }}>{listing.description}</p>
              <p>
                <strong>Price per hour:</strong> ${listing.price_per_hour}
              </p>
              <p>
                <strong>Available Days:</strong> {listing.available_days}
              </p>
              <p>
                <strong>Hours:</strong> {formatTime(listing.available_start_time)} -{" "}
                {formatTime(listing.available_end_time)}
              </p>
              {listing.show_address && (
                <p>
                  <strong>Address:</strong> {listing.street_address}, {listing.city}
                </p>
              )}
            </div>

            {/* Reservation Section */}
            <div style={{ flex: "1" }}>
              <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                <h5 style={{ fontSize: "18px", marginBottom: "10px" }}>Reserve Your Slot</h5>
                <h6 style={{ fontSize: "16px", color: "#777", marginBottom: "20px" }}>${listing.price_per_hour}/hour</h6>
                <form>
                  <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="checkDate" style={{ display: "block", marginBottom: "5px" }}>
                      Select Date
                    </label>
                    <input type="date" id="checkDate" style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }} />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="startTime" style={{ display: "block", marginBottom: "5px" }}>
                      Start Time
                    </label>
                    <select id="startTime" style={{ width: "100%", padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}>
                      <option>4:00 PM</option>
                      <option>4:30 PM</option>
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    style={{
                      width: "100%",
                      padding: "10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;