import { environmentVariables } from "../../constants/environementVariables";

export const toAbsoluteUrl = (pathname) =>
  environmentVariables.PUBLIC_URL + pathname;
