import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NewsList } from "../../pages/News";

const NewsHomeStyled = styled.div`
  margin: 60px 0;

  h1 {
    margin: 20px 0;
  }

  p {
    margin: 1rem 0;
  }

  li {
    margin-left: 20px;
  }

  .show_more {
    cursor: pointer;
    text-align: right;
    /* style button */
    background-color: #ee5253;
    color: white;
    padding: 8px 10px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      transition: 0.3s;
      /* style button on hover */
      background-color: #ddd;
      color: black;
    }
  }
`;

const NewsHome = ({ count = 3 }) => {
  const newsList = NewsList.slice(0, count);
  return (
    <NewsHomeStyled>
      <h1>Updates</h1>

      <marquee direction="up">
        <ol>
          {newsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </marquee>

      <Link to="news">
        <button className="show_more">Show more...</button>
      </Link>
    </NewsHomeStyled>
  );
};

export default NewsHome;
