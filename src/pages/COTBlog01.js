import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { Container } from "../theme/global.styled";

const COTBlog01Styled = styled.div`
  text-align: justify;
  h1 {
    margin: 4rem 0 1rem 0;
    text-align: center;
  }
  .subtitle {
    text-align: center;
  }
  .dateSubmit {
    text-align: center;
    margin-bottom: 2rem;

    .dateSubmitText {
      font-weight: bold;
    }
    .dateVal {
      color: rgba(127, 44, 40, 0.91);
      font-weight: bold;
    }
  }

  .para1,
  .para3,
  .para4 {
    margin-bottom: 1rem;
  }

  .topics ol {
    margin-left: 2rem;
  }

  .importantDates ul {
    list-style: none;

    .dateIndex {
      font-weight: bold;
      color: #454545;
    }
  }

  .editors ol {
    margin-left: 5rem;
  }

  .questions {
    margin-top: 2rem;
    text-align: center;
    margin-bottom: 3rem;
  }

  .highlight {
    color: rgba(127, 17, 70, 1);

    font-weight: bold;
  }
`;

const COTBlog01 = () => {
  return (
    <COTBlog01Styled>
      <Header />

      <Container>
        <h1>Cloud of Things: Foundations, Applications, and Challenges</h1>

        <p className="subtitle">Book under CRC Publications</p>

        <p className="dateSubmit">
          <span className="dateSubmitText">
            Last date of chapter submission:
          </span>
          <span className="dateVal"> 31.01.2023</span>
        </p>

        <div className="para1">
          <span className="highlight">Introduction:</span> Cloud computing has
          received a tremendous acceptance across the globe due to its
          characteristics including on-demand service, accessibility,
          reliability, scalability, elasticity, and many others. In modern
          world, every end user is directly or indirectly getting benefited with
          the revolutionary computing paradigm. Some cloud-based services
          include email services, social networking websites, google maps, and
          various other mobile applications and services. It is hard to believe
          that any of us is not using any cloud-based service. Similarly,
          Internet of Things (IoT) is another technology which has significantly
          contributed to human life. The progress of IoT has enabled us to
          develop utility-based solutions including smart homes, smart cars,
          smart healthcare devices, smart watches, etc.
        </div>

        <div className="para2">
          Cloud computing has played a significant role in the success of the
          Internet of Things. Both technologies are related to each other and
          can be considered as the true future technology of the world as their
          combined usage has opened a different path of technological success.
          The rapid growth of IoT based solutions caused the issues of storing,
          processing, accessing, and managing the huge amount of data. The
          mutual use of IoT and cloud services introduced a possibility of using
          powerful processing solutions to process the sensory data streams. For
          instance, the sensors may collect the data which can be stored on
          cloud servers and later it can be used to conduct analysis and
          reporting. The objective of an IoT application would be to collect the
          data, transform the data into insights, and provide a cost effective
          and productive solutions for decision making.
        </div>

        <div className="para3">
          Cloud computing and IoT provide a significant number of benefits to
          the users. However, these technologies also individually suffer with
          several challenges including security and privacy, portability,
          interoperability, reliability, availability, carbon footprints, etc.
          Furthermore, the applications which use both computing paradigms face
          a different set of challenges such as energy efficiency, resource
          allocations, service discovery, security and privacy, communication,
          heterogeneity, performance, cost, big data, etc. This book focuses on
          the smart solutions to address such challenges along with fundamental
          discussions on applications and challenges of integrating two
          computing technologies.
        </div>

        <div className="para4">
          Cloud computing and Internet of Things are two major popular and
          emerging technologies in the current scenario. The modern world is all
          about data and smart solutions. These two technologies interplay to
          support the future technological advances in various applications such
          as smart homes, smart cities, intelligent transportation, disaster
          management, precision agriculture, healthcare. This book is an attempt
          to present a comprehensive view of both technologies including the
          theoretical concepts, applications, challenges, and possible smart
          solutions. In other words, this book can be used as a reference point
          to understand these two technologies and the research advancements
          going on.
        </div>

        <div className="topics">
          <div className="topicLine">
            <span className="highlight">Topics of Interest: </span>The
            submissions are welcome in the following areas but not limited to:
          </div>

          <ol>
            <li>Introduction to Cloud of Things</li>
            <li>Architecture, Standards, and Protocols</li>
            <li>Workload and Resource Management Techniques</li>
            <li>Cloud Service Management and Virtualization</li>
            <li>Energy Efficient Cloud of Things</li>
            <li>Sustainable cloud of things</li>
            <li>Security, Privacy, and Trust in Cloud and IoT</li>
            <li>Communication management</li>
            <li>Large-scale IoT deployment</li>
            <li>AI, ML/DL, and Data analytics for Cloud of Things</li>
            <li>IoT algorithms, protocols, and technologies</li>
            <li>Blockchain-based solutions</li>
            <li>Cyber-physical system applications</li>
            <li>Tools and frameworks for cloud and IoT</li>
            <li>Cloud of Things in Healthcare</li>
            <li>Cloud of Things in Finance</li>
            <li>Cloud of Things in Agricolture</li>
            <li>Cloud of Things in Rural Development</li>
            <li>Cloud of Things in Smart City</li>
            <li>Cloud of Things in Governance</li>
          </ol>
        </div>

        <div className="importantDates">
          <div className="highlight">Important Dates</div>

          <ul>
            <li>
              Chapter proposal submission deadline:
              <span className="dateIndex"> Dec 15, 2022</span>
            </li>
            <li>
              Chapter proposal decision notification:
              <span className="dateIndex"> Dec 21. 2022</span>
            </li>
            <li>
              Full chapter submission deadline:
              <span className="dateIndex"> Jan 31, 2023</span>
            </li>
            <li>
              First round decision notification:
              <span className="dateIndex"> Feb 10, 2023</span>
            </li>
            <li>
              Revised full chapter submission deadline:
              <span className="dateIndex"> Feb 25, 2023</span>
            </li>
            <li>
              Final decision notification:
              <span className="dateIndex"> Feb 28, 2023</span>
            </li>
          </ul>
        </div>

        <div className="submission">
          <div className="highlight">Submission</div>
          <p>
            Please use templates given below:

            LaTeX: <a href="https://www.overleaf.com/latex/templates/taylor-and-francis-latex-template-for-authors-interact-layout-plus-apa-reference-style/jqhskrsqqzfz">https://www.overleaf.com/latex/templates/taylor-and-francis-latex-template-for-authors-interact-layout-plus-apa-reference-style/jqhskrsqqzfz</a>
            Microsoft Office Word: <a href="https://docs.google.com/document/d/1DKIFZAqO2LzzrurzeOFbSDh2qzL_tOo_/edit?usp=share_link&ouid=109550927316957289401&rtpof=true&sd=true">https://docs.google.com/document/d/1DKIFZAqO2LzzrurzeOFbSDh2qzL_tOo_/edit?usp=share_link&ouid=109550927316957289401&rtpof=true&sd=true</a>

          </p>
        </div>

        <div className="editors">
          <div className="highlight">Editors:</div>

          <ol className="editor">
            <li>
              Dr. Jitendra Kumar, Department of Computer Applications, National
              Institute of Technology Tiruchirappalli, India, 620015
            </li>
            <li>
              Dr. G. R. Gangadharan, Department of Computer Applications,
              National Institute of Technology Tiruchirappalli, India, 620015
            </li>
            <li>
              Prof. Ashutosh Kumar Singh, Department of Computer Applications,
              National Institute of Technology Kurukshetra, India, 136119
            </li>
            <li>
              Prof. Chung-Nan Lee, Department of Computer Science and
              Engineering, National Sun Yat-sen University, Kaohsiung, Taiwan
            </li>
          </ol>
        </div>

        <div className="publisher">
          <span className="highlight">Publisher: </span>
          <span className="publisherName">CRC Publications</span>
        </div>

        <div className="questions">
          <div className="highlight">Questions ?</div>
          <p>cot23crc@gmail.com</p>
        </div>
      </Container>
    </COTBlog01Styled>
  );
};

export default COTBlog01;
