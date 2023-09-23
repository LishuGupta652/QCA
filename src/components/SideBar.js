import React from "react";
import styled from "styled-components";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Page } from "react-facebook";

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
        <a
          class="twitter-timeline"
          href="https://twitter.com/ProfAKSinghNIT?ref_src=twsrc%5Etfw"
        ></a>
      </div>
    </SideBarStyled>
  );
};

export default SideBar;
