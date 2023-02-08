import React from "react";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Tintos" },
    { id: 2, name: "Blancos" },
    { id: 3, name: "Espumantes" },
  ];

  return (
    <nav>
      {categories.map((category) => {
        return (
          <a key={category.id} style={styles.categorias} href="">
            {category.name}
          </a>
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