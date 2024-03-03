const CollaborationCard = ({ title, content }) => {
  return (
    <div className="lg:my-10 my-6 px-6 pt-">
      <h3 className="text-2xl mb-3 lg:mb-7 font-bold tracking-tighter text-primary">
        {title}
      </h3>
      <p className="text-lg text-primary/60">{content}</p>
    </div>
  );
};

export default CollaborationCard;
