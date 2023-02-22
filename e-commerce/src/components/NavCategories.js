import React from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Tinto", route:'/categories/tinto' },
    { id: 2, name: "Blanco", route:'/categories/Blanco'},
    { id: 3, name: "Rosado", route:"/categories/rosado"},
    { id: 4, name: "Espumante", route:"/categories/espumante"}
  ];

  return (
    <nav>
      {categories.map((category) => {
        return (
          <NavLink key={category.id} style={styles.categorias} to={category.route}>
            {category.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export const styles = {
  categorias: {
    margin: 10,
    color: "red",
  },
};

export default NavCategories;
