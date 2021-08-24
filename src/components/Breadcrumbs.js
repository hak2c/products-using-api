import { memo } from "react";

function Breadcrumbs({ location }) {
  function breadcrumbHtml() {
    return { __html: '<a href="index.html">Home</a> &gt; ' + location };
  }
  return (
    <section className="ot-breadcrumb">
      <div className="row">
        <div className="col-12" dangerouslySetInnerHTML={breadcrumbHtml()} />
      </div>
    </section>
  );
}
export default memo(Breadcrumbs);
