function Search () {
const [search, setSearch] = useState("")

return (
  <>
      <div>Cari Article: <input onChange={changeSearch}></input></div>
    <small>Ditemukan 0 data dengan pencarian kata {search}</small>
  </>
)
}
export default Search