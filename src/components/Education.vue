<template>
  <div class="education">
    <form class="container">
      <div v-for="(education, index) in educationList" :key="index">
        <div class="form-group">
          <label for="COMPANY">UNIVERSITY</label>
          <input
            type="text"
            class="form-control"
            id="COMPANY"
            v-model="education.UNIVERSITY"
          />
        </div>
        <div class="form-group">
          <label for="POST">BRANCH</label>
          <input
            type="text"
            class="form-control"
            id="POST"
            v-model="education.BRANCH"
          />
        </div>

        <div class="row">
          <div class="col-md">
            <div class="form-group">
              <label for="FROM">FROM</label>
              <input
                type="number"
                class="form-control"
                id="FROM"
                v-model="education.FROM"
              />
            </div>
          </div>
          <div class="col-md">
            <div class="form-group">
              <label for="TO">TO</label>
              <input
                type="number"
                class="form-control"
                id="TO"
                v-model="education.TO"
              />
            </div>
          </div>
        </div>

        <div class="line"></div>
      </div>

      <button
        type="button"
        class="btn btn-warning btn-lg btn-block"
        @click="addEducation"
      >
        ADD NEW
      </button>
      <br />
      <br />
      <button class="btn" @click.prevent="submitEducation">SKIILS</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      educationList: [
        {
          UNIVERSITY: "",
          BRANCH: "",
          FROM: "",
          TO: "",
        },
      ],
    };
  },
  methods: {
    addEducation: function () {
      this.educationList.push({
        UNIVERSITY: "",
        BRANCH: "",
        FROM: "",
        TO: "",
      });
    },
    submitEducation: function () {
      this.$store.dispatch("setEducation", this.educationList);
      this.$router.push({ path: "skills" });
    },
  },
};
</script>

<style lang="scss">
.education {
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
