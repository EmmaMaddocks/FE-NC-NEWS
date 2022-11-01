import { useEffect } from "react"
import { useState } from "react"
import  Topic  from './Topic'

function AllTopics() {
   
    const [isLoading, setIsLoading] = useState(true);
    const [topics, setTopics] = useState([]);


useEffect(() => {
    setIsLoading(true)
    fetch('https://em-nc-news.herokuapp.com/api/topics')
    .then((res) => res.json())
    .then((response) => {
        console.log(response)
        setTopics(response)
        setIsLoading(false)
    })
}, [setTopics])

if (isLoading) return <p>Loading...</p>



return (
    
    <div className="topic-container">
    <h3>Topics</h3>
    <div className="topic-list">

        {topics.map((topic) => {
            return (
            <Topic key={topic.slug} topic={topic}/>
   
            )
        })}

    </div>
    </div>
)

}

export default AllTopics