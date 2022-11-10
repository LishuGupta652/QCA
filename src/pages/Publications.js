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

  .resetButton,
  select {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid #343434;
    border-radius: 5px;
    margin-right: 10px;
    margin-bottom: 40px;
  }
`;

const Publications = () => {
  const [publications, setPublications] = React.useState(publicationsConfig);
  const [books, setBooks] = React.useState([]);
  const [journals, setJournals] = React.useState([]);
  const [conferences, setConferences] = React.useState([]);
  const [otherPublications, setOtherPublications] = React.useState([]);
  const [years, setYears] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

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

  const handleAuthorOptionChange = (e) => {
    const author = e.target.value;
    console.log(author);
    console.log(publications);

    if (author === "All") {
      resetPublications();
    } else {
      const filteredPublications = publicationsConfig.filter((publication) =>
        publication.authors.includes(author)
      );
      console.log(filteredPublications);
      setPublications(filteredPublications);
    }
  };

  const handleCategoryOptionChange = (e) => {
    const category = e.target.value;
    console.log(category);
    console.log(publications);

    if (category === "All") {
      resetPublications();
    } else {
      const filteredPublications = publicationsConfig.filter(
        (publication) => publication.category === category
      );
      console.log(filteredPublications);
      setPublications(filteredPublications);
    }
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
    const authorsToSelect = [];
    const categoriesToSelect = [];
    publications.forEach((pub) => {
      if (!yearsToSelect.includes(pub.year)) {
        yearsToSelect.push(pub.year);
      }

      pub.authors.forEach((author) => {
        if (!authorsToSelect.includes(author)) {
          authorsToSelect.push(author);
        }
      });

      if (!categoriesToSelect.includes(pub.category)) {
        categoriesToSelect.push(pub.category);
      }
    });

    setYears(yearsToSelect);
    setAuthors(authorsToSelect);
    setCategories(categoriesToSelect);
  }, []);

  return (
    <PublicationsStyled>
      <Header />

      <Container>
        <h1>Publications</h1>

        <div className="filters">
          {/* create option to select year */}
          <select
            onChange={(e) => {
              handleYearOptionChange(e);
            }}
          >
            <option value="All">Select Year</option>
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>

          {/* create option to select author */}
          <select
            onChange={(e) => {
              handleAuthorOptionChange(e);
            }}
          >
            <option value="All">Select Author</option>
            {authors.map((author) => (
              <option value={author}>{author}</option>
            ))}
          </select>

          {/* create option to select category */}
          <select
            onChange={(e) => {
              handleCategoryOptionChange(e);
            }}
          >
            <option value="All">Select Category</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>

          <button className="resetButton" onClick={resetPublications}>
            Reset
          </button>
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
  font-family: Arial, Helvetica, sans-serif;
  li {
    padding-left: 5px;
    margin-left: 30px;
  }

  .author {
    font-weight: bold;
  }

  .title {
  }
  .venue,
  .publisher {
    font-style: italic;
  }
  .highlights {
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
