import React from "react";
import GoalCard from "../../sections/utils/GoalCard";
import { goalData } from "../../../mockData/goalData";

const AboutGoal = () => {
  return (
    <section className="Goal">
      <div className="container">
        <div className="row gy-md-0 gy-4">
          {goalData.map((goal, index) => (
            <div className="col-md-4" key={index}>
              <GoalCard
                img={goal.img}
                title={goal.title}
                description={goal.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutGoal;
