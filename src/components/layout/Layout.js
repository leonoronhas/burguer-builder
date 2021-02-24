import React from "react";

const Layout = (props) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="mt-10">{props.children}</main>
  </>
);

export default Layout;
