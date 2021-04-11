<template>
  <div>
    <form class="container">
      <div class="form-group">
        <label for="name">name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          v-model="name"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your information with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="description">description</label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          v-model="desc"
        ></textarea>
      </div>
      <button class="btn btn-warning" @click.prevent="submitNameAndDesc">
        PERSONNEL INFORMATION
      </button>

      <!-- {{ myName }} <br>
        {{ myDesc }} -->
    </form>
  </div>
</template>

<script>
export default {
  name: "NameAndDesc",
  data() {
    return {
      // myName: "",
      // myDesc: ""
    };
  },
  computed: {
    // this.$store.state.name = this.name
    // this.$store.state.desc = this.desc
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("setName", value);
      },
    },
    desc: {
      get() {
        return this.$store.state.desc;
      },
      set(value) {
        this.$store.commit("setDesc", value);
      },
    },
  },
  methods: {
    submitNameAndDesc: function () {
      this.$router.push({ path: "personalInfo" });
    },
  },
};
</script>

<style></style>
