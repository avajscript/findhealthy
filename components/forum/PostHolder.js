import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../data/colors";
import FullPostLine from "./FullPostLine";
const Cont = styled.div`
  .title-spec {
    border: 1px solid ${(props) => props.colors.darkPink};
    padding: 4px 8px;
    background-color: ${(props) => props.colors.tan};
  }
`;

const PostsSection = ({ title, posts }) => {
  console.log(posts);

  const [postLines, setPostLines] = useState(
    posts.map((post) => {
      return (
        <FullPostLine
          title={post.title}
          username={post.username}
          forum={post.forum}
          date={post.date}
          replies={post.replies}
          views={post.views}
          lastComment={post.lastComment}
        />
      );
    })
  );
  return (
    <Cont colors={COLORS}>
      <div className="title-spec">
        <h5 className="red text-shadow-red">{title}</h5>
      </div>
      <div>{postLines}</div>
    </Cont>
  );
};

export default PostsSection;
