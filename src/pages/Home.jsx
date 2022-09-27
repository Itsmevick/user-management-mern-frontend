import React from "react";
import AddClientModals from "../components/AddClientModals";
import AddProjectModals from "../components/AddProjectModals";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

function Home() {
  return (
    <div>
      <div className="d-flex gap-3 mb-4">
        <AddClientModals />
        <AddProjectModals />
      </div>
      <Projects />
      <hr />
      <Clients />
    </div>
  );
}

export default Home;
