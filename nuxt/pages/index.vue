<template>
  <section class="home">
      Home template!
      <h1 v-html="page.title.rendered"></h1>
      <div v-html="page.content.rendered"></div>
  </section>
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
      page: {} 
    }
  },
  mounted() {
  },
  computed: {
    ...mapState(['initialization'])
  },
  async asyncData ({ params, app}) {
    return {
        page: await app.$wordpressApi.getFrontPage(app.i18n.locale)
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