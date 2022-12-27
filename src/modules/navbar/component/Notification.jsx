import React from "react";
import { Link } from "react-router-dom";
import "./notification_sm.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
// import * as path from '../../../Routes/RoutePaths'
const data = [
  {
    img: img1,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img2,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img3,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img4,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img5,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
  {
    img: img6,
    text: (
      <p className="notification_text_p">
        Antu Islam <span>create invoice by</span> Ecosystem and Conversation
      </p>
    ),
  },
];

const Notification = ({ notificationClic, show}) => {
  return (
    <div className={`Notfication_sm_containar shadow-sm ${!show && "d-none"} `}>
      <div className="row mb-3">
        <div className="col-6 notification_title">Notification</div>
        <div className="col-6 text-end ">
          <Link className="notification_clear_all">Clear all</Link>
        </div>
      </div>
      <div className="line_notification"></div>
      {data.map((curr) => {
        return (
          <>
            <div className="row my-4">
              <div className="col-2">
                <img className="notification_sm_img" src={curr.img} alt="" />
              </div>
              <div className="col-10 notification_sm_text">
                {curr.text}
                <p className="minute_ago">1 m ago</p>
              </div>
            </div>
          </>
        );
      })}
     
    </div>
  );
};

export default Notification;
