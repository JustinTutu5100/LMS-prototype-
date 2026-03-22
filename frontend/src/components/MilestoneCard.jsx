// MilestoneCard.jsx
export default function MilestoneCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}