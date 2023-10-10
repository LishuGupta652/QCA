import React from "react";
import styled from "styled-components";
import { AUTHOR_DESC, AUTHOR_NAME } from "../../config";

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
`;

const ProfileCard = () => {
  return (
    <ProfileCardStyled className="profile-card">
      <img src={require("../../img/prof.png")} alt={`${AUTHOR_NAME}`} />
      <div className="right">
        <p>
          <span className="author_name" style={{ marginRight: 10 }}>
            {AUTHOR_NAME}
          </span>
          <span className="author_desc">{AUTHOR_DESC}</span>
        </p>
      </div>
    </ProfileCardStyled>
  );
};

export default ProfileCard;
