import React from "react";
import styled from "styled-components";
import Template from "../components/Template";
import { profileCardConfigs } from "../config";
import { Container } from "../theme/global.styled";

const TeamsStyled = styled.div`
  h1 {
    text-align: center;
    margin: 2rem 0;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1rem;
    margin: 2rem 0;
  }
`;

const Teams = () => {
  return (
    <>
      <TeamsStyled>
        <Template>
          <Container>
            <h1>Teams</h1>

            <div className="flex">
              {profileCardConfigs.map((profileCardConfig) => {
                return <ProfileCard {...profileCardConfig} />;
              })}
            </div>
          </Container>
        </Template>
      </TeamsStyled>
    </>
  );
};

const ProfileCard = ({
  email,
  title,
  designation,
  department,
  siteLink,
  scholarLink,
  image,
}) => {
  return (
    <ProfileCardStyled>
      <div className="profile_card">
        <div className="profile_card_image">
          <img src={require(`../img/teams/${image}`)} alt="" />
        </div>
        <div className="profile_card_info">
          <h3>
            <a href={siteLink}>{title}</a> ({designation})
          </h3>
          <p className="department">{department}</p>
          <div className="email">
            <a href={`mailto:${email}`}>{email}</a>

            {scholarLink && (
              <a href={scholarLink} className="scholar">
                <img src={require("../img/scholar.png")} alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
    </ProfileCardStyled>
  );
};

const ProfileCardStyled = styled.div`
  .profile_card {
    display: flex;
    align-items: center;
    margin: 30px 0;

    .profile_card_image {
    }
    img {
      width: 120px;
      height: 100%;
      object-fit: cover;
    }

    .profile_card_info {
      width: 400px;
      background-color: #f5f5f5;
      padding: 30px;

      h3 {
        font-size: 1rem;
      }
      .department {
        font-size: 0.8rem;
      }
      .email {
        font-size: 0.8rem;
        color: blue;
      }
      .scholar img {
        width: 30px;
        padding: 0px 5px;
      }
    }
  }
`;
export default Teams;
