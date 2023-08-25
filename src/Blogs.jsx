import React, { useContext } from "react";
import { styled } from "styled-components";
import { blogs } from "./utils/common";
import { Context } from "./globalContext";
import useDebounce from "./utils/DeboucedValue";
import AdvancedExample from "./Bootstrap/Pegination";

function Blogs() {
  const context = useContext(Context);
  const [searchText, isLoading] = useDebounce(context.searchText);
  return (
    <>
      {isLoading && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width="50%" height="50%" src="giphy.gif" />
        </div>
      )}

      <Container>
        {blogs.map(
          (blog, idx) =>
            (String(blog.title.toLowerCase()).match(
              String(searchText).toLowerCase()
            ) ||
              String(blog.desc.toLowerCase()).match(
                String(searchText).toLowerCase()
              )) && (
              <BlogWrapper>
                <Image src={blog.src} />
                <Title>{blog.title}</Title>
                <Description>{blog.desc}</Description>
              </BlogWrapper>
            )
        )}
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AdvancedExample />
      </div>
    </>
  );
}

const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

const Description = styled.div`
  font-size: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Title = styled.div`
  font-size: 30px;
`;

export default Blogs;
