const H1 = (props) => {
    return (
        <h1 className="text-3xl md:text-4xl text-whiteMain text-center font-semibold">
            {" "}
            {props.children}
          </h1>
    )
}

export default H1;