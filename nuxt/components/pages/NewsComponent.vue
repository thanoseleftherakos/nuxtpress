<template>
  <section class="news">
      News template!
      <h1 v-html="data.title.rendered"></h1>
      <div v-html="data.content.rendered"></div>
      <div class="news__items" v-if="news">
        <nuxt-link :to="{path: 'blog/'+item.slug}" class="news__item" v-for="item in news" v-bind:key="item.ID">
          {{item.title.rendered}}
        </nuxt-link>
      </div>
  </section>
</template>


<script>
import { mapState } from 'vuex';
export default {
    props:  ['data'],
    mounted() {
      this.$store.dispatch('setNews', 10);
    },
    computed: {
      ...mapState(['news'])
    }
    
}
</script>
