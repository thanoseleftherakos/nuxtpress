<template>
  <div class="container">
    <component :is="template" :data="page" />
  </div>
</template>

<script>
import PageComponent from "@/components/pages/PageComponent";
import { mapState } from 'vuex'
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
  computed: {
    ...mapState(['initialization'])
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
  },
   async asyncData ({error, params, app}) {
    return {
      page : await app.$wordpressApi.getPageBySlug(params.page, app.i18n.locale, error) 
    }
  },
  head () {
    return {
      title: `${this.page.title.rendered} | ${this.initialization.sitename}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>