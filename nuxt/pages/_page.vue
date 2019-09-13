<template>
  <div class="container">
    <component :is="template" :data="page" />
  </div>
</template>

<script>
import PageComponent from "@/components/pages/PageComponent";

export default {
  components: { 
    PageComponent
  },
  data() {
    return {
      template: "",
      page: {} 
    }
  },
  mounted() {
    if(this.page) {
      this.selectTemplate();
    }
  },
  async asyncData ({ params, app}) {
    //fix nuxt-i18n bug for /localecode
    if(app.i18n.locales.some(e => e.code === params.page)) {
      params.page = null;
      // app.switchLocalePath('el')
    }
    return {
      page: await app.$wordpressApi.getPageBySlug(params.page, app.i18n.locale)
    }
  },
  methods: {
    selectTemplate() {
      if(this.page) {
        if(this.page.template) {
          this.template = this.page.template.replace('template-','').replace('.php','')+ '-component';
        } else {
          this.template = 'page-component';
        }
      } else {
        this.template = 'home-component';
      }
    }
  }
}
</script>