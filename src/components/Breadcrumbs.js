export default function Breadcrumbs({ location }) {
  return (
    <section className="ot-breadcrumb">
      <div className="row">
        <div className="col-12">
          <a href="index.html">Home</a> &gt; {location}
        </div>
      </div>
    </section>
  );
}
