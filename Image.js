function Image({ image, name }) {
  return (
    <img
      src={image}
      alt={name}
      width="250"
      className="card-img-top"
    />
  );
}

export default Image;