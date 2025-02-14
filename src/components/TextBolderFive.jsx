function TextBolderFive({ children, className = "" }) {
  return (
    <h1
      className={`text-5xl leading-relaxed mb-2 md:text-4xl text-whiteMain text-center font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}

export default TextBolderFive;
