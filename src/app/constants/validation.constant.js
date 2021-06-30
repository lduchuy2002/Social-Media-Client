const validationConst = {
  MAX_LEN_ACCOUNT: 16,
  MIN_LEN_ACCOUNT: 6,
  REG_FOR_ACCOUNT: "^[a-zA-Z0-9]+$",
  MAX_LEN_NAME: 24,
  MIN_LEN_NAME: 4,
  REG_FOR_NAME: "^[a-zA-Z].*[s.]*$",
  MIN_LEN_PASSWORD: 6,
  MAX_LEN_PASSWORD: 16,
  REG_FOR_PASSWORD: "^[a-zA-Z0-9!@#$%^&*]{6,18}$",
};

export default validationConst;
