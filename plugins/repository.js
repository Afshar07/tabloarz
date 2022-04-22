import createAuthRepository from "../api/auth.js";
export default (context, inject) => {
  const repositories = {
    submitLogin: createAuthRepository(context, "/yekpay/login"),
  };
  inject("repositories", repositories);
};
