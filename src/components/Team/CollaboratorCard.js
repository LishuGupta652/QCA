import React from "react";
import styled from "styled-components";

const CollaboratorCardTeamStyled = styled.div`
  .container {
    position: relative;
    width: 50%;
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
    width: 100%;
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
    background-color: rgba(255, 203, 2);
    color: white;
    font-size: 16px;
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
            <div className="text">John Doe</div>
          </a>
        </div>
      </div>
    </CollaboratorCardTeamStyled>
  );
};
export default CollaboratorCard;
