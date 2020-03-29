import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import { L } from "../utils";

import "./projects.css";

const Label = ({ type }) => (
  <span className={`label ${type}`}>{labelToTitle(type)}</span>
);
Label.propTypes = {
  type: PropTypes.string.required,
};

class MusicPage extends React.Component {
  highSchool() {
    return (
      <>
        <h2>High School and Before</h2>
        <ul>
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
            , <i>Edges</i>. December 2012. Nominated for "Outstanding
            Performance by an Actor in a Featured Ensemble Role" at the{" "}
            <L to="https://www.5thavenue.org/images/pdfs/1213_5thAveAwards_Nominees_and_Recipients.pdf">
              2013 5th Avenue Awards
            </L>
            .
          </li>
          <li>
            <L to="https://www.youtube.com/watch?v=wMnfi-He0Uc&list=PLB0785C00EA91F358">
              Farewell
            </L>
            . February 2011. An original composition by my erstwhile band,
            Against the Flow!
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
      </>
    );
  }

  undergrad() {
    return (
      <>
        <h2>Undergrad</h2>
        <ul>
          <li>
            <L to="https://www.youtube.com/watch?v=q4qZKvpb4mU&list=PLB0785C00EA91F358">
              Iridescent
            </L>
            , <b>Linkin Park</b>. Summer 2017.
          </li>
        </ul>
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
  }

  joshiShow() {
    return (
      <>
        <h2>
          The Joshi Show{" "}
          <L
            style={{ boxShadow: "none" }}
            to="https://instagram.com/thejoshishow"
          >
            <img
              style={{ marginBottom: 0, maxHeight: 30 }}
              src="/images/instagram.png"
            />
          </L>
        </h2>
        <p>
          This is a little pet project of mine, where I cover Western pop songs
          in Indian classical style. Some love it, most hate it. I call it, "The
          Joshi Show".
        </p>
        <ul>
          <li>
            Episode 4.{" "}
            <L to="https://www.instagram.com/p/B7hAi-HlPVP/">Lovely</L> by
            Billie Eilish (Raag Asavari)
          </li>
          <li>
            Episode 3.{" "}
            <L to="https://www.instagram.com/p/B2UlUnWlfFT/">Skyfall</L> by
            Adele (Raag Asavari)
          </li>
          <li>
            Episode 2.{" "}
            <L to="https://www.instagram.com/p/BzHX2Usn06P/">Yesterday</L> by
            The Beatles (Raag Mishra Bilaaval)
          </li>
          <li>
            Episode 1.{" "}
            <L to="https://www.instagram.com/p/ByBgghknRPS/">How Long</L> by
            Charlie Puth (Raag Asavari)
          </li>
        </ul>
      </>
    );
  }

  render() {
    return (
      <Layout
        location={this.props.location}
        title="Music"
        description="My earliest and longest-living passion."
      >
        <ul>
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
            , <i>Swades</i>. January 26, 2019. In celebration of India's
            Republic Day 2019.
          </li>
        </ul>
        {this.joshiShow()}
        {this.undergrad()}
        {this.highSchool()}
      </Layout>
    );
  }
}

MusicPage.propTypes = {
  location: PropTypes.object,
};

export default MusicPage;
