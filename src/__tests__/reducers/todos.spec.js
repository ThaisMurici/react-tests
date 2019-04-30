import todosReducer, { Creators as TodoActions } from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("should be able to add todos", () => {
    const state = todosReducer({ data: [] }, TodoActions.addTodo("Novo todo"));

    expect(state.data[0]).toBe("Novo todo");
  });

  it("should be able to complete todos", () => {
    const todos = ["Fazer café"];
    const state = todosReducer(
      { data: todos },
      TodoActions.completeTodo("Fazer café")
    );

    expect(state.data.length).toBe(0);
  });
});
