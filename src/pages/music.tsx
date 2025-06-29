import React, { CSSProperties } from "react";
import Layout from "../components/layout";
import { L } from "../utils";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps } from "gatsby";

const imageHeight = 30;
const imageStyle: CSSProperties = { verticalAlign: "baseline", overflow: "visible" };

// NOTE: We stick with StaticImage because it's not too much redundant code. We can't extract this
// into a common component because StaticImage requires the source to be available at build time.

const Covers = () => (
  <>
    <h2>Covers</h2>
    <p>
      <b>Key:</b> 🎤 sung, 🥁 drummed, 🎹 played piano/keys/harmonium, 📝 arranged, 🎛️
      produced/edited, 🤝 collaboration, 🍿 live performance, 🎭 theater performance.
    </p>
    <ul>
      <li>
        <L to="https://www.youtube.com/watch?v=mSkepszV1cM">Mind Over Matter</L>,{" "}
        <b>Young the Giant</b>. June 2025. 🥁
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=OT1XhD7vTQs">
          Happy Little Pill/Kanulanu Thaake (ft. Kavya)
        </L>
        , <b>Troye Sivan/Arijit Singh</b>. March 2025. 🎤📝🎛️🤝
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=2IhgEnV5P4k">Maps</L>, <b>Yeah Yeah Yeahs</b>.
        February 2025. 🥁
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=6HsxFXTFgQU">Psycho (no sergeant version)</L>,{" "}
        <b>Muse</b>. October 2024. 🥁
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=wTPBzeHWEIs">La Grange</L>, <b>ZZ Top</b>. May 2024.
        🥁
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=t1hE3whHe0k">Cane Shuga</L>, <b>Glass Animals</b>.
        January 2024. 🎤🥁🎹🎛️
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=DmnnxQs1KFE">Californication</L>,{" "}
        <b>Red Hot Chili Peppers</b>. November 2023. 🥁🍿
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=G9hRoPi983k">Numb</L>, <b>Linkin Park</b>. July 2023.
        🥁
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=bL5LXOtVdQM">Back in Black</L>, <b>AC/DC</b>. June
        2023. 🥁🍿
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=GMvmfZ6w6Ws">Hymn for the Weekend</L>,{" "}
        <b>Coldplay</b>. April 2023. 🥁
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=M83aGZKBB9s">Fight for Your Right</L>,{" "}
        <b>Beastie Boys</b>. February 2023. 🥁
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=gWxVCKkrMTs&list=PLB0785C00EA91F358">Chunar</L>,{" "}
        <i>ABCD 2</i>. June 2019. Arranged and edited by Eshaan Gandhi. 🎤🤝
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=-ObQkl34lRA&list=PLB0785C00EA91F358">
          Where Do We Draw the Line
        </L>
        , <b>Poets of the Fall</b>. March 2019. 🎤🎹
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=h9WfWdRy_tE&list=PLB0785C00EA91F358">
          Yeh Jo Des (ft. Kavya Magham)
        </L>
        , <i>Swades</i>. January 26, 2019. In celebration of India&apos;s Republic Day 2019. 🎤🤝
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=q4qZKvpb4mU&list=PLB0785C00EA91F358">Iridescent</L>,{" "}
        <b>Linkin Park</b>. Summer 2017. 🎤🎹
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=ceG4IJUdsas&list=PLB0785C00EA91F358">
          Wonderwall (ft. Arjun Patel)
        </L>
        , <b>Oasis</b>. August 2014. 🎤🤝
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=APjHTYhBXBA&list=PLB0785C00EA91F358">
          All of Me (ft. Neeraja Bhagwat)
        </L>
        , <b>John Legend</b>. August 2014. 🎤🤝
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=bYVtDwPt82s&list=PLB0785C00EA91F358">
          Talk Dirty To Me (ft. my Jazz Choir friends)
        </L>
        , <b>Jason Derulo</b>. Summer 2014. 🎤🤝
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=lIYgb6FBe34&list=PLB0785C00EA91F358">
          Viva la Vida/Jashn-e-Bahaara
        </L>
        , <b>Penn Masala</b>. Spring 2013. Definitely foreshadowing for my South-Asian a cappella
        days! 🎤🍿
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=oZjD6p00NQA&list=PLB0785C00EA91F358">
          Part of a Painting
        </L>
        , <i>Edges</i>. December 2012. Nominated for &quot;Outstanding Performance by an Actor in a
        Featured Ensemble Role&quot; at the{" "}
        <L to="https://web.archive.org/web/20200530190606/https://www.5thavenue.org/images/pdfs/1213_5thAveAwards_Nominees_and_Recipients.pdf">
          2013 5th Avenue Awards
        </L>
        . 🎤🍿🎭
      </li>
      <p>From family performances:</p>
      <li>
        <L to="https://www.youtube.com/watch?v=gjjT9nfSU5Y&list=PLB0785C00EA91F358">Gaaravaa</L>,{" "}
        <b>Milind Ingle</b>. c. 2009-2011. 🎤🤝
      </li>
      <li>
        <L to="https://soundcloud.com/sarang-joshi/tu-hi-hakeekat">Tu Hi Hakeekat</L>,{" "}
        <i>Tum Mile</i>. c. 2009-2011. 🎤🤝
      </li>
      <li>
        <L to="https://soundcloud.com/sarang-joshi/musafir-chalte-chalte">Musafir Chalte Chalte</L>,{" "}
        <b>Ghulam Ali</b>. c. 2009-2011. 🎤🤝
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=KQERT1iXzg4&list=PLB0785C00EA91F358">
          Tya Phulanchya Gandhakoshi
        </L>
        , <b>Hridaynath Mangeshkar</b>. c. 2009-2011. 🎤🤝
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
          style={imageStyle}
          src="../logos/instagram.png"
          alt="insta"
          height={imageHeight}
        />
      </L>
    </h2>
    <p>
      This is a little pet project of mine, where I cover Western pop songs in Indian classical
      style. Some love it, most hate it. I call it, &quot;The Joshi Show&quot;.
    </p>
    <ul>
      <li>
        Episode 6. <L to="https://www.instagram.com/p/Cg2P98IJ3x6/">Run to You</L>,{" "}
        <b>Pentatonix</b> (Raag Sindh Bhairavi). August 4, 2022.
      </li>
      <li>
        Episode 5. <L to="https://www.instagram.com/p/COKIKeRhliD/">Scarborough Fair</L>,{" "}
        <b>Simon and Garfunkel</b> (Raag Kaafi). April 27, 2021.
      </li>
      <li>
        Episode 4. <L to="https://www.instagram.com/p/B7hAi-HlPVP/">Lovely</L>, <b>Billie Eilish</b>{" "}
        (Raag Asavari). January 19, 2020.
      </li>
      <li>
        Episode 3. <L to="https://www.instagram.com/p/B2UlUnWlfFT/">Skyfall</L>, <b>Adele</b> (Raag
        Asavari). September 12, 2019.
      </li>
      <li>
        Episode 2. <L to="https://www.instagram.com/p/BzHX2Usn06P/">Yesterday</L>,{" "}
        <b>The Beatles</b> (Raag Mishra Bilaaval). June 24, 2019.
      </li>
      <li>
        Episode 1. <L to="https://www.instagram.com/p/ByBgghknRPS/">How Long</L>,{" "}
        <b>Charlie Puth</b> (Raag Asavari). May 28, 2019.
      </li>
    </ul>
  </>
);

