import React from "react";

import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const ResourcesStyled = styled.div`
  width: 95%;
  margin: 0 auto;
  .heading {
    text-align: center;
    margin: 10px;
  }
  h2 {
    background-color: rgba(253, 203, 110, 0.2);
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    color: #454545;
    margin-top: 30px;
    display: flex;
    align-items: center;
    user-select: none;
  }
  h3 {
    margin: 0 auto;
    text-align: left;

    span {
      color: green;
    }
  }
  ol {
    margin: 0 auto;
    text-align: left;
    padding: 0 50px;
  }
`;

const Resources = () => {
  return (
    <div>
      <ResourcesStyled>
        <Container>
          <h1 className="heading"></h1>
          <div className="article">
            <h2>Tools</h2>
            <ol>
              <li><a href="https://github.com/Cloudslab/cloudsim/" target="_blank">CloudSim</a> - Framework For Modeling And Simulation Of Cloud Computing Infrastructures And Services</li>
              <li><a href="https://github.com/Cloudslab/iFogSim" target="_blank">iFogSim</a> - Toolkit for Modeling and Simulation of Resource Management Techniques in Internet of Things, Edge and Fog Computing</li>
            </ol>
          </div>
          <div className="article">
            <h2>Datasets</h2>
            <ol>
              <li><a href="https://github.com/google/cluster-data/blob/master/ClusterData2011_2.md" target="_blank">Google Cluster Traces (2011)</a></li>
              <li><a href="https://github.com/google/cluster-data" target="_blank">Google Cluster Traces (2019)</a></li>
              <li><a href="https://ita.ee.lbl.gov/html/traces.html" target="_blank">Traces available in the Internet Traffic Archive</a></li>
            </ol>
          </div>
          <div className="article">
            <h2>Tutorials</h2>
            <ol>
              Coming soon...
            </ol>
          </div>  
        </Container>
      </ResourcesStyled>
    </div>
  );
};

export default Resources;