/* eslint-disable react/prop-types */
function Button({ children, size, title, width }) {
  let isColor = false;
  const style = {
    background: "#222",
    color: "#768",
    // height:'50px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: size,
    width: width,
  };
  const style2 = {
    background: "orange",
    color: "#fff",
    // height:'50px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: size,
    width: width,
  };

  return (
    <>
      {isColor ? (
        <button
          type="button"
          onClick={() => console.log("click")}
          style={style}
        >
          {title}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => console.log("click")}
          style={style2}
        >
          {title}
        </button>
      )}
    </>
  );
}

export default Button;

// const Button = () => {
//   return (
//     <button>Button</button>
//   )
// }

// export default Button
