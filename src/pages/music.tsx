import React from "react";

import Layout from "../components/layout";
import { L } from "../utils";

import "./projects.css";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "gatsby";

export default function MusicPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Music"
      description="My earliest and longest-living passion."
    >
      <ul>
        <li>
          <L to="https://www.youtube.com/watch?v=G9hRoPi983k">Numb</L>,{" "}
          <b>Linkin Park</b>, drum cover. July 2023.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=bL5LXOtVdQM">Back in Black</L>,{" "}
          <b>AC/DC</b>, drum cover. June 2023.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=GMvmfZ6w6Ws">
            Hymn for the Weekend
          </L>
          , <b>Coldplay</b>, drum cover. April 2023.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=M83aGZKBB9s">
            Fight for Your Right
          </L>
          , <b>Beastie Boys</b>, drum cover. February 2023.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=gWxVCKkrMTs&list=PLB0785C00EA91F358">
            Chunar
          </L>
          , <i>ABCD 2</i>. June 2019. Arranged and edited by Eshaan Gandhi.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=-ObQkl34lRA&list=PLB0785C00EA91F358">
            Where Do We Draw the Line
          </L>
          , <b>Poets of the Fall</b>. March 2019.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=h9WfWdRy_tE&list=PLB0785C00EA91F358">
            Yeh Jo Des (ft. Kavya Magham)
          </L>
          , <i>Swades</i>. January 26, 2019. In celebration of India&apos;s
          Republic Day 2019.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=q4qZKvpb4mU&list=PLB0785C00EA91F358">
            Iridescent
          </L>
          , <b>Linkin Park</b>. Summer 2017.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=ceG4IJUdsas&list=PLB0785C00EA91F358">
            Wonderwall (ft. Arjun Patel)
          </L>
          , <b>Oasis</b>. August 2014.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=APjHTYhBXBA&list=PLB0785C00EA91F358">
            All of Me (ft. Neeraja Bhagwat)
          </L>
          , <b>John Legend</b>. August 2014.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=bYVtDwPt82s&list=PLB0785C00EA91F358">
            Talk Dirty To Me (ft. my Jazz Choir friends)
          </L>
          , <b>Jason Derulo</b>. Summer 2014.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=lIYgb6FBe34&list=PLB0785C00EA91F358">
            Viva la Vida/Jashn-e-Bahaara
          </L>
          , <b>Penn Masala</b>. Spring 2013. Definitely foreshadowing for my
          South-Asian a cappella days!
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=oZjD6p00NQA&list=PLB0785C00EA91F358">
            Part of a Painting
          </L>
          , <i>Edges</i>. December 2012. Nominated for &quot;Outstanding
          Performance by an Actor in a Featured Ensemble Role&quot; at the{" "}
          <L to="https://www.5thavenue.org/images/pdfs/1213_5thAveAwards_Nominees_and_Recipients.pdf">
            2013 5th Avenue Awards
          </L>
          .
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=wMnfi-He0Uc&list=PLB0785C00EA91F358">
            Farewell
          </L>
          . February 2011. An original composition by my erstwhile band, Against
          the Flow!
        </li>
        <p>From family performances:</p>
        <li>
          <L to="https://www.youtube.com/watch?v=gjjT9nfSU5Y&list=PLB0785C00EA91F358">
            Gaaravaa
          </L>
          , <b>Milind Ingle</b>.
        </li>
        <li>
          <L to="https://soundcloud.com/sarang-joshi/tu-hi-hakeekat">
            Tu Hi Hakeekat
          </L>
          , <i>Tum Mile</i>.
        </li>
        <li>
          <L to="https://soundcloud.com/sarang-joshi/musafir-chalte-chalte">
            Musafir Chalte Chalte
          </L>
          , <b>Ghulam Ali</b>.
        </li>
        <li>
          <L to="https://www.youtube.com/watch?v=KQERT1iXzg4&list=PLB0785C00EA91F358">
            Tya Phulanchya Gandhakoshi
          </L>
          , <b>Hridaynath Mangeshkar</b>.
        </li>
      </ul>
      <JoshiShow />
      <Undergrad />
    </Layout>
  );
}

const Undergrad = () => (
  <>
    <h2>Undergrad</h2>
    <ul></ul>
    <p>Highlights from my UW Awaaz days:</p>
    <ul>
      <li>
        <L to="https://www.youtube.com/watch?v=o3QCeqIMWmA">
          Zara Sa/Jar of Hearts
        </L>
        , <i>Alankaar</i>
      </li>
    </ul>
  </>
);

const JoshiShow = () => (
  <>
    <h2>
      The Joshi Show{" "}
      <L style={{ boxShadow: "none" }} to="https://instagram.com/thejoshishow">
        <StaticImage
          style={{ marginBottom: 0, maxHeight: 30 }}
          src="../images/instagram.png"
          alt="insta"
          height={30}
        />
      </L>
    </h2>
    <p>
      This is a little pet project of mine, where I cover Western pop songs in
      Indian classical style. Some love it, most hate it. I call it, &quot;The
      Joshi Show&quot;.
    </p>
    <ul>
      <li>
        Episode 6.{" "}
        <L to="https://www.instagram.com/p/Cg2P98IJ3x6/">Run to You</L>,{" "}
        <b>Pentatonix</b> (Raag Sindh Bhairavi). August 4, 2022.
      </li>
      <li>
        Episode 5.{" "}
        <L to="https://www.instagram.com/p/COKIKeRhliD/">Scarborough Fair</L>,{" "}
        <b>Simon and Garfunkel</b> (Raag Kaafi). April 27, 2021.
      </li>
      <li>
        Episode 4. <L to="https://www.instagram.com/p/B7hAi-HlPVP/">Lovely</L>,{" "}
        <b>Billie Eilish</b> (Raag Asavari). January 19, 2020.
      </li>
      <li>
        Episode 3. <L to="https://www.instagram.com/p/B2UlUnWlfFT/">Skyfall</L>,{" "}
        <b>Adele</b> (Raag Asavari). September 12, 2019.
      </li>
      <li>
        Episode 2.{" "}
        <L to="https://www.instagram.com/p/BzHX2Usn06P/">Yesterday</L>,{" "}
        <b>The Beatles</b> (Raag Mishra Bilaaval). June 24, 2019.
      </li>
      <li>
        Episode 1. <L to="https://www.instagram.com/p/ByBgghknRPS/">How Long</L>
        , <b>Charlie Puth</b> (Raag Asavari). May 28, 2019.
      </li>
    </ul>
  </>
);
