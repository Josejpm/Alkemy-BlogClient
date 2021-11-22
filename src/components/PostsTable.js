import React from "react";
import { Table } from "react-bootstrap";
import { PostListItem } from "./PostListItem";

export const PostsTable = ({ currentPost }) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Post Title</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {currentPost.map((post, i) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </tbody>
    </Table>
  );
};
