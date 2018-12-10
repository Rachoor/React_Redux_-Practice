import {
  dataSource,
  updateQuestionValue,
  QUESTION_1,
  QUESTION_2,
  QUESTION_3,
  QUESTION_4,
  QUESTION_5,
  QUESTION_6,
  ON_ANSWERED_PANEL_CHANGE,
  ON_CLEAR,
  ON_CLEAR_ALL
} from "../constants/Questions";

const questions = (
  state = { dataSource, activeKey: [dataSource[0].id] },
  action
) => {
  switch (action.type) {
    case QUESTION_1:
      return {
        ...state,
        activeKey: ["QUESTION_2"],
        dataSource: updateQuestionValue(state, action)
      };
    case QUESTION_2:
      return {
        ...state,
        activeKey: action.value === "OTHER" ? ["QUESTION_4"] : ["QUESTION_3"],
        dataSource: updateQuestionValue(state, action)
      };
    case QUESTION_3:
      return {
        ...state,
        activeKey: ["QUESTION_4"],
        dataSource: updateQuestionValue(state, action)
      };
    case QUESTION_4:
      return {
        ...state,
        activeKey: ["QUESTION_5"],
        dataSource: updateQuestionValue(state, action)
      };
    case QUESTION_5:
      return {
        ...state,
        activeKey: ["QUESTION_6"],
        dataSource: updateQuestionValue(state, action)
      };
    case QUESTION_6:
      return {
        ...state,
        activeKey: [],
        dataSource: updateQuestionValue(state, action)
      };
    case ON_ANSWERED_PANEL_CHANGE:
      const question = state.dataSource.find(data => {
        return data.id === action.key;
      });
      return {
        ...state,
        activeKey: question && question.value ? [action.key] : state.activeKey
      };
    case ON_CLEAR:
      const index = state.dataSource.findIndex(question => {
        return question.id === action.question.id;
      });
      if (index > 0) {
        return {
          ...state,
          activeKey: [state.dataSource[index - 1].id]
        };
      }
      return state;
    case ON_CLEAR_ALL:
      return {
        ...state,
        dataSource,
        activeKey: [dataSource[0].id]
      };
    default:
      return state;
  }
};

export default questions;
