import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header className="bg-light text-center">
      <h1 className="text-black py-5">Employee Directory</h1>
      <p className="text-black pb-5 mb-0">Click on the headings to filter by category or use the search box (feature not built yet) to narrow your results</p>
    </header>
  );
}

export default Header;
