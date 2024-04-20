import { ProjectInput } from "./src/components/project-input";
import { ProjectList } from "./src/components/project-list";

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");

console.log("App running...");