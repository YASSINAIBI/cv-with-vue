<template>
  <div class="experience">
    <form class="container">
      <div v-for="(experince, index) in experinceList" :key="index">
        <div class="form-group">
          <label for="COMPANY">COMPANY</label>
          <input
            type="text"
            class="form-control"
            id="COMPANY"
            v-model="experince.COMPANY"
          />
        </div>
        <div class="form-group">
          <label for="POST">POST</label>
          <input
            type="text"
            class="form-control"
            id="POST"
            v-model="experince.POST"
          />
        </div>
        <div class="form-group">
          <label for="POST_DESC">POST DESC</label>
          <input
            type="text"
            class="form-control"
            id="POST_DESC"
            v-model="experince.POST_DESC"
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
                v-model="experince.FROM"
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
                v-model="experince.TO"
              />
            </div>
          </div>
        </div>

        <div class="line"></div>
      </div>

      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        @click="addExperience"
      >
        ADD NEW
      </button>
      <br />
      <br />
      <button class="btn" @click.prevent="submitExperience">EDUCATION</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "exprerience",
  data() {
    return {
      experinceList: [
        {
          COMPANY: "",
          POST: "",
          POST_DESC: "",
          FROM: "",
          TO: "",
        },
      ],
    };
  },
  methods: {
    addExperience: function () {
      this.experinceList.push({
        COMPANY: "",
        POST: "",
        POST_DESC: "",
        FROM: "",
        TO: "",
      });
    },
    submitExperience: function () {
      this.$store.dispatch("setExperience", this.experinceList);
      this.$router.push({ path: "education" });
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.experience {
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
