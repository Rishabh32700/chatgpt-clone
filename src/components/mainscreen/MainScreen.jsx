import React from "react";
import "./mainscreen.css";
import tempImage from "../sidebar/mypic.jpg";
const MainScreen = ({ hideSidebar, setHideSidebar }) => {
  return (
    <div
      className="mainSection"
      style={{ width: hideSidebar === true ? "100%" : "82.5%" }}
    >
      <div className="contentContainer">
        <div className="content">
          <img src={tempImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
            eum illo doloribus illum perferendis est laudantium sint dolorum
          </p>
        </div>
        <div className="content answer">
          <img src={tempImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
            eum illo doloribus illum perferendis est laudantium sint dolorum
            harum explicabo saepe magnam nesciunt suscipit provident, nisi
            cupiditate, nam eius doloremque aliquid laboriosam! Rem harum
            dolorem perspiciatis numquam provident, dolores labore laudantium
            quis iste. Laudantium repellat sed maxime debitis numquam dolores
            nesciunt eligendi quas enim. Recusandae dolor vitae, sint
            consequuntur quod asperiores impedit incidunt fugit dolores quidem
            in repudiandae, facilis ipsa cumque rerum dicta officia blanditiis!
            Perferendis doloribus est quibusdam! Dolore sit consectetur
            molestias maiores inventore voluptatem temporibus voluptates
            quaerat, optio soluta eum aperiam. Consequuntur, facilis? Numquam
            nobis accusamus deleniti.
          </p>
        </div>
        <div className="content">
          <img src={tempImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
            eum illo doloribus illum perferendis est laudantium sint dolorum
          </p>
        </div>
        <div className="content answer">
          <img src={tempImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
            eum illo doloribus illum perferendis est laudantium sint dolorum
            harum explicabo saepe magnam nesciunt suscipit provident, nisi
            cupiditate, nam eius doloremque aliquid laboriosam! Rem harum
            dolorem perspiciatis numquam provident, dolores labore laudantium
            quis iste. Laudantium repellat sed maxime debitis numquam dolores
            nesciunt eligendi quas enim. Recusandae dolor vitae, sint
            consequuntur quod asperiores impedit incidunt fugit dolores quidem
            in repudiandae, facilis ipsa cumque rerum dicta officia blanditiis!
            Perferendis doloribus est quibusdam! Dolore sit consectetur
            molestias maiores inventore voluptatem temporibus voluptates
            quaerat, optio soluta eum aperiam. Consequuntur, facilis? Numquam
            nobis accusamus deleniti.
          </p>
        </div>
        <div className="content">
          <img src={tempImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
            eum illo doloribus illum perferendis est laudantium sint dolorum
          </p>
        </div>
        <div className="content answer">
          <img src={tempImage} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vel
            eum illo doloribus illum perferendis est laudantium sint dolorum
            harum explicabo saepe magnam nesciunt suscipit provident, nisi
            cupiditate, nam eius doloremque aliquid laboriosam! Rem harum
            dolorem perspiciatis numquam provident, dolores labore laudantium
            quis iste. Laudantium repellat sed maxime debitis numquam dolores
            nesciunt eligendi quas enim. Recusandae dolor vitae, sint
            consequuntur quod asperiores impedit incidunt fugit dolores quidem
            in repudiandae, facilis ipsa cumque rerum dicta officia blanditiis!
            Perferendis doloribus est quibusdam! Dolore sit consectetur
            molestias maiores inventore voluptatem temporibus voluptates
            quaerat, optio soluta eum aperiam. Consequuntur, facilis? Numquam
            nobis accusamus deleniti.
          </p>
        </div>
      </div>
      <div className="inputBoxContainer">
        <input type="text" placeholder="Search here" />
      </div>
    </div>
  );
};

export default MainScreen;
