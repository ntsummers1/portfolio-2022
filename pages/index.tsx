import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {


  return (
    <div className={styles.container}>
      <Head>
        <title>Nicholas Summers Portfolio</title>
        <meta
          name="description"
          content="Nicholas Summers' Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <p style={{height: '400vh'}}>
            Bacon ipsum dolor amet short ribs tri-tip pancetta frankfurter
            jerky, ham salami bacon swine fatback pork belly. Short ribs
            hamburger buffalo, ribeye pancetta drumstick burgdoggen beef ribs.
            Pork loin ball tip cupim, hamburger tail leberkas spare ribs
            prosciutto landjaeger pastrami corned beef pancetta sirloin fatback.
            Jerky jowl frankfurter landjaeger boudin beef meatloaf short loin
            picanha. Cow tail doner hamburger swine pancetta pastrami. Pork
            belly sausage pastrami, strip steak turducken boudin brisket jowl
            kielbasa ribeye capicola pig hamburger fatback shankle. Porchetta
            andouille buffalo frankfurter leberkas bacon jowl corned beef
            picanha biltong sausage kielbasa alcatra boudin salami. Landjaeger
            biltong ham hock, tenderloin pork loin porchetta pork belly ball tip
            prosciutto flank cupim short loin pancetta salami short ribs. Short
            ribs capicola ham, short loin chuck beef brisket. Rump pork loin
            flank swine chicken meatball leberkas jerky ball tip hamburger
            ribeye porchetta buffalo ground round shoulder. Leberkas landjaeger
            turkey, boudin bresaola ham hock fatback strip steak beef. Pastrami
            turducken jerky brisket filet mignon prosciutto biltong shank. Tail
            meatball ham burgdoggen pancetta biltong. Chislic hamburger turkey,
            beef ribs t-bone alcatra ham hock shank shankle sirloin. T-bone pork
            loin andouille capicola brisket pancetta. Capicola prosciutto
            brisket venison chicken bresaola chuck pork loin. Hamburger brisket
            t-bone beef drumstick pork doner pork loin frankfurter chislic
            flank. Pork loin ham sausage picanha. Leberkas meatloaf pork beef
            ribs landjaeger sausage chicken tenderloin tri-tip biltong. Doner
            cow shank, salami pork loin rump tri-tip filet mignon ham hock
            turkey pork. Bacon jerky salami pancetta, kevin turducken tail
            turkey ball tip sirloin sausage. Porchetta hamburger pork flank
            andouille. Filet mignon tri-tip andouille t-bone, jowl alcatra flank
            burgdoggen meatball sausage ham pork belly ham hock meatloaf. Short
            loin filet mignon tongue, cow biltong capicola cupim salami
            turducken strip steak pork chop doner pork loin bacon. Ground round
            leberkas doner turkey, meatball cupim brisket flank porchetta
            meatloaf. Frankfurter ground round meatloaf, turkey bacon cupim
            rump. Bacon pork corned beef, pork belly ham prosciutto venison
            andouille meatball. Ham hock pig buffalo meatloaf picanha filet
            mignon ball tip spare ribs. Chicken turkey meatball hamburger swine
            tri-tip pork loin chuck filet mignon turducken buffalo salami.
          </p>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
