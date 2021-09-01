import { memo, useEffect, useState } from "react";

import blogApi from "../../../api/blogApi";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CollectionsList from "../../../components/CollectionsList";
import BlogPostContent from "../components/BlogPostContent";
import PaginationContent from "../../../components/PaginationContent";

import banner from "../../../assets/images/new-arrivals_800x.jpg";

function MainPage() {
  const { REACT_APP_LIMIT_PER_PAGE } = process.env;
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    async function getBlogPosts() {
      const params = {
        _limit: REACT_APP_LIMIT_PER_PAGE,
        _page: page,
      };
      try {
        const response = await blogApi.getBlogs(params);
        if (response.status === 200) {
          setPosts(response.data);
          if (response.headers["x-total-count"]) {
            const total = response.headers["x-total-count"];
            setTotalPages(Math.ceil(Number(total) / REACT_APP_LIMIT_PER_PAGE));
          }
          setSpinner(false);
        } else {
          throw response.status + ":" + response.statusText;
        }
      } catch (error) {
        throw error.message;
      }
    }
    getBlogPosts();
  }, [page]);
  return (
    <>
      <main>
        <div className="page-image">
          <img src={banner} className="d-block w-100" alt="" />
        </div>

        <div className="container">
          <Breadcrumbs location="Blogs" />
          <div className="page-title">
            <h3>Blogs</h3>
          </div>

          {!spinner ? (
            <>
              <div className="row blogs">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <BlogPostContent key={post.id} post={post} />
                  ))
                ) : (
                  <div className="col-12 text-center">
                    <h3>No posts found.</h3>
                  </div>
                )}
              </div>
              {totalPages > 1 && (
                <PaginationContent
                  totalPages={totalPages}
                  page={page}
                  setPage={setPage}
                  setSpinner={setSpinner}
                />
              )}
            </>
          ) : (
            <div className="text-center" style={{ padding: "60px 0" }}>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </main>
      <CollectionsList />
    </>
  );
}

export default memo(MainPage);
