export default (context, resources) => ({
  async submitLogin(payload) {
    const response = await context.$axios.post(resources, payload);
    return response;
  },
});
