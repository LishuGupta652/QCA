import React from "react";
import styled from "styled-components";
import { AUTHOR_DESC, AUTHOR_NAME } from "../../config";
import scholarLogo from "../../img/social/scholar-logo.png";
import rgLogo from "../../img/social/rg-log.png";
import webOfScience from "../../img/social/web_of_science.jpg";

const ProfileCardStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 30px 0;
  }

  .left-circle {
    width: 250px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }
  img {
    width: 120px;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }

  .right {
    .author_name {
      font-size: 1rem;
      font-weight: 500;
    }
    .author_desc {
      font-size: 0.8rem;
    }

    background-color: #f5f5f5;
    padding: 30px;
    border-right: 5px solid #000;
  }

  .social {
    display: flex;
    align-items: right;
    margin-top: 1rem;

    a {
      color: #000;
      font-size: 1.5rem;
      margin-right: 15px;
      transition: all 0.3s ease-in-out;
      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
      &:hover {
        color: rgba(0, 134, 0, 0.9);

        transform: scale(1.1);
      }
    }
  }
`;

const ProfileCard = () => {
  return (
    <ProfileCardStyled className="profile-card">
      <img src={require("../../img/prof.png")} alt={`${AUTHOR_NAME}`} />
      <div className="right">
        <div>
          <span className="author_name" style={{ marginRight: 10 }}>
            {AUTHOR_NAME}
          </span>
          <span className="author_desc">{AUTHOR_DESC}</span>

          <div className="social">
            <a
              href="https://scholar.google.com/citations?user=1pBXMOgAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={scholarLogo} alt="irins" loading="lazy" />
            </a>
            <a
              href="https://www.researchgate.net/profile/Ashutosh-Singh-88"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rgLogo} alt="irins" loading="lazy" />
            </a>
            <a
              href="https://www.webofscience.com/wos/author/record/1868400"
              target="_blank"
              rel="noreferrer"
            >
              <img src={webOfScience} alt="irins" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </ProfileCardStyled>
  );
};

export default ProfileCard;
