import { memo, useState, useEffect } from "react";
import { useParams } from "react-router";

import blogApi from "../../../api/blogApi";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CollectionsList from "../../../components/CollectionsList";

function SinglePostPage() {
  const { blogId } = useParams();
  const [post, setPost] = useState({});
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    async function getSinglePost() {
      const params = {
        id: blogId,
      };
      try {
        const response = await blogApi.getBlogs(params);
        if (response.status === 200) {
          setPost(response.data[0]);
          document.title = response.data[0].title;
          setSpinner(false);
        } else {
          throw response.status + ":" + response.statusText;
        }
      } catch (error) {
        throw error.message;
      }
    }
    getSinglePost();
  }, [blogId]);

  function postContent(content) {
    return { __html: content };
  }

  return (
    <>
      <main>
        <div className="container">
          <Breadcrumbs location={post.title} />
          <div className="page-title">
            <h3>{post.title}</h3>
          </div>
          {!spinner ? (
            <div className="post-container mx-auto">
              <div className="post--image mb-4">
                <img
                  className="w-100"
                  src={process.env.REACT_APP_API_URL + post.image}
                  alt={post.title}
                />
              </div>
              <div
                className="post--details mb-4 pb-4"
                dangerouslySetInnerHTML={postContent(post.content)}
              ></div>
              <p className="post-author">{post.author}</p>
              <p className="post-created">Post on {post.created_at}</p>
            </div>
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

export default memo(SinglePostPage);
