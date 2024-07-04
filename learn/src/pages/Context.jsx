import { useContext } from "react";
import propTypes from "prop-types";
import { LevelContext } from "../contexts/LevelContext";

const Context = () => {
  return (
    <Section level={1}>
      <Heading>Context API</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>

        <Section level={3}>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading>
          <Heading>Sub-Heading</Heading>

          <Section level={4}>
            <Heading>Sub-Sub-Heading</Heading>
            <Heading>Sub-Sub-Heading</Heading>
            <Heading>Sub-Sub-Heading</Heading>
            <Heading>Sub-Sub-Heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default Context;

const Section = ({ children }) => {
  const level = useContext(LevelContext);

  // each Section could read the level from the Section above and pass down (level + 1) with value={level + 1}
  return (
    <div className="p-4 m-5 border border-gray-200 rounded-lg">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </div>
  );
};

Section.propTypes = {
  children: propTypes.node,
};

const Heading = ({ children }) => {
  const level = useContext(LevelContext);
  const headingClasses = {
    1: "text-3xl text-gray-900", // Larger and darker
    2: "text-2xl text-gray-800",
    3: "text-xl text-gray-700",
    4: "text-lg text-gray-600", // Smaller and lighter
    5: "text-sm text-gray-500",
  };

  switch (level) {
    case 1:
      return <h1 className={headingClasses[1]}>{children}</h1>;
    case 2:
      return <h2 className={headingClasses[2]}>{children}</h2>;
    case 3:
      return <h3 className={headingClasses[3]}>{children}</h3>;
    case 4:
      return <h4 className={headingClasses[4]}>{children}</h4>;
    case 5:
      return <h5 className={headingClasses[5]}>{children}</h5>;
    default:
      throw Error("Unknown level: " + level);
  }
};

Heading.propTypes = {
  children: propTypes.node,
};
