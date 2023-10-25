import React from "react";
import styled from "styled-components";

const CollaboratorCardTeamStyled = styled.div`
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
  }

  .image {
    opacity: 1;
    transition: 0.5s ease;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: rgba(231, 76, 60, 0.7);
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 1.5;
    padding: 16px 32px;
  }
`;

const CollaboratorCard = ({
  email,
  title,
  designation,
  department,
  siteLink,
  scholarLink,
  image,
}) => {
  return (
    <CollaboratorCardTeamStyled>
      <div className="container">
        <img
          className="image"
          src={require(`../../img/teams/${image}`)}
          alt={image}
        />
        <div className="middle">
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <div className="text">{title}</div>
          </a>
        </div>
      </div>
    </CollaboratorCardTeamStyled>
  );
};
export default CollaboratorCard;
