import styled from "styled-components";

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
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <h2> QCA (Quantum Cloud AI)</h2>
      <h4>
        Empowering the next generation of Cyber Physical Systems through the
        power of Data and AI
      </h4>

      <hr />
    </HomeBannerStyled>
  );
};

export default HomeBanner;
