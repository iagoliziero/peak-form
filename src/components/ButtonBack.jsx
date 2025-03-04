const ButtonBack = (props) => {
    return ( 
        <button
         {...props}
          className="w-[170px] hidden md:block  md:w-[220px] h-[60px]
                    border border-yellowMain text-yel mb-12 text-2xl rounded-lg text-yellowMain hover:scale-105 transition-all font-semibold"
        >
         { props.children}
        </button>
     );
}
 
export default ButtonBack;