const Awaaz = () => (
  <>
    <h2>
      UW Awaaz{" "}
      <L style={{ boxShadow: "none" }} to="https://instagram.com/uwawaaz">
        <StaticImage
          style={imageStyle}
          src="../logos/instagram.png"
          alt="insta"
          height={imageHeight}
        />
      </L>
    </h2>
    <p>
      UW Awaaz is the premier South-Asian fusion a cappella group at the University of Washington. I
      was on the team from 2014 to 2018. I was on the Arranging Committee from 2015 onwards, and was
      Musical Director from 2016 to 2018. I've highlighted a few of my favorite songs below!
    </p>
    <h3>2017-18 (Musical Director)</h3>
    <p>
      For my final year on the team, we recorded our fourth studio album, which I am in the process
      of locating.
    </p>
    <ul>
      <li>
        Numb/Ae Dil Hai Mushkil (<L to="https://www.youtube.com/watch?v=dsTxr04SnWo">Aarohi 2018</L>
        ). Soloist for Ae Dil Hai Mushkil.
      </li>
      <li>
        Cry Me a River/Dastaan-E-Om Shanti Om (
        <L to="https://www.youtube.com/watch?v=9lNfMQ9p53w">Aarohi 2018</L>). Soloist for
        Dastaan-E-Om Shanti Om.
      </li>
      <li>
        Senior Song (<L to="https://www.youtube.com/watch?v=VuenTfiURj4">Aarohi 2018</L>). A
        10-minute tour de force which charts the stories of the four seniors who graduated in 2018.
      </li>
    </ul>
    <h3>2016-17 (Musical Director)</h3>
    <p>
      An exciting project this year was{" "}
      <b>
        <L to="https://www.youtube.com/watch?v=ifRN2lJgktU&list=PLEwKvRIp2FHIlSDTHXBhOLTvWf-iwk4nk">
          Expressions
        </L>
      </b>
      , which was a collaborative showcase with <L to="https://natyauw.weebly.com/">Natya UW</L>,
      the University of Washington's premier Indian classical dance team. We also recorded our third
      studio album,{" "}
      <i>
        <L to="https://www.youtube.com/playlist?list=PLEwKvRIp2FHK2a2DxudZOP8dPMl31oZZQ">Avrutti</L>
      </i>
      .
    </p>
    <ul>
      <li>
        Summertime Sadness/Tujhe Bhula Diya (
        <L to="https://www.youtube.com/watch?v=DncMpQoxO3E&list=PLEwKvRIp2FHK2a2DxudZOP8dPMl31oZZQ">
          Studio recording
        </L>
        ) (<L to="https://youtu.be/fvaBi5SdTTA?si=LW1C-ID4yJXhRfbr&t=445">Desi Dhamaka 2017</L>
        ).
      </li>
      <li>
        Tanhayee (
        <L to="https://www.youtube.com/watch?v=jpJ0wDx1RBc&list=PLEwKvRIp2FHK2a2DxudZOP8dPMl31oZZQ">
          Studio recording
        </L>
        ) (
        <b>
          <L to="https://www.youtube.com/watch?v=7AikuWcaN40">Expressions</L>
        </b>
        ). Soloed in live performances in the second half of the year.
      </li>
      <li>
        Bravery (
        <b>
          <L to="https://www.youtube.com/watch?v=asueECOrvqg&list=PLEwKvRIp2FHIlSDTHXBhOLTvWf-iwk4nk">
            Expressions
          </L>
        </b>
        ). UW Awaaz's first ever fully original composition, an instrumental piece depicting a story
        of immigrants leaving their homes for a new land.
      </li>
    </ul>
    <h3>2015-16</h3>
    <p>
      This year, we competed at Anahat 2015 and placed 3rd, which was UW Awaaz's first ever
      competitive top-3 placing! We also recorded our second studio album,{" "}
      <i>
        <L to="https://www.youtube.com/playlist?list=PLEwKvRIp2FHKWgP0w4sFPTiAlp4rUJSMU">
          Alankaar
        </L>
      </i>
      .
    </p>
    <ul>
      <li>
        Bhare Naina (
        <L to="https://www.youtube.com/watch?v=tCri7QeYBDA&list=PLEwKvRIp2FHKWgP0w4sFPTiAlp4rUJSMU">
          Studio recording
        </L>
        ) (<L to="https://www.youtube.com/watch?v=6jbcj07p5nM">Anahat 2015</L>).
      </li>
      <li>
        Zara Sa/Jar of Hearts (
        <L to="https://www.youtube.com/watch?v=o3QCeqIMWmA&list=PLEwKvRIp2FHKWgP0w4sFPTiAlp4rUJSMU">
          Studio recording
        </L>
        ) (<L to="https://youtu.be/6jbcj07p5nM?si=E8TLTLxllnbZmktt&t=326">Anahat 2015</L>
        ). Soloist for Zara Sa.
      </li>
    </ul>
    <h3>2014-15</h3>
    <p>
      This was the first year we did studio recordings, producing our first album{" "}
      <i>
        <L to="https://www.youtube.com/playlist?list=PLEwKvRIp2FHLpKx-14-_-AueQFHdSBDzz">
          Studio Sessions
        </L>
      </i>
      .
    </p>
    <ul>
      <li>
        Show Me the Meaning of Being Lonely (<L to="https://youtu.be/entlODZjEXU">Aarohi 2015</L>).
      </li>
      <li>
        Aadat/Ain't No Sunshine (
        <L to="https://www.youtube.com/watch?v=RajZ5iBNxtY&list=PLEwKvRIp2FHLpKx-14-_-AueQFHdSBDzz">
          Studio recording
        </L>
        ).
      </li>
      <li>
        Kannodu Kanbathellam (
        <L to="https://www.youtube.com/watch?v=eJeWb41Kr7k&list=PLEwKvRIp2FHLpKx-14-_-AueQFHdSBDzz">
          Studio recording
        </L>
        ).
      </li>
    </ul>
  </>
);

