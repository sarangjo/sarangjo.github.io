import React, { CSSProperties } from "react";
import Layout from "../components/layout";
import { PageProps } from "gatsby";
import { L } from "../utils";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle: CSSProperties = { verticalAlign: "baseline", overflow: "visible" };

export default function OriginalMusicPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Original Music"
      description="My dream of international fame is just one hit away..."
    >
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
        platforms! I had the utmost privilege of composing, performing, and producing the
        soundtrack. Thank you again to Esha for giving me this incredible opportunity!
      </p>
      <div style={{ display: "flex" }}>
        <figure style={{ margin: "auto" }}>
          <StaticImage
            src="../images/boxes.jpg"
            alt="Photo of Boxes crew at premiere"
            width={750}
          />
          <figcaption style={{ textAlign: "center" }}>
            A photo of the <i>Boxes</i> crew at the premiere, 7/27/24
          </figcaption>
        </figure>
      </div>
    </Layout>
  );
}
