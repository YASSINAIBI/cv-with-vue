<template>
  <div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1800"
      filename="mycv"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a2"
      pdf-orientation="landscape"
      pdf-content-width="1200px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <div class="download">
          <cvPrev></cvPrev>
        </div>
      </section>
    </vue-html2pdf>
    <button
      type="button"
      class="btn btn-warning btn-lg btn-block mt-5"
      @click="generateReport"
    >
      DOWNLOAD
    </button>
  </div>
</template>

<script>
import cvPrev from "@/components/CvPrev.vue";
import VueHtml2pdf from "vue-html2pdf";

export default {
  name: "download",
  data() {
    return {};
  },
  components: {
    cvPrev,
    VueHtml2pdf,
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style lang="scss">
.download {
  .redirectBtn {
    display: none;
  }
}
</style>
