<template>
    <nav v-if="menuitems">
      <ul>
        <li v-for="menuitem in menuitems" v-bind:key="menuitem.ID">
            <nuxt-link :to="menuitem.post_slug">{{ menuitem.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
</template>
<script>
    export default {
        props:  ['menuitems'],
        mounted() {
            // console.log(this.menuitems);
        }
    }
</script>