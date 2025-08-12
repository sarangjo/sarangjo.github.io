import { PageProps } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layout";
import TableMap from "../../content/data/table-map.json";

export default function SeattleReceptionSeating(props: PageProps) {
  const [filter, setFilter] = useState("");

  return (
    <Layout
      location={props.location}
      title="Kavya & Sarang's Reception Tables"
      description={`We're so excited to celebrate with you!`}
    >
      <p>
        Enter your name to find your table:{" "}
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </p>
      <table>
        {TableMap.filter(
          (row) =>
            filter.trim().length === 0 || row.Name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        ).map((row) => (
          <tr>
            <td>{row.Name}</td>
            <td>{row["Table Number"]}</td>
          </tr>
        ))}
      </table>
    </Layout>
  );
}
