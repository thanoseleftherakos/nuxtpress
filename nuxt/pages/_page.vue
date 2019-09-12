<template>
  <div class="container">
    <component :is="template" :data="page" />
  </div>
</template>

<script>
import HomeComponent from "@/components/pages/HomeComponent";
import NewsComponent from "@/components/pages/NewsComponent";
import PageComponent from "@/components/pages/PageComponent";

export default {
  components: { 
    HomeComponent,
    NewsComponent,
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
    console.log(app.i18n.locale);
    if(params.page) {
      return {
        page: await app.$wordpressApi.getPageBySlug(params.page, app.i18n.locale)
      }
    } else {
      return {
        page: await app.$wordpressApi.getPageBySlug('home', app.i18n.locale)
      }
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