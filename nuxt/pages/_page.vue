<template>
  <div class="container">
    <component :is="template" :data="page" />
  </div>
</template>

<script>
import api from "../api/index";
import HomeComponent from "@/components/pages/HomeComponent";
import NewsComponent from "@/components/pages/NewsComponent";

export default {
  components: { 
    HomeComponent,
    NewsComponent,
  },
  data() {
    return {
      template: ""
    }
  },
  mounted() {
    this.selectTemplate();
  },
  async asyncData ({ params }) {
    let data = '';
    if(params.page) {
      data = await api.getPageBySlug(params.page)
    } else {
      data = await api.getPageBySlug('home');
    }
    return {
      page: data
    }
  },
  methods: {
    selectTemplate() {
      if(this.page) {
        this.template = this.page.template.replace('template-','').replace('.php','')+ '-component';
      } else {
        this.template = 'home-component';
      }
    }
  }
}
</script>