const AgainstTheFlow = () => (
  <>
    <h2>Against the Flow</h2>
    <p>
      <b>Against the Flow</b> was my band in 2011, comprised of myself on vocals, Siddharth Damle on
      piano, and Arjun Patel on guitar.
    </p>
    <ul>
      <li>
        <L to="https://soundcloud.com/against-the-flow-1/hey-there-delilah-sa">Hey There Delilah</L>
        , <b>Plain White T's</b>. April 2011.
      </li>
      <li>
        <L to="https://www.youtube.com/watch?v=wMnfi-He0Uc&list=PLB0785C00EA91F358">Farewell</L>,{" "}
        <b>Against the Flow</b>. February 2011. This is an original composition that we wrote in 9th
        standard for the farewell ceremony of the 10th standard class.
      </li>
    </ul>
  </>
);

const OriginalMusic = () => (
  <>
    <h2>
      Boxes (Original Motion Picture Soundtrack){" "}
      <L style={{ boxShadow: "none" }} to="https://open.spotify.com/album/04A6086SpZ4gceJGaz98C9">
        <StaticImage style={imageStyle} src="../logos/spotify.png" alt="Spotify" height={30} />
      </L>{" "}
      <L
        style={{ boxShadow: "none" }}
        to="https://music.youtube.com/playlist?list=OLAK5uy_kI0RHHL3qJkXQhGTrfAqEVtQ77rKQGTXM"
      >
        <StaticImage
          style={imageStyle}
          src="../logos/ytmusic.png"
          alt="YouTube Music"
          height={30}
        />
      </L>{" "}
      <L
        style={{ boxShadow: "none" }}
        to="https://music.apple.com/us/album/boxes-original-motion-picture-soundtrack/1780796007"
      >
        <StaticImage
          style={imageStyle}
          src="../logos/applemusic.png"
          alt="Apple Music"
          height={30}
        />
      </L>
    </h2>
    <p>
      <i>Released November 19, 2024.</i> I'm beyond excited to share that the original soundtrack
      for the short film "<L to="https://www.instagram.com/boxes.thefilm/">Boxes</L>" by{" "}
      <L to="https://esha-more.com/filmmaker/">Esha More</L> is available on all streaming
      platforms! I had the utmost privilege of composing, performing, and producing the soundtrack.
      Thank you again to Esha for giving me this incredible opportunity!
    </p>
    <div style={{ display: "flex" }}>
      <figure style={{ margin: "auto" }}>
        <StaticImage src="../images/boxes.jpg" alt="Photo of Boxes crew at premiere" width={750} />
        <figcaption style={{ textAlign: "center" }}>
          A photo of the <i>Boxes</i> crew at the premiere, 7/27/24
        </figcaption>
      </figure>
    </div>
  </>
);

export default function MusicPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Music"
      description="My earliest and longest-living passion."
    >
      <Covers />
      <JoshiShow />
      <OriginalMusic />
      <Awaaz />
      <AgainstTheFlow />
    </Layout>
  );
}
