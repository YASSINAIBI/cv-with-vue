import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import nameAndDesc from "../components/NameAndDesc.vue";
import PersonnalInfo from "../components/PersonalInfo.vue";
import exprerience from "../components/Experience.vue";
import Education from "../components/Education.vue";
import Skills from "../components/Skills.vue";
import About from "../components/About.vue";
import Cvprev from "../components/CvPrev.vue";
import Download from "../components/Download.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nameAndDesc",
    name: "NameAndDesc",
    component: nameAndDesc,
  },
  {
    path: "/personalInfo",
    name: "PersonnalInfo",
    component: PersonnalInfo,
  },
  {
    path: "/exprerience",
    name: "exprerience",
    component: exprerience,
  },
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/cvprev",
    name: "Cvprev",
    component: Cvprev,
  },
  {
    // download
    path: "/download",
    name: "Download",
    component: Download,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
