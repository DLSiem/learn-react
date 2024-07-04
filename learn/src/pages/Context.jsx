import propTypes from "prop-types";

const Context = () => {
  return (
    <Section>
      <Heading level={1}>Context API</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Heading level={2}>Heading</Heading>

        <Section>
          <Heading level={3}>Sub-Heading</Heading>
          <Heading level={3}>Sub-Heading</Heading>
          <Heading level={3}>Sub-Heading</Heading>

          <Section>
            <Heading level={4}>Sub-Sub-Heading</Heading>
            <Heading level={4}>Sub-Sub-Heading</Heading>
            <Heading level={4}>Sub-Sub-Heading</Heading>
            <Heading level={4}>Sub-Sub-Heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
};

export default Context;

const Section = ({ children }) => {
  // Apply TailwindCSS styles for padding, margin, border, and rounded corners
  return (
    <div className="p-4 m-5 border border-gray-200 rounded-lg">{children}</div>
  );
};

Section.propTypes = {
  children: propTypes.node,
};

const Heading = ({ level, children }) => {
  // Dynamically apply TailwindCSS font size and color based on the heading level
  const headingClasses = {
    1: "text-3xl text-gray-900", // Larger and darker
    2: "text-2xl text-gray-800",
    3: "text-xl text-gray-700",
    4: "text-lg text-gray-600", // Smaller and lighter
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
    default:
      throw Error("Unknown level: " + level);
  }
};

Heading.propTypes = {
  level: propTypes.number.isRequired,
  children: propTypes.node,
};
