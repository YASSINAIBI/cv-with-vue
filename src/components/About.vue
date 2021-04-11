<template>
  <div>
    <form class="container">
      <div class="form-group">
        <label for="about">about me</label>
        <textarea
          class="form-control"
          id="about"
          rows="3"
          v-model="about"
        ></textarea>
      </div>
      <button class="btn btn-warning" @click.prevent="submitAboutMe">
        VIEW YOUR CV
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "About",
    };
  },
  computed: {
    about: {
      get() {
        return this.$store.state.about;
      },
      set(value) {
        this.$store.commit("setAbout", value);
      },
    },
  },
  methods: {
    submitAboutMe: function () {
      this.$router.push({ path: "cvprev" });
    },
  },
};
</script>

<style></style>
