<template>
  <section class="news">
      News template!
      <h1 v-html="data.title.rendered"></h1>
      <div v-html="data.content.rendered"></div>
      <div class="news__items">
        <a href="#" class="news__item">
          hello
        </a>
      </div>
  </section>
</template>


<script>
export default {
    props:  ['data'],
    data() {
      return {
        news: {}
      }
    },
    async asyncData ({ params, app}) { 
      news: await app.$wordpressApi.getPosts(app.i18n.locale, 10)
    }
}
</script>
