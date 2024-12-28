import React from "react";

interface Category {
  id: number;
  name: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, name: "Electronics", image: "https://i.pinimg.com/236x/15/20/b2/1520b25e509ef0c742551f7aa06a6356.jpg" },
  { id: 2, name: "Fashion", image: "https://i.pinimg.com/736x/fa/0c/65/fa0c65f4f5b6634e2b831c67660c900b.jpg" },
  { id: 3, name: "Home Appliances", image: "https://i.pinimg.com/236x/9f/5f/e3/9f5fe3e127b7001ba5867c00f286817e.jpg" },
  { id: 4, name: "Books", image: "https://i.pinimg.com/236x/51/5e/2b/515e2b34a3aafbd704384230328e664c.jpg" },
  { id: 5, name: "Beauty & Health", image: "https://i.pinimg.com/236x/2b/fc/29/2bfc29d683b67a7f4c233a2b8d3d4257.jpg" },
  { id: 6, name: "Sports & Outdoors", image: "https://i.pinimg.com/236x/6e/aa/48/6eaa48805969538ded9edd2b3f94153e.jpg" },
];

const CategoriesList: React.FC = () => {
  return (
    <section className="my-4 p-4 lg:p-0">
      <h2 className="text-2xl font-semibold text-center lg:hidden">Shop by Category</h2>

      {/* Small screens: Display categories with images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 lg:hidden">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-gray-200 rounded-lg p-2 sm:p-3"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 sm:h-36 object-cover rounded-t-lg" // Reduced height
            />
            <h3 className="text-center mt-2 text-sm sm:text-base font-medium">{category.name}</h3>
          </div>
        ))}
      </div>

      {/* Larger screens: Display categories horizontally as a list */}
      <div className="hidden lg:flex space-x-6 mt-6 justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="text-lg font-medium text-gray-700 hover:text-yellow-500"
          >
            {category.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;

