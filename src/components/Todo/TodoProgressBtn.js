import StyledProgressBtn from "./TodoProgressBtn.Styled";

const TodoProgressBtn = ({ todos, todo, progress, setTodos }) => {
  const handleProgress = () => {
    console.log(progress);
    console.log(todos);

    let updatedProgress =
      progress === "todo" ? (progress = "in progress") : "done";
    todo.progress = updatedProgress;

    fetch(`http://localhost:3000/user/1`, {
      method: "PATCH",
      headers: {
        Accept: "appliaction/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todos: todos,
      }),
    }).then(() => {
      fetch(`http://localhost:3000/user/1`)
        .then((res) => res.json())
        .then((res) => setTodos(res));
    });
  };
  return (
    <>
      <StyledProgressBtn onClick={handleProgress}></StyledProgressBtn>
    </>
  );
};

export default TodoProgressBtn;
