import React from "react";
import map from "lodash/map";

const CLASSES = [
  {
    num: "143",
    quarters: ["15sp", "15au"],
  },
  {
    num: "351",
    quarters: ["16wi", "16sp", "17wi"],
  },
  {
    num: "311",
    quarters: ["16au"],
  },
  {
    num: "451",
    quarters: ["17sp", "17au", "18wi"],
  },
  {
    num: "452",
    quarters: ["18sp"],
  },
];

export default class Secret extends React.Component {
  render() {
    const classes = map(CLASSES, (c, i) => {
      const items = map(c.quarters, (q, j) => (
        <span key={j}>
          <a
            href={`https://courses.cs.washington.edu/courses/cse${c.num}/${q}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {q}
          </a>
          &nbsp;
        </span>
      ));
      return (
        <li key={i}>
          <span>
            {c.num}
            :&nbsp;
          </span>
          {items}
        </li>
      );
    });

    return (
      <>
        {" "}
        <h2>Web projects:</h2>
        <ul>
          <li>
            <a href="https://sarangjo.github.io/cse351-heap/">
              UW CSE 351 Heap Visualization
            </a>{" "}
            (in progress)
          </li>
          <li>
            <a href="https://sarangjo.github.io/csecourses/">
              UW CSE Courses Visualization
            </a>{" "}
            (in progress)
          </li>
        </ul>
        <h2>Quarters as a teaching assistant:</h2>
        <ul>{classes}</ul>
        <h2>Research work:</h2>
        <ul>
          <li>NOISE Lab, September 2015-December 2015</li>
          <li>
            Syslab, January 2018-May 2018
            <ul>
              <li>
                xkvisor, a hypervisor system for xk, the experimental operating
                system
              </li>
            </ul>
          </li>
          <li>
            UW MISL, September 2017-June 2018
            <ul>
              <li>
                <a href="papers/Joshi_Senior_Thesis.pdf" target="_blank">
                  &#39;Multi-Location Droplet Management for Digital
                  Microfluidics&#39;
                </a>
                , June 2018 (
                <a href="" target="_blank" rel="noopener noreferrer">
                  Honors Presentation
                </a>
                )
              </li>
            </ul>
          </li>
        </ul>
        <h2>
          Other projects can be found on my{" "}
          <a href="https://github.com/sarangjo">GitHub page</a>!
        </h2>
        <h2>Philanthropy</h2>
        <ul>
          <li>
            Kinspire - Vice President
            <ul>
              <li>
                <a href="https://kinspire.org/">Website Developer</a>
              </li>
              <li>
                <a href="https://github.com/kinspire/kinspire-portal">
                  Kinspire Portal
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </>
    );
  }
}
