import { useState } from "react";
import styled from "styled-components";
import COLORS from "../../data/colors";
import MainSection from "./MainSection";
import statesFetch from "../../data/locations/States.json";
import provincesFetch from "../../data/locations/Provinces.json";
import euroCountriesFetch from "../../data/locations/EuroCountries.json";

const Cont = styled.div`
  border: 1px solid ${(props) => props.colors.grey};
  border-radius: 8px;
  @media only screen and (max-width: 600px) {
    border-radius: 0px;
  }
`;
const ForumContent = () => {
  const [states, setStates] = useState(statesFetch.map((state) => state.name));
  const [provinces, setProvinces] = useState(
    Object.entries(provincesFetch).map(([key, val]) => val)
  );
  const [euroCountries, setEuroCountries] = useState(
    euroCountriesFetch.map((country) => country.name)
  );

  return (
    <Cont colors={COLORS}>
      <MainSection
        states={states}
        provinces={provinces}
        euroCountries={euroCountries}
      />
    </Cont>
  );
};

export default ForumContent;
