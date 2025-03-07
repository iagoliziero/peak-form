const ButtonNext = (props) => {
    return ( 
        <button
        {...props}
        className="w-[18.75rem] md:visible-false md:w-[13.75rem] h-[3.75rem]
      bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold duration-[400ms]"
      >
        {props.children}
      </button>
     );
}
 
export default ButtonNext;