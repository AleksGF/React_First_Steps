import PersonalInfo from "./PersonalInfo";

const PersonalData = () => {
  return (
      <div className="personal-data-container">
          <img className="avatar" src="https://buddy.ai/buddy-dino.8e355d36.png" alt="Avatar pic" />
          <PersonalInfo />
      </div>
  );
};

export default PersonalData;