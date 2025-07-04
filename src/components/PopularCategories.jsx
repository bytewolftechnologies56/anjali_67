import React from 'react';

const categories = [
  {
    name: 'Solar Panels',
    image: 'https://e-startupindia.com/learn/wp-content/uploads/2021/09/GST-Rates-Hike-On-Solar-Equip-Projects.png'
  },
  {
    name: 'Inverters',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85gF0TzRJZcj5wnDvMQzibo4uRd3Uu7-vNA&s',
  },
  {
    name: 'Batteries',
    image: 'https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--08805c8d-56a4-4eb9-af58-ec26ae2909ac/ey-charging-the-batteries-of-the-elecric-motor.jpg?preferwebp=true&quality=85',
  },
  {
    name: 'Cables',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTro47Azz3tzf6aMP0hqLN2MB94b-vqPuyHtg&s',
  },
];

const PopularCategories = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center hover:shadow-lg transition">
            <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover rounded" />
            <p className="mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
