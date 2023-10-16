import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfileCardTeam from "../components/Team/ProfileCardTeams";
import { profileCardConfigs } from "../config";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TeamsStyled = styled.div`
  width: 90%;
  margin: 0 auto;

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
`;

const Teams = () => {
  return (
    <>
      <Header />
      <TeamsStyled>
        <Tabs>
          <TabList>
            <Tab style={{ width: "50%", fontSize: "20px" }}>Students</Tab>
            <Tab style={{ width: "50%", fontSize: "20px" }}>Collaborators</Tab>
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
        </Tabs>
      </TeamsStyled>
      <Footer />
    </>
  );
};

export default Teams;
