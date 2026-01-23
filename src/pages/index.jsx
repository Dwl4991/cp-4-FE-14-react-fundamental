import posts from "../post.json"
import Article from "../components/Article"
import Search from "../components/Search"
function Homepage() {
  const [search, setSearch] = useState("")

  const changeSearch = (event) => {
    setSearch (event.target.value);
  }
  return(
    <>
    <h1>Simple Blog</h1>
    <Search />
    {posts.map((props, index) => (
     
      <Article {...props} key={index} />
    ))}
    </>
  );
}
export default Homepage;