import styled from "styled-components";
import { APP_NAME, TAGlINE } from "../../config";

const HomeBannerStyled = styled.div`
  margin: 60px 0;
  h2 {
    font-size: 30px;
    color: #343434;
    font-weight: 300;
  }

  h4 {
    color: #565656;
  }

  hr {
    margin: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 75%;
  }
  .red {
    color: #ff0000;
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <h2>
        {" "}
        {APP_NAME} (<span className="red">Q</span>uantum,{" "}
        <span className="red">M</span>achine Learning,{" "}
        <span className="red">C</span>loud Computing) Labs
      </h2>
      <h4>{TAGlINE}</h4>

      <hr />
    </HomeBannerStyled>
  );
};

export default HomeBanner;
