const SkillList = () => {
  return (
    <div className="skill">
      <div className="skill-list">
        <span style={{ backgroundColor: "red", padding: 11 }}>
          Python {"💪"}
        </span>
        <span style={{ backgroundColor: "green", padding: 11 }}>
          React {"💪"}
        </span>
        <span style={{ backgroundColor: "blue", padding: 11 }}>
          C++ {"💪"}{" "}
        </span>
        <span style={{ backgroundColor: "yellow", padding: 11 }}>
          Javascript {"💪"}
        </span>
        <span style={{ backgroundColor: "rgba(0, 128, 0, 0.3)", padding: 11 }}>
          Git and GitHub {"💪"}
        </span>
        <span style={{ backgroundColor: "lightblue", padding: 11 }}>
          Web Design {"💪"}
        </span>
      </div>
    </div>
  );
};

export default SkillList;
