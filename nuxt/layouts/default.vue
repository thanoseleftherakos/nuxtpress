<template>
  <div>
    <primary-menu :menuitems='getMenus.primary'></primary-menu>
    <nav>
      <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">{{ locale.code }}</nuxt-link>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import PrimaryMenu from "@/components/menus/Primary";
export default {
  components: { 
    PrimaryMenu
  },
  mounted() {
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    getMenus () {
      return this.$store.state.menus;
    }
  }
}
</script>
