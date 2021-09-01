import { useState, useEffect, memo } from "react";

import blogApi from "../../../api/blogApi";

function LatestBlogs() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getBlogPosts() {
      const params = {
        _limit: 2,
        sort: "id",
        _order: "desc",
      };
      try {
        const response = await blogApi.getBlogs(params);
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          throw response.status + ":" + response.statusText;
        }
      } catch (error) {
        throw error.message;
      }
    }
    getBlogPosts();
  }, []);
  return (
    <section className="latest__blogs">
      {posts.length > 0 && (
        <div className="container">
          <div className="section-title text-center">
            <h2>From the Blog</h2>
          </div>
          <div className="row">
            {posts.map((post) => (
              <div className="col-md-6 blogs--item" key={post.id}>
                <img
                  className="blog--image w-100"
                  src={process.env.REACT_APP_API_URL + post.image}
                  alt={post.title}
                />
                <div className="blog--info">
                  <h3 className="blog--title">
                    <a href={`blogs/${post.id}/${post.slug}`}>{post.title}</a>
                  </h3>
                  <p className="blog--created mb-3">
                    Posted on {post.created_at}
                  </p>
                  <p className="introtext">{post.introtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(LatestBlogs);
