import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Tintos", route:'/categories/tintos' },
    { id: 2, name: "Blancos", route:'/categories/blancos'},
    { id: 3, name: "Rosados", route:"/categories/rosados"},
    { id: 4, name: "Espumantes", route:"/categories/espumantes"}
  ];

  return (
    <nav>
      {categories.map((category) => {
        return (
          <NavLink key={category.id} style={styles.categorias} to={category.route} >
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
    color: "#722F37",
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};

export default NavCategories;
