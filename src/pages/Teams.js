import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import ProfileCardTeam from "../components/Team/ProfileCardTeams";
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
            <h1>Team</h1>

            <div className="flex">
              {profileCardConfigs.map((profileCardConfig) => {
                return <ProfileCardTeam {...profileCardConfig} />;
              })}
            </div>
          </Container>
        </Template>
      </TeamsStyled>
    </>
  );
};

export default Teams;
