import createWordpressApi from '~/api/wordpress'
export default (ctx, inject) => {
  // inject the wordpressApi in the context (ctx.app.$wordpressApi)
  // And in the Vue instances (this.$wordpressApi in your components)
  const wordpressApiAxios = createWordpressApi(ctx.$axios)
  inject('wordpressApi', wordpressApiAxios('/wp-json/nuxtpress/v1'))

  // You can reuse the wordpressApiAxios object:
  // inject("userRepository", wordpressApiAxios('/users'));
}
