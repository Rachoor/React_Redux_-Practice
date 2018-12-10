import React from "react";
import { Form, Select, Button, Input, Radio, DatePicker, Checkbox } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const Fields = props => {
  switch (props.type) {
    case "TEXT":
      return (
        <FormItem>
          {props.getFieldDecorator(props.id, {
            initialValue: props.value,
            rules: props.validations
          })(<Input />)}
        </FormItem>
      );
    case "RADIO":
      return (
        <FormItem>
          {props.getFieldDecorator(props.id, {
          initialValue: props.value,
            rules: props.validations
          })(
            <RadioGroup>
              {props.options.map(option => {
                return (
                  <Radio key={option.key} value={option.key}>
                    {option.text}
                  </Radio>
                );
              })}
            </RadioGroup>
          )}
        </FormItem>
      );
    case "DATE":
      return (
        <FormItem>
          {props.getFieldDecorator(props.id, {
            initialValue: props.value,
            rules: props.validations
          })(<DatePicker />)}
        </FormItem>
      );
    case "CHECKBOX":
      return (
        <FormItem>
          {props.getFieldDecorator(props.id, {
            initialValue: props.value,
            rules: props.validations
          })(
            <Checkbox.Group>
              {props.options.map(option => {
                return (
                  <Checkbox key={option.key} value={option.key}>
                    {option.text}
                  </Checkbox>
                );
              })}
            </Checkbox.Group>
          )}
        </FormItem>
      );
    case "SELECT":
      return (
        <FormItem>
          {props.getFieldDecorator(props.id, {
            initialValue: props.value,
            rules: props.validations
          })(
            <Select style={{ width: 230 }}>
              {props.options.map(option => {
                return (
                  <Option key={option.key} value={option.key}>
                    {option.text}
                  </Option>
                );
              })}
            </Select>
          )}
        </FormItem>
      );
    default:
      return null;
  }
};

const QuestionsForm = props => {
  const { question, form } = props;
  return (
    <Form onSubmit={e => props.handleSubmit(e, question.id, form)}>
      <Fields {...question} getFieldDecorator={form.getFieldDecorator} />
      <FormItem>
        <Button disabled={!question.enabled} type="primary" htmlType="submit">
          Submit
        </Button>
        <a onClick={() => props.onClear(form, question)} className="ml-5">
          Clear
        </a>
      </FormItem>
    </Form>
  );
};

export default Form.create()(QuestionsForm);
