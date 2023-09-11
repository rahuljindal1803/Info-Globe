import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "/images/news.png";
import "./NewsItem.css";
import { APIContext } from "../context/APIContextProvider";

const NaveBar = () => {
  const [selectedOption, setSelectedOption] = useState("in");

  const { setCountry } = useContext(APIContext);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);

    setCountry(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            style={{
              display: "flex",
              alignItems: "center",
            }}
            to="/"
          >
            <img
              src={Icons}
              alt="icon"
              width={20}
              height={20}
              style={{ marginRight: "4px" }}
              className="navebar-icon"
            />

            <div className="navbar-name">InfoGlobe</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  General
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
            </ul>
            <select
              className="select-country form-select form-select-sm select-country"
              aria-label="Small select example"
              onChange={handleOptionChange}
              value={selectedOption}
            >
              <option value="in">in</option>
              <option value="us">us</option>
              <option value="mx">mx</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NaveBar;
