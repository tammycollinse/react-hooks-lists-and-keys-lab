import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const compsInArrayForm = links.map((comp) =>{
    return <a key={comp} href={`#${comp}`}>{comp}</a>
  })

  return <nav>{compsInArrayForm}</nav>;
}

export default NavBar;
