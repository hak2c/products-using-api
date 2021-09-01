import { memo } from "react";

function BlogPostContent({ post }) {
  const { id, image, title, introtext, tag, slug } = post;
  return (
    <div className="col-md-4 blogs--item">
      <img
        className="blog--image w-100"
        src={process.env.REACT_APP_API_URL + image}
        alt={title}
      />
      <div className="blog--info mt-5">
        <h3 className="blog--title">
          <a href={`blogs/${id}/${slug}`}>{title}</a>
        </h3>
        <p className="blog--introtext mb-4">{introtext}</p>
        <ul className="blog--tags">
          <li>
            <a href="#">{tag}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(BlogPostContent);
