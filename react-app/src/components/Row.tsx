import { useState } from "react";

interface Props {
  country: string;
  selectedIndex: number;
}

export const  Row = ({ country, selectedIndex }: Props) => {
  const [index, setIndex] = useState(-1);

  return (
    <li
      className={index == selectedIndex ? "list-group-item active" : "list-group-item"}
      key="{country}"
      onClick={() => setIndex(selectedIndex)}
    >
      {country}
    </li>
  );
};
