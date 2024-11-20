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
      {/* <p>
        <L
          style={{ boxShadow: "none" }}
          to="https://open.spotify.com/artist/1KuragyqnYB74QWs0sMFwG"
        >
          <StaticImage style={imageStyle} src="../images/spotify.png" alt="spotify" height={22} />
        </L>
      </p>
      <L to="https://music.apple.com/us/artist/sarang-joshi/1098534301"></L> */}
      <h2>
        Boxes (Original Motion Picture Soundtrack){" "}
        <L style={{ boxShadow: "none" }} to="https://open.spotify.com/album/04A6086SpZ4gceJGaz98C9">
          <StaticImage style={imageStyle} src="../images/spotify.png" alt="Spotify" height={30} />
        </L>{" "}
        <L
          style={{ boxShadow: "none" }}
          to="https://music.youtube.com/playlist?list=OLAK5uy_kI0RHHL3qJkXQhGTrfAqEVtQ77rKQGTXM"
        >
          <StaticImage
            style={imageStyle}
            src="../images/ytmusic.png"
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
            src="../images/applemusic.png"
            alt="Apple Music"
            height={30}
          />
        </L>
      </h2>
      <i>Released November 19, 2024.</i> I'm beyond excited to share that the original soundtrack
      for the short film "<L to="https://www.instagram.com/boxes.thefilm/">Boxes</L>" by{" "}
      <L to="https://esha-more.com/filmmaker/">Esha More</L> is available on all streaming
      platforms! I had the utmost privilege of composing, performing, and producing the soundtrack.
      Thank you again to Esha for giving me this incredible opportunity!
    </Layout>
  );
}
