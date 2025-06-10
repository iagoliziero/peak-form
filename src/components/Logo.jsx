const Logo = () => {
  return (
    <div className=" flex flex-col justify-center mt-16 gap-8">
      <span className="flex flex-col items-center">
        <img
          className="w-[9rem] md:w-[11rem] xl:w-[12rem]"
          src="../../public/logo.png"
          alt="logo"
        />
      </span>
    </div>
  );
};

export default Logo;
