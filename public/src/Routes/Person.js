import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Data/data";

const Person = () => {
  const { id } = useParams();
  const [people, setPeople] = useState("");
  // const thisPerson = people.filter((person) => person.id == id);
  useEffect(() => {
    fetch(`/person/${id}`)
      .then((res) => res.json())
      .then((person) => setPeople(person[0]));
  }, []);

  return (
    <>
      <h2>Person Page</h2>
      {people === "" ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h2>{people.name}</h2>
        </div>
      )}
    </>
  );
};
export default Person;
