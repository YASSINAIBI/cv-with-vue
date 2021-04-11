<template>
  <div class="skills">
    <form class="container">
      <div>
        <label for="tags-basic">to Type a new skill press enter</label>
        <b-form-tags input-id="tags-basic" v-model="skills"></b-form-tags>
        <!-- <p class="mt-2">Skills: {{ skills }}</p> -->
      </div>
      <br />
      <br />
      <button class="btn btn-warning" @click.prevent="submitSkills">
        ABOUT ME
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [],
    };
  },
  methods: {
    submitSkills: function () {
      this.$store.dispatch("setSkills", this.skills);
      this.$router.push({ path: "about" });
    },
  },
};
</script>

<style lang="scss">
.skills {
  .line {
    position: relative;
    margin: 4% 2%;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 10px;
      background-color: black;
      top: -25px;
      border-radius: 50%;
    }
  }
}
</style>
