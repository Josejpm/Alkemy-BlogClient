import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Container, Pagination } from "react-bootstrap";

//Components
import { NavBar } from "../components/NavBar";
import { PostListItem } from "../components/PostListItem";

//Redux
import { fetchPosts,getPostById,deletePost,editPost,newPost} from "../redux/slices/posts";

const Dashboard = () => {

  const state = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(fetchPosts());
    
  }, []);

  const perPage = 5;

  const [actualPage, setActualPage] = useState(1);

  const lastIndex = perPage * actualPage;
  const firstIndex = lastIndex - perPage;
  const currentPost = state.posts.slice(firstIndex, lastIndex);

  return (
    <Fragment>
      <NavBar />
      <Container md="fluid">
        <h1>Your Alkemy Blog posts</h1>
        <Table striped hover>
          <thead>
            <tr>
              <th>Post Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPost.map((post, i) => (
              <PostListItem key={post.id} post={post} />
            ))}
          </tbody>
        </Table>

        <Pagination>
          <Pagination.First />
          <Pagination.Prev onClick={() => setActualPage(actualPage - 1)} />
          {/* <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis /> */}

          <Pagination.Item active>{actualPage}</Pagination.Item>

          {/* <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item> */}
          <Pagination.Next onClick={() => setActualPage(actualPage + 1)} />
          <Pagination.Last />
        </Pagination>
      </Container>
    </Fragment>
  );
};

export default Dashboard;
