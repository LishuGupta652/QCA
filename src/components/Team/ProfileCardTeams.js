import React from "react";
import styled from "styled-components";

const ProfileCardTeamStyled = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;

  .profile_card {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    .profile_card_image {
    }
    img {
      width: 120px;
      object-fit: cover;
    }

    .profile_card_info {
      width: 400px;
      height: 100%;
      background-color: #f5f5f5;
      padding: 30px;

      h3 {
        font-size: 1rem;
      }
      .department {
        font-size: 0.8rem;
      }
      .email {
        font-size: 0.8rem;
        color: blue;
      }
      .designation {
        font-size: 0.8rem;
        font-style: italic;
      }
      .scholar img {
        width: 30px;
        padding: 0px 5px;
      }
    }
  }
`;

const ProfileCardTeam = ({
  email,
  title,
  designation,
  department,
  siteLink,
  scholarLink,
  image,
}) => {
  return (
    <ProfileCardTeamStyled>
      <div className="profile_card">
        <div className="profile_card_image">
          <img src={require(`../../img/teams/${image}`)} alt="" />
        </div>
        <div className="profile_card_info">
          <h3>
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              {title}
            </a>{" "}
          </h3>
          <p className="designation">{designation}</p>
          <p className="department">{department}</p>
          <div className="email">
            <a href={`mailto:${email}`}>{email}</a>

            {scholarLink && (
              <a
                href={scholarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="scholar"
              >
                <div className="div">Google Scholar </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </ProfileCardTeamStyled>
  );
};
export default ProfileCardTeam;
