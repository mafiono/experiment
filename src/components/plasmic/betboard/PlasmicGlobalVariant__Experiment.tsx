// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type ExperimentValue = "override";
export const ExperimentContext = React.createContext<
  ExperimentValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export function useExperiment() {
  return React.useContext(ExperimentContext);
}

export default ExperimentContext;
/* prettier-ignore-end */
