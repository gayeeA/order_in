// File: C:\Users\HP\OneDrive\Desktop\Restuarent_Web_Appliaction\order_in\src\components\login\MenuPage.jsx

import React from "react";

import "./MenuPage.css";

// Base64 data for the item images (placeholders for real data)

const imageBase64 = {
  biryani: "data:image/jpeg;base64,...(biryani_image_data_here)...",

  chickenBurger:
    "data:image/jpeg;base64,...(chicken_burger_image_data_here)...",

  vegFriedRice: "data:image/jpeg;base64,...(veg_fried_rice_image_data_here)...",

  chickenManchuria:
    "data:image/jpeg;base64,...(chicken_manchuria_image_data_here)...",

  gobiManchuria:
    "data:image/jpeg;base64,...(gobi_manchuria_image_data_here)...",

  redVelvetCake:
    "data:image/jpeg;base64,...(red_velvet_cake_image_data_here)...",

  splDumBiryani:
    "data:image/jpeg;base64,...(spl_dum_biryani_image_data_here)...",

  gobiRice: "data:image/jpeg;base64,...(gobi_rice_image_data_here)...",

  chocolateDessert:
    "data:image/jpeg;base64,...(chocolate_dessert_image_data_here)...",
};

const menuItems = [
  {
    category: "Rice",
    name: "Biryani",
    image: imageBase64.biryani,
    price: "$250",
    promotions: true,
    availability: "Yes",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Sandwich",
    name: "Chicken Burger",
    image: imageBase64.chickenBurger,
    price: "$100",
    promotions: true,
    availability: "Yes",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Rice",
    name: "Veg Fried Rice",
    image: imageBase64.vegFriedRice,
    price: "$80",
    promotions: true,
    availability: "Yes",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Starters",
    name: "Chicken Manchuria",
    image: imageBase64.chickenManchuria,
    price: "$120",
    promotions: true,
    availability: "Yes",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Starters",
    name: "Gobi Manchuria",
    image: imageBase64.gobiManchuria,
    price: "$100",
    promotions: true,
    availability: "Yes",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Beverages",
    name: "Redvelvet Cake 1pc",
    image: imageBase64.redVelvetCake,
    price: "$70",
    promotions: true,
    availability: "Yes",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Rice",
    name: "Spl Dum Biryani",
    image: imageBase64.splDumBiryani,
    price: "$300",
    promotions: true,
    availability: "Yes",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Rice",
    name: "Gobi Rice",
    image: imageBase64.gobiRice,
    price: "$80",
    promotions: false,
    availability: "No",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Beverages",
    name: "Chocolate Dessert",
    image: imageBase64.chocolateDessert,
    price: "$99",
    promotions: false,
    availability: "No",
    description: "Masala Biryani with boiled egg",
    videos: "abc.mp4",
  },

  {
    category: "Rice",
    name: "Chicken Biryani",
    image: imageBase64.biryani,
    price: "$260",
    promotions: true,
    availability: "Yes",
    description: "Spicy chicken biryani",
    videos: "abc.mp4",
  },

  {
    category: "Starters",
    name: "Paneer Tikka",
    image: imageBase64.gobiManchuria,
    price: "$150",
    promotions: false,
    availability: "Yes",
    description: "Grilled paneer with spices",
    videos: "abc.mp4",
  },

  {
    category: "Dessert",
    name: "Gulab Jamun",
    image: imageBase64.chocolateDessert,
    price: "$50",
    promotions: true,
    availability: "Yes",
    description: "Sweet milk solids balls",
    videos: "abc.mp4",
  },

  {
    category: "Rice",
    name: "Chicken Biryani 2",
    image: imageBase64.biryani,
    price: "$260",
    promotions: true,
    availability: "Yes",
    description: "Spicy chicken biryani",
    videos: "abc.mp4",
  },

  {
    category: "Starters",
    name: "Paneer Tikka 2",
    image: imageBase64.gobiManchuria,
    price: "$150",
    promotions: false,
    availability: "Yes",
    description: "Grilled paneer with spices",
    videos: "abc.mp4",
  },

  {
    category: "Dessert",
    name: "Gulab Jamun 2",
    image: imageBase64.chocolateDessert,
    price: "$50",
    promotions: true,
    availability: "Yes",
    description: "Sweet milk solids balls",
    videos: "abc.mp4",
  },
];

const MenuPage = () => {
  return (
    <div className="menu-management-container">
       {/* --- TOP HEADER ROW: Back Button and Title --- */}

      <div className="menu-header-bar header-top-row">

        <button className="btn-back">Back</button>

        <h1 className="h1-page-title">Menu Management</h1>

        {/* Placeholder for alignment, will be hidden or styled to maintain space */}

        <div className="header-actions-placeholder"></div>

      </div>



        {/* --- SECOND HEADER ROW: Category Button and Action Buttons --- */}

      <div className="menu-header-bar header-bottom-row">

            {/* Category Control */}

          <div className="menu-controls">

            <button className="btn-category-active">Category</button>

          </div>



            {/* Action Buttons */}

          <div className="header-actions">

            <button className="btn-primary">EDIT</button>

            <button className="btn-primary">ADD</button>

            <button className="btn-primary">Create Promotions</button>

          </div>

      </div>

      <div className="menu-content-area">
        <div className="menu-table-wrapper">
          <div className="table-scroll-container">
            <table className="menu-table">
              <thead>
                <tr>
                  <th>
                    Category <span className="filter-icon"></span>
                  </th>

                  <th>Name</th>

                  <th>Item Image</th>

                  <th>Price</th>

                  <th>Promotions</th>

                  <th>Availability</th>

                  <th>Description</th>

                  <th>Videos</th>
                </tr>
              </thead>

              <tbody>
                {menuItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>

                    <td>{item.name}</td>

                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-img"
                      />
                    </td>

                    <td>{item.price}</td>

                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          defaultChecked={item.promotions}
                        />

                        <span className="slider round"></span>
                      </label>
                    </td>

                    <td>{item.availability}</td>

                    <td>{item.description}</td>

                    <td>{item.videos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
