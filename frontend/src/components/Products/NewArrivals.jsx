import React from "react";

const NewArrivals = () => {
  const newProducts = [
    {
      _id: 1,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://piscum.photos/500/500/random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 2,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://piscum.photos/500/500/random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 3,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://piscum.photos/500/500/random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 4,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://piscum.photos/500/500/random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 5,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://piscum.photos/500/500/random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 6,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://piscum.photos/500/500/random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 7,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://piscum.photos/500/500/random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="container relative mx-auto mt-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">Explore New Arrivals</h2>
        <p className="mb-8 text-lg text-gray-600">
          Discover our latest collection of stylish and trendy products.
        </p>
      </div>
    </section>
  );
};

export default NewArrivals;
