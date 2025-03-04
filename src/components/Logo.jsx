const Logo = () => {
    return (
        <div className=" flex flex-col justify-center mt-16 lg:mt-0 gap-8">
        <span className="flex flex-col items-center">
          <img
            className="w-[11rem] md:w-[13rem] xl:w-[14rem]"
            src="src/public/logo.png"
            alt="logo"
          />
        </span>
      </div>
    )
}

export default Logo;