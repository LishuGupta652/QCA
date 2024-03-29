import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../theme/global.styled";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NewsStyled = styled.div`
  margin: 30px 0;

  .year {
    h2 {
      background-color: rgba(231, 76, 60, 0.2);
      margin: 10px 0;
      padding: 10px;
      border-radius: 5px;
      color: #454545;
      margin-top: 30px;
      display: flex;
      align-items: center;
      user-select: none;
    }
  }
  ol {
    li {
      margin-left: 1.5rem;

      font-size: 1.2rem;
    }
  }
`;

export const NewsListByYearMap = {
  2023: [
    <>
      2022 Best Paper Award by IEEE Transactions on Cloud Computing. <br />
      Deepika Saxena, Ashutosh Kumar Singh and Rajkumar Buyya, 
      "OP-MLB: An Online VM Prediction-Based Multi-Objective Load Balancing Framework for Resource Management 
      at Cloud Data Center" IEEE Transactions on Cloud Computing , vol. 10, no. 04, pp. 2804 - 2816, 
      October - December, 2022, doi: http://doi.ieeecomputersociety.org/10.1109/TCC.2021.3059096
    </>,
    <>
      Research Grant from MPCST, Govt. of Madhya Pradesh received for a R&D
      project on Theoretical Investigation and Analysis of Different
      Architectures of Quantum Computing for Cyber Physical Systems
    </>,
    <>
      Call for papers (special section) on{" "}
      <a href="https://www.journals.elsevier.com/computers-and-electrical-engineering%20/call-for-papers/explainable-artificial-intelligence-xai-methods-applications-and-challenges-vsi-xai">
        eXplainable Artificial Intelligence (XAI): Methods, Applications, and
        Challenges (VSI-xai)
      </a>{" "}
      in{" "}
      <a href="https://www.sciencedirect.com/journal/computers-and-electrical-engineering">
        Computers and Electrical Engineering
      </a>
      , Elsevier (SCIE Indexed, IF=4.152)
    </>,
    <>
      Research Paper{" "}
      <i>
        <a href="https://doi.org/10.1145/3622932">
          A Comprehensive and Comparative Analysis of QCA based Circuit Designs
          for next generation computation
        </a>
      </i>
      is accepted for publication in <i>ACM Computing Surveys</i> [SCIE, Impact
      Factor: 16.6]
    </>,
    <>
      Research Paper "
      <i>
        Performance Analysis of Machine Learning Centered Workload Prediction
        Models for Cloud
      </i>
      " is accepted for publication in{" "}
      <i>IEEE Transactions on Parallel and Distributed Systems</i>
    </>,
    <>
      Research Paper "
      <i>
        An AI-Driven VM Threat Prediction Model for Multi-Risks Analysis-Based
        Cloud Cybersecurity
      </i>
      " is accepted for publication in{" "}
      <i> IEEE Transactions on Systems, Man, and Cybernetics: Systems</i>
    </>,
    <>
      Research Paper "
      <i>
        Emerging VM Threat Prediction and Dynamic Workload Estimation for Secure
        Resource Management in Industrial Clouds{" "}
      </i>
      " is accepted for publication in{" "}
      <i> IEEE Transactions on Automation Science and Engineering</i>
    </>,
    <>
      Research Paper "
      <i>
        SeCoM: An Outsourced Cloud-Based Secure Communication Model for Advanced
        Privacy Preserving Data Computing and Protection
      </i>
      " is accepted for publication in <i>IEEE Systems Journal</i>
    </>,
    <>
      Dr. Hari Mohan Gaur joined Goethe University (Campus Riedberg) Frankfurt,
      Germany as Post Doctoral Associate.
    </>,
    <>
      Dr. Deepika Saxena joined The University of Aizu, Japan as Associate
      Professor.
    </>,
    <>
      Dr. Rishabh Gupta joined The University of Aizu, Japan as Post-Doc
      Research Associate.
    </>,
    <>
      Call for papers{" "}
      <a href="https://rtip2r-conference.org/2023/index.html">
        The 6th International Conference on Recent Trends in Image Processing &
        Pattern Recognition (RTIP2R)
      </a>
      , University in Derby (United Kingdom)
    </>,
    <>
      Call for book chapters on{" "}
      <Link to="/cloud-of-things-blog01">
        Cloud of Things: Foundations, Applications, and Challenges.
      </Link>
    </>,
    <>
      Dr. Sakshi Patni received a Post-Doc offer from Department of Conputer
      Science and Engineering, National Sun Yat-Sen University, Taiwan.
    </>,
    <>
      Ms. Deepika Saxena joined Frankfurt Institute of Advanced Studies, Goethe
      University, Frankfurt, Germany as Post-Doc Research Associate.
    </>,
    <>
      Dr. Hari Mohan Gaur joined School of Computer Science, Engineering, and
      Technology, Bennett University, India as Assistant Professor.
    </>,
    <>
      Dr. Ishu Gupta joined Department of Conputer Science and Engineering,
      National Sun Yat-Sen University, Taiwan as Post-doc Research Associate.
    </>,
  ],
  2022: [],
};

export const NewsList = [];

const News = () => {
  return (
    <>
      <Header />
      <NewsStyled>
        <Container>
          <div className="article">
            {
              <ol>
                {Object.keys(NewsListByYearMap)
                  .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
                  .map((year, index) => (
                    <NewsByYear
                      key={index}
                      year={year}
                      toggle={year == 2023 ? true : false}
                      _year={NewsListByYearMap[year]}
                    ></NewsByYear>
                  ))}
              </ol>
            }
          </div>
        </Container>
      </NewsStyled>
      <Footer />
    </>
  );
};

function NewsByYear(props) {
  const [toggle, setToggle] = useState(props.toggle || false);

  return (
    <div className="year">
      <h2
        className=""
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        {props.year}
      </h2>

      {toggle && (
        <ol>
          {props._year.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default News;
