import React from "react";
import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const SideBarStyled = styled.div`
  grid-area: sidebar;
  margin-top: 200px;
  padding: 20px;

  .twitter-bar {
    max-width: 300px;

    @media (max-width: 768px) {
      margin: 0 auto;
      padding: 0;
    }
  }
`;

const SideBar = () => {
  return (
    <SideBarStyled>
      <div className="twitter-bar">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ProfAKSinghNIT"
          options={{ height: 400 }}
        />
      </div>
    </SideBarStyled>
  );
};

export default SideBar;
