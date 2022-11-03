import { useEffect } from "react";
import { useState } from "react";
import Topic from "./Topic";

function AllTopics({loggedInUser}) {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://em-nc-news.herokuapp.com/api/topics")
      .then((res) => res.json())
      .then((response) => {
        setTopics(response);
        setIsLoading(false);
      });
  }, [setTopics]);

  if (isLoading) return <p>Loading...</p>;

  return (
 <>
    <div className="topic-container">
      <div className="topic-list">
        {topics.map((topic) => {
          return <Topic key={topic.slug} topic={topic} />;
        })}
      </div>
    </div>
    </>
  );
}

export default AllTopics;
