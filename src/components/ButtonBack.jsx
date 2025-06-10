const ButtonBack = (props) => {
  return (
    <button
      {...props}
      className="w-[10.625rem] hidden md:block  md:w-[13.75rem] h-[3.75rem]
                    border border-yellowMain text-yel mb-12 text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold duration-[400ms]"
    >
      {props.children}
    </button>
  );
};

export default ButtonBack;
