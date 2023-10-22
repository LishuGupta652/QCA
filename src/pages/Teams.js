import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileCardTeam from "../components/Team/ProfileCardTeams";
import { CollaboratorConfig, profileCardConfigs } from "../config";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CollaboratorCard from "../components/Team/CollaboratorCard";
import { Container } from "../theme/global.styled";

const TeamsStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: calc(100vh - 160px);

  h1 {
    text-align: center;
    margin: 2rem 0;
  }
  .flex {
    max-width: 1400px;
    margin: 50px auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    line-height: 1.7;
  }

  .flex2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 15px;
    margin: 50px auto;
  }

  .react-tabs__tab--selected {
    background-color: rgba(231, 76, 60, 0.5);
    color: black;
  }
`;

const Teams = () => {
  return (
    <>
      <Header />
      <TeamsStyled>
        <Container>
          <Tabs>
            <TabList>
              <Tab style={{ width: "50%", fontSize: "20px" }}>Students</Tab>
              <Tab style={{ width: "50%", fontSize: "20px" }}>
                Collaborators
              </Tab>
            </TabList>

            <TabPanel>
              <div className="flex">
                {profileCardConfigs.map((profileCardConfig) => {
                  return (
                    <ProfileCardTeam
                      {...profileCardConfig}
                      key={profileCardConfig?.title}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex2">
                {CollaboratorConfig.map((profileCardConfig) => {
                  return (
                    <CollaboratorCard
                      {...profileCardConfig}
                      key={profileCardConfig?.title}
                    />
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </Container>
      </TeamsStyled>
      <Footer />
    </>
  );
};

export default Teams;
