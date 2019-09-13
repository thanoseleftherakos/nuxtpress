<template>
    <div>
        <h1>{{post.title.rendered}}</h1>
        <div class="content" v-html="post.content.rendered"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      post: {} 
    }
  },
  computed: {
    ...mapState(['initialization'])
  },
  async asyncData ({error, params, app}) {
    return {
        post: await app.$wordpressApi.getPageBySlug(params.post, app.i18n.locale, error)
    }
  },
  head () {
    return {
      title: `${this.post.title.rendered} | ${this.initialization.sitename}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
  
}
</script>