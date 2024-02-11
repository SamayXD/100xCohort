export function CreateTodo() {
  return (
    <div>
      <input
        style={{
          padding: 5,
          margin: 5,
          borderRadius: 10,
        }}
        type="text"
        placeholder="title"
      ></input>
      <br />
      <input
        style={{
          padding: 5,
          margin: 5,
          borderRadius: 10,
        }}
        type="text"
        placeholder="description"
      ></input>
      <br />
      <button
        style={{
          padding: 5,
          margin: 5,
          borderRadius: 10,
        }}
      >
        Add To Do
      </button>
    </div>
  );
}
