import { useMemo, useState } from "react";
import StickyView from "./StickyView";
import ScrollContext from "./StickyContext";
import styles from "../styles/StickyView.module.scss";
import { getInterpolators } from "./StickyInterpolators";
import Link from "next/link";

export default function StickyHomePage() {
  const [scrollingElement, setScrollingElement] = useState(null);

  const {
    firstSectionForegroundInterpolator,
    firstSectionBackgroundInterpolator,
    firstSectionBackgroundImageInterpolator,
  } = useMemo(() => getInterpolators());

  function scrollingElRef(ref) {
    setScrollingElement(ref);
  }

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <div className={styles.scrollingView} ref={scrollingElRef}>
        <StickyView height={2800}>
          {(proportion) => (
            <div className={styles.basicStickyContent}>
              <div
                className={styles.scrollingStickyBackground}
                style={{
                  height: scrollingElement?.clientHeight,
                  ...firstSectionBackgroundInterpolator(proportion),
                }}
              >
                <img
                  src={"./images/outside-img.png"}
                  alt="Nicholas Summers' Workspace"
                  sizes="100vw"
                  className={styles.heroImage}
                  style={firstSectionBackgroundImageInterpolator(proportion)}
                />
                <div className={styles.firstSectionHeroWrapper}>
                  <div className={styles.firstSectionProfileImageContainer}>
                    <img
                      src={"./images/inside-image.jpeg"}
                      alt="Nicholas Summers Headshot"
                      className={styles.firstSectionProfileImage}
                    />
                  </div>
                  <div className={styles.firstSectionHeadingContainer}>
                    <h2 className={styles.firstSectionHeadingTitle}>Nicholas Summers</h2>
                    <div className={styles.firstSectionHeadingDescContainer}>
                      <h1 className={styles.firstSectionDescHeading}>Learning Everyday</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </StickyView>
        <section className={styles.container}>
          <div className={styles.projectContainer}>
            <h2 className={styles.projectHeader}>Projects</h2>
            <div className={styles.projects}>
              <div className={styles.project}>
                <a className={styles.projectUrl}>
                  <div className={styles.projectName}>
                    MSU Mobile App
                  </div>
                </a>
                <div className={styles.projectBackground}>
                  <img
                    src={"./images/msu-app.png"}
                    alt="MSU App"
                  />
                </div>
                <div className={styles.projectShadow}>
                  <img
                    src={"./images/msu-app.png"}
                    alt="MSU App"
                  />
                </div>
              </div>
              <div className={styles.project}>
                <a className={styles.projectUrl}>
                  <div className={styles.projectName}>
                    myRutgers App (Coming Soon!)
                  </div>
                </a>
                <div className={styles.projectBackground}>
                  <img
                    src={"./images/rutgers-app.png"}
                    alt="Rutgers Mobile App"
                  />
                </div>
                <div className={styles.projectShadow}>
                  <img
                    src={"./images/rutgers-app.png"}
                    alt="Rutgers Mobile App"
                  />
                </div>
              </div>
              <div className={styles.project}>
                <a className={styles.projectUrl} href="https://maps.msu.edu/interactive/index.php">
                  <div className={styles.projectNameDark}>
                    MSU Maps
                  </div>
                </a>
                <div className={styles.projectBackground}>
                  <img
                    src={"./images/maps-app.png"}
                    alt="maps.msu.edu Logo"
                  />
                </div>
                <div className={styles.projectShadow}>
                  <img
                    src={"./images/maps-app.png"}
                    alt="maps.msu.edu Logo"
                  />
                </div>
              </div>
              <div className={styles.project}>
                <a className={styles.projectUrl} href="https://search.msu.edu/index.php?q=Sparty#gsc.tab=0&gsc.q=Sparty&gsc.page=1">
                  <div className={styles.projectNameDark}>
                    Search MSU
                  </div>
                </a>
                <div className={styles.projectBackground}>
                  <img
                    src={"./images/search-app.png"}
                    alt="Search.msu.edu Logo"
                  />
                </div>
                <div className={styles.projectShadow}>
                  <img
                    src={"./images/search-app.png"}
                    alt="Search.msu.edu Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.resumeSection}>
          <h2 className={styles.resumeHeader}>Interested in learning more about me?</h2>
          <Link href="/resume">
            <a className={styles.resumeLink}>Check out my resume!</a>
          </Link>
        </section>
      </div>
    </ScrollContext.Provider>
  );
}
