import { useState } from "react";

const ListGroup = () => {
  const countries = ["Australia", "Japan", "Nepal"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const setActiveCountry = (index: number) => {
    setSelectedIndex(index);
  };

  //const countries = [];
  const mappedCountries = countries.map((country, index) => (
    <>
      <li
        className={
          selectedIndex == index ? "list-group-item active" : "list-group-item"
        }
        key={country}
        onClick={() => setActiveCountry(index)}
      >
        {country}
      </li>
    </>
  ));

  return (
    <>
      <h1>Countries</h1>
      {countries.length == 0 && <p>No Countries found </p>}
      <ul className="list-group">{mappedCountries}</ul>
    </>
  );
};

export default ListGroup;
