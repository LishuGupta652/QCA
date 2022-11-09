import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { publicationsConfig } from "../config";
import { Container } from "../theme/global.styled";

const PublicationsStyled = styled.div`
  h1 {
    margin: 2rem 0;
  }
`;

const Publications = () => {
  const [publications, setPublications] = React.useState(publicationsConfig);
  const [books, setBooks] = React.useState([]);
  const [journals, setJournals] = React.useState([]);
  const [conferences, setConferences] = React.useState([]);
  const [otherPublications, setOtherPublications] = React.useState([]);
  const [years, setYears] = React.useState([]);

  const [sortedPublications, setSortedPublications] =
    React.useState(publications);

  const resetPublications = () => {
    setPublications(publicationsConfig);
  };

  const handleYearOptionChange = (e) => {
    const year = e.target.value;
    console.log(year);
    console.log(publications);

    if (year === "All") {
      resetPublications();
    } else {
      const filteredPublications = publicationsConfig.filter(
        (publication) => publication.year === year
      );
      console.log(filteredPublications);
      setPublications(filteredPublications);
    }
  };
  const sortPublications = (pub) => {
    return pub.sort((a, b) => {
      return a.year < b.year;
    });
  };

  useEffect(() => {
    setBooks(publications.filter((pub) => pub.category === "book"));
    setJournals(publications.filter((pub) => pub.category === "journal"));
    setConferences(publications.filter((pub) => pub.category === "conference"));
    setOtherPublications(
      publications.filter((pub) => pub.category === "other")
    );
  }, [publications]);

  // for Initial Load
  useEffect(() => {
    setPublications(sortPublications(publications));

    const yearsToSelect = [];
    publications.forEach((pub) => {
      if (!yearsToSelect.includes(pub.year)) {
        yearsToSelect.push(pub.year);
      }
    });

    setYears(yearsToSelect);
  }, []);

  return (
    <PublicationsStyled>
      <Header />

      <Container>
        <h1>Publications</h1>

        <div className="filters">
          <button onClick={resetPublications}>Reset</button>

          {/* create option to select year */}
          <select
            onChange={(e) => {
              handleYearOptionChange(e);
            }}
          >
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>

        <ol>
          {books.length > 0 && (
            <div className="publish book">
              <h2>Books</h2>
              {books.map((book) => {
                return <PublicationViewer {...book} />;
              })}
            </div>
          )}
          {journals.length > 0 && (
            <div className="publish journal">
              <h2>Journals</h2>
              {journals.map((journal) => {
                return <PublicationViewer {...journal} />;
              })}
            </div>
          )}
          {conferences.length > 0 && (
            <div className="publish conference">
              <h2>Conferences</h2>
              {conferences.map((conference) => {
                return <PublicationViewer {...conference} />;
              })}
            </div>
          )}
          {otherPublications.length > 0 && (
            <div className="publish other">
              <h2>Other Publications</h2>
              {otherPublications.map((otherPublication) => {
                return <PublicationViewer {...otherPublication} />;
              })}
            </div>
          )}
        </ol>
      </Container>
    </PublicationsStyled>
  );
};

const PublicationViewerStyled = styled.div`
  padding: 10px 0;
  li {
    padding-left: 5px;
    margin-left: 30px;
  }

  .author {
    font-weight: bold;
  }
  .title {
    font-style: italic;
  }
  .highlights {
    font-weight: bold;
    color: #ff0000;
  }
`;

const PublicationViewer = ({
  authors,
  title,
  link,
  venue,
  publisher,
  otherDetails,
  highlights,
  category,
  year,
}) => {
  return (
    <PublicationViewerStyled>
      <li>
        <span className="author">
          {authors.map((author) => {
            return <span>{author}, </span>;
          })}
        </span>
        <span className="title">
          <a href={link}>{title}</a>
        </span>
        {venue && <span className="venue">, {venue}</span>}
        {publisher && <span className="publisher">, {publisher}</span>}
        {otherDetails && <span className="otherDetails">, {otherDetails}</span>}
        {highlights && (
          <>
            <span className="">, </span>
            <span className="highlights">{highlights}</span>
          </>
        )}
      </li>
    </PublicationViewerStyled>
  );
};

export default Publications;
