import React, { useState } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../../assets/assets';

const ExploreMenu = ({ setCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setSelectedCategory(prevCategory => prevCategory === category ? "All" : category);
        setCategory(category);
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div key={index} className="explore-menu-list-item" onClick={() => handleCategoryClick(item.menu_name)}>
                        <img className={selectedCategory === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;