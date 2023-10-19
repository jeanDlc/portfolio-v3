const Hero = () => {
  return (
    <section>
      <h2>Frontend developer</h2>
      <ul>
        {["js", "css", "html", "react"].map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
