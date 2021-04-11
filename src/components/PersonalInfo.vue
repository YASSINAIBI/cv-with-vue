<template>
  <div>
    <form class="container">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="email" class="form-control" id="phone" v-model="phone" />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <input
          type="email"
          class="form-control"
          id="address"
          v-model="adress"
        />
      </div>
      <div class="form-group">
        <label for="github">Github</label>
        <input type="email" class="form-control" id="github" v-model="github" />
      </div>
      <button class="btn btn-warning" @click.prevent="submitPersonalInfo">
        EXPERIENCE PROFESSIONELS
      </button>

      <!-- {{myName}} <br>
        {{myDesc}} <br>
        {{myEmail}} <br>
        {{myPhone}} <br>
        {{myAdress}} <br>
        {{myGitHub}} <br> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "PersonnalInfo",
  data() {
    return {
      myName: "",
      myDesc: "",
      myEmail: "",
      myPhone: "",
      myAdress: "",
      myGitHub: "",
    };
  },
  computed: {
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
    phone: {
      get() {
        return this.$store.state.phone;
      },
      set(value) {
        this.$store.commit("setPhone", value);
      },
    },
    adress: {
      get() {
        return this.$store.state.adress;
      },
      set(value) {
        this.$store.commit("setAdress", value);
      },
    },
    github: {
      get() {
        return this.$store.state.github;
      },
      set(value) {
        this.$store.commit("setGitHub", value);
      },
    },
  },
  methods: {
    submitPersonalInfo: function () {
      this.myName = this.$store.state.name;
      this.myDesc = this.$store.state.desc;
      this.myEmail = this.$store.state.email;
      this.myPhone = this.$store.state.phone;
      this.myAdress = this.$store.state.adress;
      this.myGitHub = this.$store.state.github;

      this.$router.push({ path: "exprerience" });
    },
  },
};
</script>

<style></style>
