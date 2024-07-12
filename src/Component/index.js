import "./index.css";
import faith from "./Images/faith.jpeg";

function Component() {
  return (
    <div className="container">
      <div className="contents">
        <img className="image" src={faith} alt="Faith" />
        <div>
          <h1>Faith Nyambura</h1>

          <h1>Kenyan</h1>
        </div>
      </div>

      <div className="section">
        <div>
          <div className="skills">
            <h2>Skills</h2>
            <p>Able to fetch APIs using JavaScript and React.</p>
            <p>Concepts in relational databases, SQL, and normalization.</p>
            <p>
              Knowledge of the git versions for collaboration and code
              management.
            </p>
            <p> Ability to work in groups and good communication skills.</p>
            <p>The basic concept in Android is activity, views, and intents.</p>
            <p>Knowledge in list traversal with Python and inheritance.</p>
            <p> Ability to create web development using Django.</p>
          </div>

          <div className="personal">
            <h2>Personal Statement</h2>
            <p>
              As a child, Faith was passionate about both art and technology.
              She has <br />
              always been curious about how technology can be used to improve
              the lives <br /> of artists, having witnessed the challenges
              artists face while growing up. <br />
              Faith aims to improve how art enthusiasts discover, engage with,
              <br /> and appreciate artworks, by bridging the gap between
              traditional artistry <br /> and modern technology.
            </p>
          </div>
        </div>

        <div>
          <div className="education">
            <h2>Education</h2>
            <p>AkiraChix.</p>
            <p> Mission is provide the most promising young women in Africa,
            with technology <br/>skills to compete economically and bridge the gender
            gap in tech.</p>
            <p>codeHive - Diploma In Information Technology.</p>
            <p>February 2024 -present</p>
           
          </div>

          <div className="project">
            <h2>Projects</h2>
            <p>
              I am working on a case study on tea farmers' interaction with
              mobile
              <br />
              money. We are in the building phase. We have so far created an{" "}
              <br />
              informational website that informs our users about our product and
              <br />
              the platform to find it.
              <p />I worked on a Python project that generates random Wikipedia
              <br />
              articles when prompted to.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p>Email: faithnyamburawamui@gmail.com</p>
        <p>Phonenumber: 078493234</p>
        <p>LinkedIn</p>
      </div>
    </div>
  );
}

export default Component;
