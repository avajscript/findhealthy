import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
const Cont = styled.div`
  border: 1px solid ${(props) => props.colors.grey};
  padding: 4px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.colors.lightBeige};

  &:hover {
    background-color: ${(props) => props.colors.midBeige};
  }
  .subtitles {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .recent-post-status {
    background-color: ${(props) => props.colors.midBeige};
    padding: 4px 8px;
    flex: one;
  }
  .x {
    width: 33%;
  }
`;
const ForumContent = ({ title, subTitles, postsX, lastPostDetails }) => {
  console.log(subTitles);
  console.log(lastPostDetails.date);
  return (
    <Cont colors={COLORS}>
      <div className="flex-one x">
        <p className="blue bold">{title}</p>
        <div className="subtitles">
          {subTitles.map((title) => {
            return <p className="inline-block mar-right-4">{title}, </p>;
          })}
        </div>
      </div>
      <div className="flex flex-one align-center">
        <p style={{ width: "80px" }}>{postsX} posts</p>
        <div className="recent-post-status">
          <p className="inline-block bold mar-right-4 small">Last post</p>
          <p className="inline-block small">by {lastPostDetails.username} </p>
          <p className="small">{lastPostDetails.category}</p>
          <p className="small">{lastPostDetails.date.toDateString()}</p>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faTurnUp}
        style={{ transform: "rotate(90deg)" }}
        className="icon-ssm blue mar-right-16 mar-left-16 hide-400"
      />
    </Cont>
  );
};

export default ForumContent;
