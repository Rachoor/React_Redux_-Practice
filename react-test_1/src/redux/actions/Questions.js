import {
  ON_ANSWERED_PANEL_CHANGE,
  ON_CLEAR,
  ON_CLEAR_ALL
} from "../constants/Questions";
import moment from "moment";

export const handleSubmit = (e, id, form) => dispatch => {
  e.preventDefault();
  form.validateFields((err, values) => {
    if (!err) {
      form.resetFields();
      dispatch({
        type: id,
        value:
          id === "QUESTION_3"
            ? moment(values[id]).format("DD-MM-YYYY")
            : values[id]
      });
    }
  });
};

export const onAnsweredPanelClick = key => {
  return {
    type: ON_ANSWERED_PANEL_CHANGE,
    key: key[1]
  };
};

export const onClear = (form, question) => {
  form.resetFields();
  return {
    type: ON_CLEAR,
    question
  };
};

export const onClearAll = () => {
  return {
    type: ON_CLEAR_ALL
  };
};
