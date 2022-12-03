export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const required = name => value => value ? undefined : `Field ${name} can't be empty`;

export const minLength = (minLength, name) => value => {
  return (value && value.length >= minLength)
    ? undefined
    : `Field ${name} should contain minimum ${minLength} symbols`;
};

export const maxLength = (maxLength, name) => value => {
  return (value && value.length <= maxLength)
    ? undefined
    : `Field ${name} should contain maximum ${maxLength} symbols`;
};


