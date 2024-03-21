import Avatar from "../components/Avatar";
import Intro from "../components/Intro";
import SkillList from "../components/SkillList";


const AboutPage = () => {
  return (
    <div className="containers">

      <div className="about">

      <h3>
        A simple To-do app allowing the user to create and manage tasks, as well
        as check off (or uncheck) the existing tasks when completed.
      </h3>

        <div className="card about-card">

          <Avatar />
          <Intro />
          <SkillList />

        </div>

      </div>


    </div>
  );
};

export default AboutPage;
