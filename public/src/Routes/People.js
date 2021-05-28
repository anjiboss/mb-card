import { data } from "../Data/data";
import { Link } from "react-router-dom";
import { useState } from "react";

const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h2>People Page</h2>
      {people.map((person) => {
        return (
          <h4 key={person.id}>
            {person.name}
            <Link to={`/person/${person.id}`}>Learn More</Link>
          </h4>
        );
      })}
    </>
  );
};
export default People;
