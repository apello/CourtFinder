import { Link } from "react-router-dom";
import courtPicture from "../photos/Court3.jpg";
import { useEffect, useState } from "react";
import { getListings } from "../common/utils";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true); // Start loading
        const response = await getListings();
        if (response && response.data) {
          setListings(response.data);
        } else {
          throw new Error("No data found");
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching listings");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchListings();
  }, []);


  return (
    <div>
      {loading ? (
        <p>Loading listings...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Search listings..."
              style={{
                border: "1px solid #ddd",
                width: "300px",
              }}
            />
  
            <select style={{ border: "1px solid #ddd" }}>
              <option value="">Filter by Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>

            <input type="submit" />

            <p style={{ marginLeft: "10px" }}>
              {listings.length} {listings.length === 1 ? "listing" : "listings"} found
            </p>
          </div>

          <main
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: 10,
              gap: 20,
            }}
          >
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="box"
                style={{
                  width: "300px",
                  overflow: "hidden", // Ensures the content doesn't overflow the border radius
                  border: "1px solid #ddd",
                }}
              >
                <div
                  id="box-image"
                  style={{
                    height: "200px",
                    width: "100%",
                    overflow: "hidden", // Keeps the image within the box
                  }}
                >
                  <Link
                    to={`/listings/${listing.id}`}>
                    <img
                      src={courtPicture}
                      alt={listing.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover", // Ensures image fills the box without stretching
                      }}
                    />
                  </Link>
                </div>
                <div
                  id="box-content"
                  style={{
                    padding: "5px",
                    boxSizing: "border-box",
                  }}
                >
                  <div>
                    <p
                      id="title"
                      style={{
                        fontWeight: "bold", // Bold title
                        fontSize: "1.2rem",
                      }}
                    >
                      {listing.title}
                    </p>
                    <p id="description">
                      {listing.description}
                    </p>
                    <p id="price">
                      <strong>${listing.price_per_hour}</strong>/hr
                    </p>
                  </div>
                
                  <Link
                    to={`/listings/${listing.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#0077b6", // Sets link color
                      fontWeight: "bold",
                    }}
                  >
                    View more details
                  </Link>
                </div>
              </div>
            ))}
          </main>
        </>
      )}
    </div>  
  );
};

export default Listings;
