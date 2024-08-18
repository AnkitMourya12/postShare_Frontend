import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Not in Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>INDIA</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Student</span>
      </div>

      {/* <button className="button logout-button">Logout</button> */}
      <button> <Link to="/">
          <div className="menu-items">
            <LogoutIcon style={{ marginRight: 10, color: "#3db3f3" }} />
            Log Out
          </div>
        </Link></button>
    </div>
  );
};

export default InfoCard;
