import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Listing = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams(); // listing id

  useEffect(() => {
    const getListing = async (id) => {
      try {
        setLoading(true);
        const response = await getListing(id);
        if (response && response.data) {
          setListing(response.data);
        } else {
          throw new Error("No data found");
        }
      } catch(err) {
        setError(err.message || "An error occurred while fetching listing.");
      } finally {
        setLoading(false);
      }
    };

    getListing(id);
  }, [id]);

  return (
    <div>
      <Link to="/listings"> Back </Link>
      {loading ? (
        <p>Loading listing...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
         
        </>
      )}
    </div>
  );
};

export default Listing;
