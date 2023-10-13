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
        </div>
        <h2>Design Team</h2>
        <div className="team_con">
          <TeamCard
            link="https://www.linkedin.com/in/akansh-vaibhav-040524222"
            name="Akansh Vaibhav"
            title="Design Team, IOTA IIITS"
          />
          <TeamCard
            name="Ayan Raza"
            link="https://www.linkedin.com/in/iamayan2011/"
            title="Design Team, IOTA IIITS"
          />
        </div>
      </div>
    </>
  );
}
