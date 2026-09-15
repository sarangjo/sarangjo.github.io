import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import { L } from "../components/link";

const Links = {
  uw: "https://cs.uw.edu",
  uchicago: "https://cs.uchicago.edu/people/sarang-joshi/",
  misl: "https://misl.cs.washington.edu/",
  fluidics: "https://misl.cs.washington.edu/projects/fluidics.html",
  thesis: "/uw-thesis.pdf",
  presentation: "/uw-presentation.pdf",
  puddle: "https://doi.org/10.1145/3297858.3304027",
  fred: "https://people.cs.uchicago.edu/~ftchong/",
  epiqc: "https://www.epiqc.cs.uchicago.edu/",
  diana: "https://people.cs.uchicago.edu/~dmfranklin/",
  canon: "https://www.canonlab.org/",
  swiper: "https://doi.org/10.1145/3695053.3731022",
  andrew: "https://people.cs.uchicago.edu/~aachien/lssg/people/andrew-chien/",
};

const Me = () => <span style={{ backgroundColor: "skyblue" }}>Sarang Joshi</span>;

export default function ResearchPage(props: PageProps) {
  return (
    <Layout
      location={props.location}
      title="Research"
      description="More than doing a Google search (mostly...)."
    >
      <h2>
        University of Chicago (2023-?){" "}
        <L style={{ boxShadow: "none", lineHeight: "45px" }} to={Links.uchicago}>
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 45 }}
            src="../logos/uchicagocs.png"
            height={45}
            alt="cse"
          />
        </L>
      </h2>
      <p>
        I'm currently doing research in quantum computer architecture and quantum computer education
        with <L to={Links.fred}>Fred Chong</L> (<L to={Links.epiqc}>EPIQC</L>) and{" "}
        <L to={Links.diana}>Diana Franklin</L> (<L to={Links.canon}>CANON Lab</L>) since 2025. In
        particular, I am interested in exploring and improving the design of quantum control
        systems, and their codesign with specific architectures and error correction schemes.
      </p>
      <ul>
        <li>
          <b>Q4Bio</b>. (<i>In submission</i>)
        </li>
        <li>
          <b>
            SWIPER: Minimizing Fault-Tolerant Quantum Program Latency via Speculative Window
            Decoding
          </b>
          . Joshua Viszlai, Jason D. Chadwick, <Me />, Gokul Subramanian Ravi, Yanjing Li, and
          Frederic T. Chong. <i>June 2025</i>. (
          <L to={Links.swiper}>ACM Digital Library, ISCA 2025</L>)
        </li>
      </ul>
      <p>
        I previously worked on a small project in sustainable computing research with{" "}
        <L to={Links.andrew}>Andrew Chien</L>, as part of the LSSG group, on modeling data center
        cooling systems.
      </p>
      <h2>
        University of Washington (2014-18){" "}
        <L style={{ boxShadow: "none", lineHeight: "45px" }} to={Links.uw}>
          <StaticImage
            style={{ marginBottom: 0, maxHeight: 45 }}
            src="../logos/uwcse.png"
            height={45}
            alt="cse"
          />
        </L>
      </h2>
      <p>
        In my senior year at UW, for my CSE Departmental Honors, I conducted research for the{" "}
        <L to={Links.misl}>Molecular Information Systems Lab</L>, on the{" "}
        <L to={Links.fluidics}>Microfluidic Automation</L> project. I wrote a{" "}
        <L to={Links.thesis}>thesis</L> and gave a <L to={Links.presentation}> presentation</L> at
        the end of my year with MISL.
      </p>
      <ul>
        <li>
          <b>Puddle: A Dynamic, Error-Correcting, Full-Stack Microfluidics Platform</b>. Max
          Willsey, Ashley P. Stephenson, Chris Takahashi, Pranav Vaid, Bichlien H. Nguyen, Michal
          Piszczek, Christine Betts, Sharon Newman, <Me />, Karin Strauss, Luis Ceze.{" "}
          <i>April 2019</i>. (<L to={Links.puddle}>ACM Digital Library, ASPLOS 2019</L>)
        </li>
        <li>
          <b>Making the Invisible, Visible (Poster presentation)</b>. Kavya Magham, <Me />, Jeannine
          Rogel. <i>May 2017</i>. (
          <L to="/static/marygatesposter.jpg">
            Mary Gates Leadership Scholarship Poster Session, University of Washington
          </L>
          )
        </li>
      </ul>
    </Layout>
  );
}
