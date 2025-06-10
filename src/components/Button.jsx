const Button = (props) => {
  return (
    <button
      {...props}
      className="w-[18rem] md:w-[19rem] xxl:h-[3.5rem] h-[3.75rem] bg-yellowMain mb-8 mt-8 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold duration-[400ms]"
    >
      {props.children}
    </button>
  );
};

export default Button;
