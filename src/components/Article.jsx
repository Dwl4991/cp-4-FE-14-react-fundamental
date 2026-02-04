function Article(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>Date : {props.date}, tags: {props.tags.join(",")} {props.isNew ? "-- Baru" : "lama"}

      </small>
      
    </>
  );
}
export default Article;
