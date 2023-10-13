import TeamCard from "./TeamCard";
import "./TeamCard.css";

export default function TeamHolder() {
  return (
    <>
      <div className="card_holder_team">
        <h2 className="contributors">Contributors</h2>
        <h2 style={{ marginTop: "5px" }}>Lead</h2>
        <div className="team_con">
          <TeamCard
            name="Vrushabh Goyani"
            link="https://www.linkedin.com/in/vrushabh-goyani-843927224"
            title="IOTA, IIITS"
          />
        </div>
        <h2>Web Dev Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/sosenkkk"
            name="Shashank"
            title="Web Development Lead, IOTA IIITS"
          />
          <TeamCard
            link="https://www.linkedin.com/in/mithun-u-b19110266"
            name="Mithun U"
            title="Web Development Core, IOTA IIITS"
          />
          <TeamCard
            link="https://www.linkedin.com/in/vinayak-anand"
            name="Vinayak Anand"
            title="Web Development Lead, IOTA IIITS"
          />
          <TeamCard
            name="Charishma Bollineni"
            link="hhttps://www.linkedin.com/in/charishma-bollineni-46a625283"
            title="Web Development Lead, IOTA IIITS"
          />
        </div>
        <h2>Design Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            name="Dr. Neha Agrawal"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            link="https://www.linkedin.com/in/nikhil-tripathi/"
            name="Nikhil Tripathi"
            title="Assistant Professor, IIIT Sri City"
          />
          <TeamCard
            name="Dr. Neha Agrawal"
            link="https://www.linkedin.com/in/dr-neha-agrawal-0a32776b/"
            title="Assistant Professor, IIIT Sri City"
          />
        </div>
      </div>
    </>
  );
}
