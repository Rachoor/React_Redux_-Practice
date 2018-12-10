import React from "react";
import "./Questions.scss";
import { Collapse, Button } from "antd";
import { connect } from "react-redux";
import QuestionsForm from "./QuestionsForm";
import * as questionActions from "../../redux/actions/Questions";

const Panel = Collapse.Panel;

const Questions = props => {
  const {
    questions: { dataSource, activeKey }
  } = props;
  return (
    <div className="main">
      <Collapse
        bordered={false}
        activeKey={activeKey}
        onChange={props.onAnsweredPanelClick}
      >
        {dataSource.map(question => {
          return (
            <Panel
              key={question.id}
              header={
                <div className="quick-view">
                  <span className="title">{question.id}</span>
                  <span className="answer">{question.value}</span>
                  <div
                    className={`${
                      question.value ? "alert-success" : "alert-pending"
                    }`}
                  />
                </div>
              }
            >
              <div>{question.title}</div>
              <QuestionsForm
                onClear={props.onClear}
                handleSubmit={props.handleSubmit}
                question={question}
              />
            </Panel>
          );
        })}
      </Collapse>
      <div className="text-center mt-10">
      <Button onClick={props.onClearAll} type="primary">Clear all</Button>
      </div>
    </div>
  );
};

export default connect(
  state => state,
  questionActions
)(Questions);
