import { Link } from "react-router-dom";
import courtPicture from "../photos/Court1.jpg";
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
          <main
            style={{
              display: "flex",
              flexWrap: "wrap",
              padding: 10,
              gap: 2,
            }}
          >
            {listings.map((listing, index) => (
              <div
                key={listing.id}
                className="box"
                style={{
                  border: "1px solid black",
                  width: "300px",
                }}
              >
                <div
                  id="box-image"
                  style={{
                    borderBottom: "1px solid black",
                    height: "150px",
                    width: "100%",
                  }}
                >
                  <img
                    src={courtPicture}
                    alt={listing.title}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div
                  id="box-content"
                  style={{
                    padding: "5px",
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <p id="title">{listing.title} -&nbsp;</p>
                    <p id="price">${listing.price_per_hour}</p>
                  </div>
                  <p id="description">{listing.description}</p>
                  <Link to={`/listings/${listing.id}`}>View more details</Link>
                </div>
              </div>
            ))}
          </main>
          <p>{listings.length} {listings.length === 1 ? "listing" : "listings"} found</p>
        </>
      )}
      {!loading && !listings.length && !error && <p>No listings found.</p>}
    </div>
  );
};

export default Listings;
