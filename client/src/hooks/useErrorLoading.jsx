import { useContext } from "react";
import { ErrorLoadingContext } from "../contexts/errorLoadingContex";

export const useErrorLoading = () => {
  return useContext(ErrorLoadingContext);
};
