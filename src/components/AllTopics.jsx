import { useEffect } from "react";
import { useState } from "react";
import Topic from "./Topic";
import Loading from "./Loading";

function AllTopics() {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fair-blue-ladybug-wear.cyclic.app/api/topics")
      .then((res) => res.json())
      .then((response) => {
        setTopics(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);


  if (isLoading) return <Loading />;

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
