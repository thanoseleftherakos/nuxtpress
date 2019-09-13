<template>
    <div>
        <h1>{{post.title.rendered}}</h1>
        <div class="content" v-html="post.content.rendered"></div>
    </div>
</template>
<script>
export default {
data() {
    return {
      post: {} 
    }
  },
  async asyncData ({ params, app}) {
    return {
        post: await app.$wordpressApi.getPageBySlug(params.post, app.i18n.locale)
    }
  },
}
</script>