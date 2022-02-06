import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Resume.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicholas Summers - Resume</title>
        <meta
          name="description"
          content="Nicholas Summers' Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Resume</h1>
        <div className={[styles.row, styles.rowLinks].join(" ")}>
          <div className={styles.columnThird}>
            <p>Email</p>
            <a href="mailto:ntsummers1@gmail.com?subject = Website&body = Message">
              ntsummers1@gmail.com
            </a>
          </div>
          <div className={styles.columnThird}>
            <p>Linkedin</p>
            <a href="https://www.linkedin.com/in/nicholas-summers-theo/">
              linkedin.com/in/nicholas-summers-theo
            </a>
          </div>
          <div className={styles.columnThird}>
            <p>GitHub</p>
            <a href="https://github.com/ntsummers1">github.com/ntsummers1</a>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.columnMain}>
            <div className={styles.section}>
              <h2> Preface</h2>
              <p>
                This resume tells the story of me and how I came into coding and
                development. This is so you can gain an understanding of how I
                got to where I am today. Think of it as looking at your
                instagram feed - reading oldest to newest. I also have your
                standard professional resume here should you prefer that format.
              </p>
              <button> Download Professional Resume </button>
            </div>

            <div className={[styles.section, styles.education].join(" ")}>
              <h2>Education</h2>

              <article>
                <h3>Michigan State University</h3>
                <ul>
                  <li>Degree: Bachelor of Science</li>
                  <li>Study: Computer Science</li>
                </ul>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident. Strip steak pork chop irure incididunt adipisicing
                  tongue elit sed quis pig buffalo eu burgdoggen swine veniam.
                  Labore shank flank esse burgdoggen corned beef.
                </p>
              </article>

              <article>
                <h3>Michigan State University</h3>
                <ul>
                  <li>Degree: Bachelor of Science</li>
                  <li>Study: Media and Information</li>
                </ul>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident. Strip steak pork chop irure incididunt adipisicing
                  tongue elit sed quis pig buffalo eu burgdoggen swine veniam.
                  Labore shank flank esse burgdoggen corned beef.
                </p>
              </article>
            </div>

            <div className={[styles.section, styles.experience].join(" ")}>
              <h2> Experience </h2>
              <article>
                <h3>Student Web Developer</h3>
                <ul>
                  <li>Company: Michigan State University</li>
                  <li>Timeframe: 2019 - Now</li>
                </ul>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident. Strip steak pork chop irure incididunt adipisicing
                  tongue elit sed quis pig buffalo eu burgdoggen swine veniam.
                  Labore shank flank esse burgdoggen corned beef.
                </p>
              </article>

              <article>
                <h3>IT Intern</h3>
                <ul>
                  <li>Company: Kellogs</li>
                  <li>Timeframe: Apr. 2015 - Oct. 2015</li>
                </ul>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident. Strip steak pork chop irure incididunt adipisicing
                  tongue elit sed quis pig buffalo eu burgdoggen swine veniam.
                  Labore shank flank esse burgdoggen corned beef.
                </p>
              </article>

              <article>
                <h3>Mobile Developer/Designer</h3>
                <ul>
                  <li>Company: Michigan State University</li>
                  <li>Timeframe: 2019 - Now</li>
                </ul>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident. Strip steak pork chop irure incididunt adipisicing
                  tongue elit sed quis pig buffalo eu burgdoggen swine veniam.
                  Labore shank flank esse burgdoggen corned beef.
                </p>
              </article>

              <article>
                <h3>Application Developer III</h3>
                <ul>
                  <li>Company: Rutgers University</li>
                  <li>Timeframe: 2019 - Now</li>
                </ul>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident. Strip steak pork chop irure incididunt adipisicing
                  tongue elit sed quis pig buffalo eu burgdoggen swine veniam.
                  Labore shank flank esse burgdoggen corned beef.
                </p>
              </article>
            </div>
          </div>

          <div className={styles.columnSub}>
            <div className={[styles.section, styles.skills].join(" ")}>
              <h2>Expectional Skills</h2>

              <article>
                <h4>Human-Oriented Design</h4>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident.
                </p>
              </article>

              <article>
                <h4>Skill 2</h4>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident.
                </p>
              </article>

              <article>
                <h4>Skill 3</h4>
                <p>
                  Spicy jalapeno bacon ipsum dolor amet meatloaf tri-tip
                  chislic, shoulder est chuck pork belly aute jowl shankle
                  cillum. Pig tongue kielbasa porchetta commodo chicken cupim
                  proident.
                </p>
              </article>
            </div>

            <div className={styles.section}>
              <h2>Tools/Code of the Trade</h2>

              <article className={styles.tools}>
                <div className={styles.tool}>
                  <p> Android </p>
                </div>
                <div className={styles.tool}>
                  <p> Angular </p>
                </div>
                <div className={styles.tool}>
                  <p> Babel </p>
                </div>
                <div className={styles.tool}>
                  <p> Bootstrap </p>
                </div>

                <div className={styles.tool}>
                  <p> CSS3 </p>
                </div>
                <div className={styles.tool}>
                  <p> Dart </p>
                </div>
                <div className={styles.tool}>
                  <p> Express </p>
                </div>
                <div className={styles.tool}>
                  <p> Figma </p>
                </div>
                <div className={styles.tool}>
                  <p> Firebase </p>
                </div>
                <div className={styles.tool}>
                  <p> Flutter </p>
                </div>
                <div className={styles.tool}>
                  <p> GraphQL </p>
                </div>
                <div className={styles.tool}>
                  <p> Gulp </p>
                </div>
                <div className={styles.tool}>
                  <p> HTML5 </p>
                </div>
                <div className={styles.tool}>
                  <p> Illustrator </p>
                </div>
                <div className={styles.tool}>
                  <p> Invision </p>
                </div>
                <div className={styles.tool}>
                  <p> Java </p>
                </div>
                <div className={styles.tool}>
                  <p> Javascript </p>
                </div>
                <div className={styles.tool}>
                  <p> Kotlin </p>
                </div>
                <div className={styles.tool}>
                  <p> Materialize </p>
                </div>
                <div className={styles.tool}>
                  <p> MySQL </p>
                </div>
                <div className={styles.tool}>
                  <p> NextJS </p>
                </div>
                <div className={styles.tool}>
                  <p> NodeJS </p>
                </div>
                <div className={styles.tool}>
                  <p> Photoshop </p>
                </div>
                <div className={styles.tool}>
                  <p> PHP </p>
                </div>
                <div className={styles.tool}>
                  <p> Postman </p>
                </div>
                <div className={styles.tool}>
                  <p> ReactJS </p>
                </div>
                <div className={styles.tool}>
                  <p> React Native </p>
                </div>
                <div className={styles.tool}>
                  <p> Redux </p>
                </div>
                <div className={styles.tool}>
                  <p> Sass </p>
                </div>
                <div className={styles.tool}>
                  <p> Sketch </p>
                </div>
                <div className={styles.tool}>
                  <p> Spring </p>
                </div>
                <div className={styles.tool}>
                  <p> Tailwind </p>
                </div>
                <div className={styles.tool}>
                  <p> TypeScript </p>
                </div>
                <div className={styles.tool}>
                  <p> VueJS </p>
                </div>
                <div className={styles.tool}>
                  <p> Vuetify </p>
                </div>
                <div className={styles.tool}>
                  <p> Webpack </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
