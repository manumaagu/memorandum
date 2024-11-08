import React, { useEffect, useState } from "react";
import data from "../data/sample.json";
import Card from "../components/Card";

function SeriesPage() {
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const filteredSeries = data.entries
        .filter(
          (entry) => entry.programType === "series" && entry.releaseYear >= 2010
        )
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 20);
      setSeries(filteredSeries);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, []);

  return (
    <div className="pt-6">
      {error && (
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Oops, something went wrong...</h2>
        </div>
      )}
      {loading ? (
        <div className="">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {series.map((movie, index) => (
            <Card
              key={index}
              image={movie.images["Poster Art"].url}
              title={movie.title}
              onClick={() => setSelectedSeries(movie)}
            />
          ))}
        </div>
      )}

      {selectedSeries && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-2">{selectedSeries.title}</h2>
            <img
              src={selectedSeries.images["Poster Art"].url}
              alt={selectedSeries.title}
              className=" h-64 mb-4 mx-auto"
              onError={(event) =>
                (event.target.src =
                  "https://via.placeholder.com/300x450?text=Image+Not+Found")
              }
            />
            <p className="mb-2">{selectedSeries.description}</p>
            <p className="mb-2">
              <strong>Release Year:</strong> {selectedSeries.releaseYear}
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4"
              onClick={() => setSelectedSeries(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeriesPage;
