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
        <L style={{ boxShadow: "none" }} to="https://open.spotify.com/album/1B4qGWkdnr5xVmhgUVSooH">
          <StaticImage style={imageStyle} src="../images/spotify.png" alt="spotify" height={30} />
        </L>
        <L style={{ boxShadow: "none" }} to="">
          <StaticImage style={imageStyle} src="../images/spotify.png" alt="spotify" height={30} />
        </L>
      </h2>
      <i>Released September 25, 2024.</i> I'm beyond excited to share that the original soundtrack
      for the short film "<L to="https://www.instagram.com/boxes.thefilm/">Boxes</L>" by{" "}
      <L to="https://esha-more.com/filmmaker/">Esha More</L> is available on all streaming
      platforms! composed, recorded, and produced for.
    </Layout>
  );
}
