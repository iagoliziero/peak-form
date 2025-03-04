const ButtonNext = (props) => {
    return ( 
        <button
        {...props}
        className="w-[300px] md:visible-false md:w-[220px] h-[60px]
      bg-yellowMain mb-12 text-2xl rounded-lg hover:bg-orange hover:scale-105 transition-all font-semibold"
      >
        {props.children}
      </button>
     );
}
 
export default ButtonNext;