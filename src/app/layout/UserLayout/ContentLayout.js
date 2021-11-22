import React from "react";

const ContentLayout = ({ children }) => {
  return (
    <div>
      <h2>Navbar</h2>
      {children}
    </div>
  );
};

export default ContentLayout;
