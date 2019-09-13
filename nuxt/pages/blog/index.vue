<template>
    <div class="news">
      News template!
      <div class="news__items" v-if="news">
        <nuxt-link :to="{path: 'blog/'+item.slug}" class="news__item" v-for="item in news" v-bind:key="item.ID">
          {{item.title.rendered}}
        </nuxt-link>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            news: {}
        }
    },
    mounted() {
        console.log(this.news);
    },
    async asyncData ({ params, app}) {
        return {
            news: await app.$wordpressApi.getPosts(app.i18n.locale, 10)
        }
    },
}
</script>