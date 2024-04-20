import { ProjectInput } from "./src/components/project-input.js";
import { ProjectList } from "./src/components/project-list.js";

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
