function SortArticles() {

    handleSubmit = (event) => {
        event.preventDefault()


      }

      handleChange = (event) => {
        event.preventDefault()

      }


        return (
          <form onSubmit={handleSubmit} className="sortOptions">
            <select className="options" name="sort_by" onChange={handleChange}>
              <option value='created_at'>Date</option>
              <option value='comment_count'>Comment Count</option>
              <option value='votes'>Votes</option>
            </select>
            <select className="options" name="order" onChange={handleChange}>
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
            <button className="options button">SORT</button>
          </form>
        );


    }

    export default SortArticles
