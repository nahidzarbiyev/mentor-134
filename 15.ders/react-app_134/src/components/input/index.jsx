const Input = () => {
  return (
    <>
      <label htmlFor="">Input</label>
      <input onChange={(e) => console.log(e.target.value)} type="text" />
{'Gulare'.toUpperCase()}

    </>
  );
};

export default Input;
