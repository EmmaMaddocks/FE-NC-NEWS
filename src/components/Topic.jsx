const Topic = ({ topic }) => {
    const { slug, description } = topic;

    return (
        <li key={slug} className="topic-card">
<div className="topic-details">
          <p>{slug}</p>
          <p>{description} </p>
          </div>
        </li>
      );
    }
    
    export default Topic;
    