import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileCardTeam from "../components/Team/ProfileCardTeams";
import { profileCardConfigs } from "../config";
const TeamsStyled = styled.div`
  width: 90%;
  margin: 0 auto;
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
      <Header />
      <TeamsStyled>
        <h1>Team</h1>

        <div className="flex">
          {profileCardConfigs.map((profileCardConfig) => {
            return <ProfileCardTeam {...profileCardConfig} />;
          })}
        </div>
      </TeamsStyled>
      <Footer />
    </>
  );
};

export default Teams;
