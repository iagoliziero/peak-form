function H1Three({ children, className = "" }) {
  return (
    <h1
      className={`text-3xl md:text-4xl lg:text-5xl text-whiteMain text-center font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}

export default H1Three;
