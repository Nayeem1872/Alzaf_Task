import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

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
  return (
    <div
      className="absolute mt-2 bg-white shadow-lg rounded-md w-64"
      style={{ zIndex: 50 }}
    >
      {menuItems.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

type CategoryItemProps = {
  category: MenuItem;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative group px-4 py-2  cursor-pointer list-none flex justify-between items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={category.link} className="text-gray-700 flex items-center group-hover:text-orange-500">
        {category.title}
      </Link>
      {category.childrens && category.childrens.length > 0 && (
        <span className="ml-2 text-gray-500 group-hover:text-orange-500">
         <img src="/images/Arrow.png" />
        </span>
      )}
      {category.childrens && category.childrens.length > 0 && isHovered && (
        <ul className="absolute left-full top-0 mt-0 w-[200px] bg-white border border-gray-200 rounded shadow-lg">
          {category.childrens.map((child) => (
            <CategoryItem key={child.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
