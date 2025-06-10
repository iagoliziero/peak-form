const ButtonTimer = (props) => {
  return (
    <button
      {...props}
      className="w-14 h-14 xxl:w-16 xxl:h-16 rounded-full items-center bg-darker flex justify-center text-whiteMain hover:scale-105 transition-all"
    >
      {" "}
      {props.children}
    </button>
  );
};

export default ButtonTimer;
