const Topic = ({ topic }) => {
    const { slug, description } = topic;

    return (
        <li key={slug} className="topic-card">
<div className="topic-details">
<h4>{slug}</h4></div>
    <div className="topic-img">
<img src={`/images/${slug}.jpeg`} />
</div>
</li>
      );
    }
    
    export default Topic;
    