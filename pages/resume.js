import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Resume.module.scss";

export default function Resume() {
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
      <header className="header">
        <div className="headerContainer">
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </header>

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
              <form method="get" action="./files/NicholasSummersResume2021.pdf">
                <button type="submit">Download Professional Resume</button>
              </form>
            </div>

            <div className={[styles.section, styles.education].join(" ")}>
              <h2>Education</h2>

              <article>
                <h3>Michigan State University</h3>
                <ul>
                  <li>Degree: Bachelor of Science</li>
                  <li>Study: Media and Information</li>
                </ul>
                <p>
                  I originally went to Michigan State for game design. Funny
                  thing about life, I never actually ended up going down that
                  route! However, I did continue down the route of web
                  development, graphic design, and video production. This was
                  awesome and fuelled my creative side, but I wanted something
                  more technical too. So..
                </p>
              </article>

              <article>
                <h3>Michigan State University</h3>
                <ul>
                  <li>Degree: Bachelor of Science</li>
                  <li>Study: Computer Science</li>
                </ul>
                <p>
                  I ended up dual degreeing in Computer Science to feed that
                  need to solve puzzles and technical challenges. From here I
                  was able to further explore web development and software
                  design. I also happened to win the Union Pacific Technical
                  Award for my capstone project!
                </p>
              </article>
            </div>

            <div className={[styles.section, styles.experience].join(" ")}>
              <h2> Experience </h2>
              <article>
                <h3>Student Web Developer</h3>
                <ul>
                  <li>Company: Michigan State University</li>
                  <li>Timeframe: Jan 2014 - May 2017</li>
                </ul>
                <p>
                  Create, manage, and update high-visibility MSU websites with
                  extensive use of PHP, Javascript, and MySQL. Optimize sites
                  for SEO, introduce responsive design, and hold sites to AA
                  accessibility compliance. Extensive use of Google API’s and
                  MSU API’s.
                </p>
                <h5>Achievements:</h5>
                <ul className={styles.achievements}>
                  <li>
                    Worked on MSU Search Services which consist of 5 web
                    properties averaging over 400,000 sessions per month.
                  </li>
                  <li>
                    Completely redesigned and maintained Maps.msu.edu which can
                    receive over 8,000 hits a day.
                  </li>
                  <li>
                    Created a Cascade template that all of MSU IT uses for new
                    websites.
                  </li>
                </ul>
              </article>

              <article>
                <h3>IT Intern</h3>
                <ul>
                  <li>Company: Kellogs</li>
                  <li>Timeframe: Apr. 2015 - Oct. 2015</li>
                </ul>
                <p>
                  Project manager and led teams to success on multiple projects
                  such as the creation of an API to be used by Kellogg’s IT
                  team. Intro- duced gamification to increase customer service
                  among the global employee help desks. Created wireframes,
                  empathy maps, and personas to increase usability of current
                  Kellogg websites.
                </p>
                <h5>Achievements:</h5>
                <ul className={styles.achievements}>
                  <li>
                    Oversaw, designed and created an API to help transition
                    Kellogg’s servers to Amazon Web Services.
                  </li>
                  <li>
                    Designed wireframes for Kellogg’s internal global employee
                    website that was approved by the CIO.
                  </li>
                </ul>
              </article>

              <article>
                <h3>Application Developer</h3>
                <ul>
                  <li>Company: Michigan State University</li>
                  <li>Timeframe: May. 2017 - May. 2019</li>
                </ul>
                <p>
                  Helped create, manage, and update MSU applications and
                  websites using VueJS, Java, Spring Boot 1.5, Thymeleaf,
                  jQuery, and Hibernate in a CI/CD pipeline. Continually worked
                  with customers to meet business needs and workflows. Built
                  templates for creating new APPS applications for use across
                  all MSU. Managed data and created dashboards using Cognos.
                </p>
                <h5>Achievements:</h5>
                <ul className={styles.achievements}>
                  <li>
                    Took over front-end work on Travelregistry.msu.edu and saw
                    the project to launch.
                  </li>
                  <li>
                    Built a web application from the ground up for the College
                    of Osteopathic Medicine, working on all areas of development
                    from requirements gathering to launch.
                  </li>
                </ul>
              </article>

              <article>
                <h3>Lead Mobile Developer/Designer</h3>
                <ul>
                  <li>Company: Michigan State University</li>
                  <li>Timeframe: May. 2019 - Nov. 2020</li>
                </ul>
                <p>
                  Took over design work and redesigned from the ground up for
                  the MSU Mobile App on iOS and Android. Met with students
                  continuously to discover pain points, introduce new features
                  and rediscover what it means to be a Spartan through the app.
                  Developed and implemented for both Apps using Kotlin and
                  Swift. Mentored students through the MSU Computer Science
                  Capstone course as a client and the iOS Design Lab as both a
                  speaker and judge for the event.
                </p>
                <h5>Achievements:</h5>
                <ul className={styles.achievements}>
                  <li>
                    Helped create and maintain the official MSU app, averaging
                    13,000 users a month and growing.
                  </li>
                  <li>
                    Partnered with Apple’s Design Lab to create wireframes for
                    future MSU apps
                  </li>
                  <li>
                    Revamped the Android app to use MVVM architecture,
                    introduced UI/Unit testing, and implemented new AndroidX
                    components
                  </li>
                </ul>
              </article>

              <article>
                <h3>Lead Developer/Student Manager </h3>
                <ul>
                  <li>Company: Rutgers University</li>
                  <li>Timeframe: 2019 - Now</li>
                </ul>
                <p>
                  Managed the front-end development for the brand new myRutgers
                  web portal and mobile app using React and Flutter
                  respectively. This application acts as a single point of
                  service for all areas of a student/faculty/staffs life across
                  4 different Rutgers campuses. In addition, I managed 3 student
                  teams of 3-4 students each and taught them effective git
                  strategies as well as a user-oriented development approach of
                  designing repeatedly with end users, creating small issues,
                  pull requests, and merges to test/production.
                </p>
                <h5>Achievements:</h5>
                <ul className={styles.achievements}>
                  <li>
                    Helped develop the official myRutgers app to be used by all
                    current students, faculty, and staff (Over 100,000+ users)
                  </li>
                  <li>
                    Led restructure of the app development across Rutgers
                    University to streamline app creation and maintenance on the
                    Google Play Store and App Store
                  </li>
                </ul>
              </article>
            </div>
          </div>

          <div className={styles.columnSub}>
            <div className={[styles.section, styles.skills].join(" ")}>
              <h2>Expectional Skills</h2>

              <article>
                <h4>Human-Oriented Design</h4>
                <p>
                  The core question is "Does this benefit the end user and hit
                  their core needs?". After having gone to Apple's Design Lab, I
                  look for this in every project I work on and always try and
                  make sure everything is tailored to the end user and what they
                  ask for.
                </p>
              </article>

              <article>
                <h4>Accessibile Code</h4>
                <p>
                  All the code I write I try and make sure is as accessible as
                  possible. Alt tags to screen readers, I try and follow WCAG
                  standards. I even used to do accessibility reviews for other
                  websites!
                </p>
              </article>

              <article>
                <h4>Coder + Designer</h4>
                <p>
                  "A jack of all trades is a master of none, but oftentimes
                  better than a master of one." I love doing both coding and
                  design, and I seek to improve both skills and incorporate them
                  into my work.
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
}
