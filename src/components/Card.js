import React from "react";

function Card({ image, title, onClick }) {
  const handleImageError = (event) => {
    event.target.src = "https://via.placeholder.com/300x450?text=Image+Not+Found";
  };

  return (
    <div
      className="relative group border-2 border-transparent hover:border-white hover:opacity-75 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover"
        onError={handleImageError}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100">
          {title}
        </p>
      </div>
      <p className="mt-2 text-center font-bold">{title}</p>
    </div>
  );
}

export default Card;
