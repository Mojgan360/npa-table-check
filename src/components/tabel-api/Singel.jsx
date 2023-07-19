/* eslint-disable react/prop-types */

const Singel = (props) => {
  // return <div> {props.value === "English" ? "en" : props.value}</div>;
  return (
    <div>
      {" "}
      {props.value === "English" ? (
        "en"
      ) : (
        <a href="https://www.google.com/">{props.value}</a>
      )}
    </div>
  );
};

export default Singel;
