const H2Bold = (props) => {
  return (
    <h2 className="text-xl lg:text-2xl text-darker font-semibold">
      {props.children}
    </h2>
  );
};

export default H2Bold;
