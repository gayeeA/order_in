

import React, { useState } from "react";

import "./MenuPage.css";
import CreatePopAdForm from './Promotions';
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
  const [showPromotionsForm, setShowPromotionsForm] = useState(false);
  const [menuItems, setMenuItems] = useState([
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
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editedItems, setEditedItems] = useState([]);

  const handleOpenPromotions = () => {
    setShowPromotionsForm(true);
  };

  const handleClosePromotions = () => {
    setShowPromotionsForm(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedItems([...menuItems]);
  };

  const handleAdd = () => {
    const newItem = {
      category: "",
      name: "",
      image: "",
      price: "",
      promotions: false,
      availability: "Yes",
      description: "",
      videos: "",
    };
    setMenuItems([newItem, ...menuItems]);
    setIsAdding(true);
    setIsEditing(true);
    setEditedItems([newItem, ...menuItems]);
  };

  const handleSave = () => {
    setMenuItems(editedItems);
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleCancel = () => {
    if (isAdding) {
      setMenuItems(menuItems.slice(1));
    }
    setIsEditing(false);
    setIsAdding(false);
    setEditedItems([]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...editedItems];
    updatedItems[index][field] = value;
    setEditedItems(updatedItems);
  };



  // Conditional rendering: If the form is open, render only the form

  if (showPromotionsForm) {

    return <CreatePopAdForm onClose={handleClosePromotions} />;

  }
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
            {isEditing ? (
              <>
                <button className="btn-primary" onClick={handleSave}>SAVE</button>
                <button className="btn-primary" onClick={handleCancel}>CANCEL</button>
              </>
            ) : (
              <>
                <button className="btn-primary" onClick={handleEdit}>EDIT</button>
                <button className="btn-primary" onClick={handleAdd}>ADD</button>
                <button className="btn-primary" onClick={handleOpenPromotions}>Create Promotions</button>
              </>
            )}
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
                {(isEditing ? editedItems : menuItems).map((item, index) => (
                  <tr key={index}>
                    <td>
                      {isEditing ? (
                        <textarea
                          value={item.category}
                          onChange={(e) => handleInputChange(index, 'category', e.target.value)}
                          rows="1"
                          style={{ width: '100%', border: 'none', background: 'transparent' }}
                        />
                      ) : (
                        item.category
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <textarea
                          value={item.name}
                          onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                          rows="1"
                          style={{ width: '100%', border: 'none', background: 'transparent' }}
                        />
                      ) : (
                        item.name
                      )}
                    </td>

                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="item-img"
                      />
                    </td>

                    <td>
                      {isEditing ? (
                        <textarea
                          value={item.price}
                          onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                          rows="1"
                          style={{ width: '100%', border: 'none', background: 'transparent' }}
                        />
                      ) : (
                        item.price
                      )}
                    </td>

                    <td>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={item.promotions}
                          onChange={(e) => {
                            const value = e.target.checked;
                            if (isEditing) {
                              handleInputChange(index, 'promotions', value);
                            } else {
                              const updatedItems = [...menuItems];
                              updatedItems[index].promotions = value;
                              setMenuItems(updatedItems);
                            }
                          }}
                        />

                        <span className="slider round"></span>
                      </label>
                    </td>

                    <td>
                      {isEditing ? (
                        <textarea
                          value={item.availability}
                          onChange={(e) => handleInputChange(index, 'availability', e.target.value)}
                          rows="1"
                          style={{ width: '100%', border: 'none', background: 'transparent' }}
                        />
                      ) : (
                        item.availability
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <textarea
                          value={item.description}
                          onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                          rows="3"
                          style={{ width: '100%', border: 'none', background: 'transparent' }}
                        />
                      ) : (
                        item.description
                      )}
                    </td>

                    <td>
                      {isEditing ? (
                        <textarea
                          value={item.videos}
                          onChange={(e) => handleInputChange(index, 'videos', e.target.value)}
                          rows="1"
                          style={{ width: '100%', border: 'none', background: 'transparent' }}
                        />
                      ) : (
                        item.videos
                      )}
                    </td>
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
