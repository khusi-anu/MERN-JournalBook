const initState = {
  projects: [
    { id: "1", title: "bla bla bla", content: "aljgdfkhgf" },
    { id: "2", title: "bla bla bla", content: "aljgdfkhgf" },
    { id: "3", title: "bla bla bla", content: "aljgdfkhgf" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
