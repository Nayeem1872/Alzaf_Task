import React, { useState, useEffect } from "react";
import axios from "axios";

type DropdownMenuProps = {
  isOpen: boolean;
};

type MenuItem = {
  id: number;
  title: string;
  parent_id: number | null;
  category_id: number;
  icon?: string;
  link: string;
  childrens?: MenuItem[];
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchMenuItems();
    }
  }, [isOpen]);

  if (!isOpen || loading) return null;
  const handleMenuClick = (id: number) => {
    setActiveMenu((prev) => (prev === id ? null : id)); // Toggle the active menu
  };

  const renderMenu = (items: MenuItem[]) => {
    return (
      <ul className="text-sm bg-white border border-gray-200 rounded shadow-md">
        {items.map((item) => (
          <li
            key={item.id}
            className="relative group px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <a href={item.link} className="flex items-center space-x-4">
              {/* Item title */}
              <span>{item.title}</span>

              {/* Show ">" icon only if the item has children */}
              {item.childrens && item.childrens.length > 0 && (
                <span className="ml-2 text-gray-500 group-hover:text-gray-700">
                  &gt;
                </span>
              )}
            </a>
            {/* {item.childrens && item.childrens.length > 0 && (
              <div className="absolute left-full top-0 mt-[-2px] hidden group-hover:block w-64 bg-white border border-gray-200 rounded shadow-lg">
                {renderMenu(item.childrens)}
              </div>
            )} */}
             {item.childrens && item.childrens.length > 0 && activeMenu === item.id && (
              <div className="pl-4 mt-2">
                {renderMenu(item.childrens)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div
      className="absolute mt-2 bg-white shadow-lg rounded-md w-64"
      style={{ zIndex: 50 }}
    >
      {renderMenu(menuItems)}
    </div>
  );
};

export default DropdownMenu;
