import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

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
            <div id="explaination">
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

            <h2>Education</h2>

            <article>
              <h3>Michigan State University</h3>
              <ul>
                <li>Degree: Bachelor of Science</li>
                <li>Study: Computer Science</li>
              </ul>
              <p>
                This is me talking about my experience at Michigan State
                University. It was crazy. Much wow. Much doge.
              </p>
            </article>

            <article>
              <h3>Michigan State University</h3>
              <ul>
                <li>Degree: Bachelor of Science</li>
                <li>Study: Media and Information</li>
              </ul>
              <p>
                This is me talking about my experience at Michigan State
                University. It was crazy. Much wow. Much doge.
              </p>
            </article>

            <h2> Experience </h2>
            <article>
              <h3>Student Web Developer</h3>
              <ul>
                <li>Company: Michigan State University</li>
                <li>Timeframe: 2019 - Now</li>
              </ul>
            </article>

            <article>
              <h3>IT Intern</h3>
              <ul>
                <li>Company: Kellogs</li>
                <li>Timeframe: Apr. 2015 - Oct. 2015</li>
              </ul>
            </article>

            <article>
              <h3>Mobile Developer/Designer</h3>
              <ul>
                <li>Company: Michigan State University</li>
                <li>Timeframe: 2019 - Now</li>
              </ul>
            </article>

            <article>
              <h3>Application Developer III</h3>
              <ul>
                <li>Company: Rutgers University</li>
                <li>Timeframe: 2019 - Now</li>
              </ul>
            </article>
          </div>

          <div className={styles.columnSub}>
            <h2>Expectional Skills</h2>

            <article>
              <h4>Skill 1</h4>
              <p>Description of Skill</p>
            </article>

            <article>
              <h4>Skill 2</h4>
              <p>Description of Skill</p>
            </article>

            <article>
              <h4>Skill 3</h4>
              <p>Description of Skill</p>
            </article>

            <h2>Tools/Code of the Trade</h2>

            <article className={styles.tools}>
              <div className={styles.tool}>
                <a
                  href="https://developer.android.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                    alt="android"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Android </p>
              </div>
              <div className={styles.tool}>
                <a href="https://angular.io" target="_blank" rel="noreferrer">
                  <Image
                    src="https://angular.io/assets/images/logos/angular/angular.svg"
                    alt="angular"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Angular </p>
              </div>
              <div className={styles.tool}>
                <a href="https://babeljs.io/" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
                    alt="babel"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Babel </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://getbootstrap.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="bootstrap"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Bootstrap </p>
              </div>

              <div className={styles.tool}>
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />
                </a>
                <p> CSS3 </p>
              </div>
              <div className={styles.tool}>
                <a href="https://dart.dev" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                    alt="dart"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Dart </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    alt="express"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Express </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.figma.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                    alt="figma"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Figma </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                    alt="firebase"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Firebase </p>
              </div>
              <div className={styles.tool}>
                <a href="https://flutter.dev" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                    alt="flutter"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Flutter </p>
              </div>
              <div className={styles.tool}>
                <a href="https://graphql.org" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                    alt="graphql"
                    width="40"
                    height="40"
                  />
                </a>
                <p> GraphQL </p>
              </div>
              <div className={styles.tool}>
                <a href="https://gulpjs.com" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg"
                    alt="gulp"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Gulp </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />
                </a>
                <p> HTML5 </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.adobe.com/in/products/illustrator.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"
                    alt="illustrator"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Adobe Illustrator </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.invisionapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg"
                    alt="invision"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Invision </p>
              </div>
              <div className={styles.tool}>
                <a href="https://www.java.com" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                    alt="java"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Java </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Javascript </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://kotlinlang.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
                    alt="kotlin"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Kotlin </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://materializecss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg"
                    alt="materialize"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Materialize </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                    width="40"
                    height="40"
                  />
                </a>
                <p> MySQL </p>
              </div>
              <div className={styles.tool}>
                <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                  <Image
                    src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                    alt="nextjs"
                    width="40"
                    height="40"
                  />
                </a>
                <p> NextJS </p>
              </div>
              <div className={styles.tool}>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="40"
                    height="40"
                  />
                </a>
                <p> NodeJS </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.photoshop.com/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"
                    alt="photoshop"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Photoshop </p>
              </div>
              <div className={styles.tool}>
                <a href="https://www.php.net" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                    alt="php"
                    width="40"
                    height="40"
                  />
                </a>
                <p> PHP </p>
              </div>
              <div className={styles.tool}>
                <a href="https://postman.com" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="postman"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Postman </p>
              </div>
              <div className={styles.tool}>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />
                </a>
                <p> ReactJS </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://reactnative.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://reactnative.dev/Image/header_logo.svg"
                    alt="reactnative"
                    width="40"
                    height="40"
                  />
                </a>
                <p> React Native </p>
              </div>
              <div className={styles.tool}>
                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Redux </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://sass-lang.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                    alt="sass"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Sass </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.sketch.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg"
                    alt="sketch"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Sketch </p>
              </div>
              <div className={styles.tool}>
                <a href="https://spring.io/" target="_blank" rel="noreferrer">
                  <Image
                    src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                    alt="spring"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Spring </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="tailwind"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Tailwind </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="40"
                    height="40"
                  />
                </a>
                <p> TypeScript </p>
              </div>
              <div className={styles.tool}>
                <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
                    alt="vuejs"
                    width="40"
                    height="40"
                  />
                </a>
                <p> VueJS </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://vuetifyjs.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://bestofjs.org/logos/vuetify.svg"
                    alt="vuetify"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Vuetify </p>
              </div>
              <div className={styles.tool}>
                <a
                  href="https://webpack.js.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                    alt="webpack"
                    width="40"
                    height="40"
                  />
                </a>
                <p> Webpack </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
