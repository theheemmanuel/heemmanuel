const Photos = () => {
  const options = {
    month: "long",
    day: "2-digit",
    year: "numeric",
  };
  const date = new Date().toLocaleDateString("en-us", options);
  return (
    <div>
      <div>{date}</div>
    </div>
  );
};

export default Photos;
