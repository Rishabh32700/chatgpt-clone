import React, { useState } from "react";
import Button from "../button/Button";
import "./sidebar.css";
import mypic from "./mypic.jpg";
const SideBar = ({ hideSidebar, setHideSidebar }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  function toggleSidebar() {
    setHideSidebar(!hideSidebar);
  }
  const [footerModal, setFooterModal] = useState(false);
  return (
    <>
      {hideSidebar === false ? (
        <div className="sidebar">
          <div className="uppersection">
            <div className="upperSectionUperPart">
              <Button
                image={""}
                text="New Chat"
                style={{
                  outline: "none",
                  border: ".5px solid gray",
                  borderRadius: "4px",
                  color: "white",
                  background: "transparent",
                  margin: ".5rem",
                  width: "80%",
                  textAlign: "start",
                  paddingLeft: "1rem",
                  cursor: "pointer",
                }}
              />
              <Button
                clickFunc={toggleSidebar}
                image={""}
                style={{
                  outline: "none",
                  border: ".5px solid gray",
                  borderRadius: "4px",
                  color: "white",
                  background: "transparent",
                  margin: ".5rem",
                  width: "20%",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="upperSectionLowerPart">
              {arr.map((ele) => {
                return (
                  <Button
                    text="Lorem, ipsum dolor."
                    style={{
                      outline: "none",
                      border: ".5px solid gray",
                      borderRadius: "4px",
                      color: "white",
                      background: "transparent",
                      margin: ".5rem",
                      width: "92%",
                      padding: ".5rem",
                      textAlign: "start",
                      paddingLeft: "1rem",
                      cursor: "pointer",
                      fontSize: ".8rem",
                    }}
                  />
                );
              })}
            </div>
          </div>

          <div onClick={() => {
            setFooterModal(!footerModal)
          }} className="lowerSection">
            {footerModal === true ? (
              <>
                <div className="footerModal" >hello</div>
              </>
            ) : null}
            <img src={mypic} alt="My pic ..." />
            <h2>Rishabh Sharma</h2>
            <p>...</p>
          </div>
        </div>
      ) : (
        <Button
          clickFunc={toggleSidebar}
          image={""}
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            outline: "none",
            border: ".5px solid gray",
            borderRadius: "4px",
            color: "white",
            background: "transparent",
            margin: ".5rem",
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
      )}
    </>
  );
};

export default SideBar;
