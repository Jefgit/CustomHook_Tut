import useInput from "../hooks/useInput";

const userForm = () => {
  const [fname, fnameReset, fnameBind] = useInput("");
  const [lname, lnameReset, lnameBind] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${fname} ${lname}`);
    fnameReset();
    lnameReset();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>First Name:</label>
        <input type="text" {...fnameBind} />
        <label>Last Name:</label>
        <input type="text" {...lnameBind} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default userForm;
