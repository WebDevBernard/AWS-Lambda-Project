require("dotenv").config();
export default function fetchTodoList() {
  const request = fetch("API-URL", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "",
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
