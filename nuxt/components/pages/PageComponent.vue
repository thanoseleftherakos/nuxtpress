<template>
  <section class="page">
      Page template!
      <h1 v-html="data.title.rendered"></h1>
      <div v-html="data.content.rendered"></div>
  </section>
</template>


<script>
export default {
    props:  ['data']
}
</script>
