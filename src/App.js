import React, { useEffect, useState } from "react";
import "./App.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  const [newtime, setnewtime] = useState(`2020-12-30`);

  const calculateTimeLeft = () => {
    const difference = +new Date(newtime) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="container-fluid home-page">
      <div className="coming-soon">
        <h2>
          COMING <br></br>
          <span> SOON</span>
        </h2>

        <p className="sub-coming-soon">There will be something very awesome</p>
      </div>

      <div className="timer-block">
        <div className="timer-flex">
          <p className="left-time">
            {timeLeft.days}
            <br></br>
            <span className="left-time-label">days</span>
          </p>

          <p className="left-time">
            {timeLeft.hours}
            <br></br>
            <span className="left-time-label">hours</span>
          </p>
          <p className="left-time">
            {timeLeft.minutes}
            <br></br>
            <span className="left-time-label">minutes</span>
          </p>
          <p className="left-time">
            {timeLeft.seconds}
            <br></br>
            <span className="left-time-label">seconds</span>
          </p>
        </div>

        <p className="sub-coming-soon mt-3">
          ...as awesome as these bare lands
        </p>
      </div>

      <footer className="footer-block">
        <div className="footer-flex">
          <div className="flex-right-icon">
            <a
              href="https://www.facebook.com/profile.php?id=100008790168495"
              target="_blank"
            >
              <div className="icon-border">
                <FaFacebook className="icon-social" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/shubham.aryan001/
              "
              target="_blank"
            >
              <div className="icon-border">
                <FaInstagram className="icon-social" />
              </div>
            </a>

            <a
              href="https://twitter.com/shubhamaryan007
              "
              target="_blank"
            >
              {" "}
              <div className="icon-border">
                <FaTwitter className="icon-social" />
              </div>
            </a>
          </div>

          <div className="text-center">
            <div className="created-label">
              <p>Created by SHUBHAM ARYAN</p>
            </div>
          </div>

          <div>
            <div className="email-block">
              <div>
                <div className="text-block">
                  <p className="sub-head">subscribe to our newsletter</p>
                  <p className="head">saurabharyan30@gmail.com</p>
                </div>
              </div>

              <div>
                <div className="icon-border">
                  <MdEmail className="icon-social" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
