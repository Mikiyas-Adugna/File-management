export const validationRules = {
  text: {
    required: "This information is required",
    minLength: {
      value: 2,
      message: "Must be at least 2 characters long",
    },
    maxLength: {
      value: 25,
      message: "Cannot exceed 25 characters",
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Must contain only alphabets only",
    },
  },
  file: {
    required: "This file is required",
  },
  number: {
    required: "This information is required",
    maxLength: {
      value: 10,
      message: "Cannot exceed 25 characters",
    },
    pattern: {
      value: /^[0-9]+$/,
      message: "This filed is number only",
    },
  },

  email: {
    require: "Email is required",
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: "please write the email correctly",
    },
  },

  password: {
    require: "Password is required",
    minLength: {
      value: 8,
      message: "password must be at least 8 character",
    },
  },

  phone:{
    require:"password is required",
    pattern:{
      value: /^\+\d{3}\s\d{9}$/,
      message: "Make sure it much the format +251 space and 9 digit"
    }
  }
};
