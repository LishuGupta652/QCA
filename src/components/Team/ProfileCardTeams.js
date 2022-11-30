import React from "react";
import styled from "styled-components";

const ProfileCardTeamStyled = styled.div`
  .profile_card {
    display: flex;
    align-items: center;
    margin: 30px 0;
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
            <a href={siteLink}>{title}</a> ({designation})
          </h3>
          <p className="department">{department}</p>
          <div className="email">
            <a href={`mailto:${email}`}>{email}</a>

            {scholarLink && (
              <a href={scholarLink} className="scholar">
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
