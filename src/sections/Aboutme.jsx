import avatar from '../assets/images/avatar.jpg'; 

const AboutMe = () => {
  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src={avatar} alt="Greg's Avatar" className="avatar" />
        <div>
          <p>
            Hello, my name is Gregory, and I am a web developer. My background is in graphic design, but I have been making the move towards the technical side of things. When not coding, I enjoy gaming, reading, playing guitar, and cinema.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;