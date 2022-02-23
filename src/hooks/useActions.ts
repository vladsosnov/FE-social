import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { combineActions } from "store/actions/action-creators";

export const useActions = () => {
  return bindActionCreators(combineActions, useDispatch());
};
