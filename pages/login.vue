<template>
  <div
    class="w-full container mx-auto flex flex-col items-center justify-center"
  >
    <h1 class="w-full text-center mx-auto my-10">صفحه‌ی ورود</h1>
    <div class="main flex flex-col items-center justify-center">
      <div class="form-control">
        <label class="input-group">
          <span>یوزرنیم</span>
          <input
            v-model="username"
            type="text"
            placeholder="admin"
            class="input input-bordered"
          />
        </label>
      </div>
      <div class="form-control my-10">
        <label class="input-group">
          <span>پسورد</span>
          <input
            v-model="password"
            type="password"
            placeholder="admin"
            class="input input-bordered"
          />
        </label>
      </div>
      <button type="btn" class="btn btn-primary mx-auto">ورود</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async sendLoginReq() {
      try {
        const response = await this.$repositories.submitLogin.submitLogin(
          payload
        );
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
