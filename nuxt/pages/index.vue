<template>
  <section class="home">
      Home template!
      <h1 v-html="page.title.rendered"></h1>
      <div v-html="page.content.rendered"></div>
  </section>
</template>

<script>
import PageComponent from "@/components/pages/PageComponent";

export default {
  components: { 
    PageComponent
  },
  data() {
    return {
      page: {} 
    }
  },
  mounted() {
  },
  async asyncData ({ params, app}) {
    return {
        page: await app.$wordpressApi.getFrontPage(app.i18n.locale)
    }
  },
  methods: {
    
  }
}
</script>