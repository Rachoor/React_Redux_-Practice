const minChar = (min, message) => (rule, value, callback) => {
  if (value && value.length < min) {
    callback(message);
  } else {
    callback();
  }
};
const maxChar = (max, message) => (rule, value, callback) => {
  if (value && value.length > max) {
    callback(message);
  } else {
    callback();
  }
};

export const dataSource = [
  {
    id: "QUESTION_1",
    title: "What is your name?",
    description: "a paragraph of random text...!",
    type: "TEXT",
    options: [],
    value: null,
    enabled: true,
    validations: [
      { required: true, message: "required!" },
      {
        validator: minChar(
          3,
          "Your name must not be shorter than 3 characters."
        )
      },
      {
        validator: maxChar(
          25,
          "Your name must not be longer than 25 characters."
        )
      }
    ]
  },
  {
    id: "QUESTION_2",
    title: "What is your gender?",
    description: "a paragraph of random text...!",
    type: "RADIO",
    options: [
      { key: "FEMALE", text: "Female" },
      { key: "MALE", text: "Male" },
      { key: "OTHER", text: "Other" }
    ],
    value: null,
    enabled: true,
    validations: [{ required: true, message: "required!" }]
  },
  {
    id: "QUESTION_3",
    title: "What is your the date of your birth?",
    description: "a paragraph of random text...!",
    type: "DATE",
    options: [],
    value: null,
    enabled: true,
    validations: [{ required: true, message: "required!" }]
  },
  {
    id: "QUESTION_4",
    title: "What insurances do you have?",
    description: "a paragraph of random text...!",
    type: "CHECKBOX",
    options: [
      { key: "HEALTH", text: "Health" },
      { key: "LIABILITY", text: "Liability" },
      { key: "LEGAL", text: "Legal" },
      { key: "CAR", text: "Car" }
    ],
    value: null,
    enabled: true,
    validations: [{ required: true, message: "required!" }]
  },
  {
    id: "QUESTION_5",
    title: "What is your employment status?",
    description: "a paragraph of random text...!",
    type: "SELECT",
    options: [
      { key: "EMPLOYEE", text: "Employee" },
      { key: "BUSINESS_OWNER", text: "Business Owner" },
      { key: "HOUSE_SPOUSE", text: "Housewife / Househusband" },
      { key: "RETIREE", text: "Retiree" },
      { key: "STUDENT", text: "Student" },
      { key: "SELF_EMPLOYED", text: "Self-Employed" },
      { key: "UNEMPLOYED", text: "Unemployed" }
    ],
    value: null,
    enabled: true,
    validations: [{ required: true, message: "required!" }]
  },
  {
    id: "QUESTION_6",
    title: "What is your phone number?",
    description: "a paragraph of random text...!",
    type: "TEXT",
    options: [],
    value: null,
    enabled: true,
    validations: [
      { required: true },
      {
        validator: minChar(
          7,
          "Your number must be only digits and not shorter than 7."
        )
      },
      {
        validator: maxChar(
          12,
          "Your number must be only digits and not longer than 12."
        )
      }
    ]
  }
];

export const updateQuestionValue = (state, action) => {
  const questionsList = state.dataSource.map((content, i) => {
    if (content.id === action.type) {
      return { ...content, value: action.value };
    } else {
      return content;
    }
  });

  if (action.type === "QUESTION_2" && action.value === "OTHER") {
    questionsList[2].enabled = false;
  } else {
    questionsList[2].enabled = true;
  }
  if (
    action.type === "QUESTION_5" &&
    (action.value === "EMPLOYEE" ||
      action.value === "BUSINESS_OWNER" ||
      action.value === "STUDENT")
  ) {
    questionsList[5].enabled = false;
  } else {
    questionsList[5].enabled = true;
  }
  return questionsList;
};

export const QUESTION_1 = "QUESTION_1";
export const QUESTION_2 = "QUESTION_2";
export const QUESTION_3 = "QUESTION_3";
export const QUESTION_4 = "QUESTION_4";
export const QUESTION_5 = "QUESTION_5";
export const QUESTION_6 = "QUESTION_6";

export const ON_ANSWERED_PANEL_CHANGE = "ON_ANSWERED_PANEL_CHANGE";

export const ON_CLEAR = "ON_CLEAR";

export const ON_CLEAR_ALL = "ON_CLEAR_ALL"
