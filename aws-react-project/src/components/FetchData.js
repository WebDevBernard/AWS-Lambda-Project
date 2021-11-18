require("dotenv").config();
export default function fetchTodoList() {
  const request = fetch("API-URL", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "hZ2WlgolzLaT9uULgiPl5lOeBkn0ATu7lN3U7dTj",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log("Error while fetching:", error));
  return {
    type: ActionTypes.FETCH_TODOLIST,
    payload: request,
  };
}
