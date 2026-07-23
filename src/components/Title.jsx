const Title = ({ title, des }) => {
  return (
    <>
      <div className="mx-auto flex flex-col items-center text-primary">
        <h1 className="text-header font-bold my-primary">{title}</h1>
        <p className="text-nav">{des}</p>
      </div>
    </>
  );
};

export default Title;
