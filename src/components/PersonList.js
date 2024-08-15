import { useFormAndList } from "../useFormAndList";

const initialFormValues = {
  fullName: "",
  shirtSize: "",
  animals: [],
};

const animals = ["cat", "dog", "bird", "fish"];

export const PersonList = () => {
  const [people, formValues, addPerson, handleFormChange, deletePerson] =
    useFormAndList(initialFormValues, "person");

  return (
    <div>
      <div>
        <input
          name="fullName"
          value={formValues.fullName}
          onChange={handleFormChange}
        />
      </div>
      <div>
        <select
          name="shirtSize"
          value={formValues.shirtSize}
          onChange={handleFormChange}
        >
          <option value="">---Pick Shirt Size---</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>
      {animals.map((animal, index) => (
        <div key={index}>
          <input
            onChange={handleFormChange}
            type="checkbox"
            name="animals"
            value={animal}
            checked={formValues.animals.includes(animal)}
          />{" "}
          {animal}
        </div>
      ))}
      <button onClick={addPerson}>Add</button>
      {people.map((person) => (
        <div onClick={() => deletePerson(person.id)} key={person.id}>
          {person.fullName} - {person.shirtSize} - {person.animals.join(", ")}
        </div>
      ))}
    </div>
  );
};
