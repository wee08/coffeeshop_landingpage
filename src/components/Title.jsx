const Title = ({ title, des, w, align }) => {
  return (
    <>
      <div className="mx-auto flex flex-col items-center text-primary">
        <h1 className="text-header font-bold my-primary">{title}</h1>
        <p
          className="text-nav mb-primary"
          style={{ width: `${w}px`, textAlign: align }}>
          {des}
        </p>
      </div>
    </>
  );
};

export default Title;
