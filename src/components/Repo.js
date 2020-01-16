import React from "react";

import { getTime } from "../libs/formatDate";
import { ItemStyle } from "../styles";

const Repo = ({
  avatar,
  owner,
  name,
  description,
  issues,
  stars,
  url,
  createdAt
}) => {
  return (
    <ItemStyle>
      <div className="owner-avatar">
        <img src={avatar} alt="owner avatar" />
      </div>
      <div className="repo-information">
        <h2 className="repo-name">
          <a href={url} target="_blank" rel="noreferrer noopener">
            {name}
          </a>
        </h2>
        <p className="repo-description">{description}</p>
        <div>
          <div className="repo-stars">
            <span>Stars {stars}</span>
          </div>
          <div className="repo-issues">
             <span>Issues {issues}</span>
          </div>
          <div className="repo-submitted">
            {`Submitted ${getTime(createdAt.split("T")[0])} by `}
            <a href={`https://github.com/${owner}`} target="_blank"  rel="noopener noreferrer">{owner}</a>
          </div>
        </div>
      </div>
    </ItemStyle>
  );
};

export default Repo;
