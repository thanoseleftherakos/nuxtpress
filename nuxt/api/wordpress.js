
export default $axios => resource => ({
  getPageBySlug(slug, lang, error) {
    return $axios.get(`${resource}/slug?_embed&slug=${slug}&lang=${lang}`)
            .then(r => r.data)
            .catch((e) => {
              error({ statusCode: 404, message: 'Page not found' })
            })
  },
  getFrontPage(lang) {
    return $axios.get(`${resource}/front-page?_embed&lang=${lang}`)
            .then(r => r.data)
            .catch(e => console.log(`${e.message}`))
  },
  getPosts (lang, perPage = 10) {
    let url = `${resource}/posts?_embed&per_page=${perPage}&lang=${lang}`
    return $axios.get(url)
      .then(r => r.data)
      .catch(e => console.log(`${url} ${e.message}`))
  },
  getPaginatedPosts (lang, perPage = 10, pageNumber = 1, tagId = null, categoryId = null) {
    let url = `${resource}/posts?_embed&per_page=${perPage}&page=${pageNumber}&lang=${lang}`
    if (tagId) {
      url += `&tags=${tagId}`
    }
    if (categoryId) {
      url += `&categories=${categoryId}`
    }
    return $axios.get(url)
      .then(response => {
        const result = {
          total: Number(response.headers['x-wp-total']),
          totalPages: Number(response.headers['x-wp-totalpages']),
          data: response.data
        }
        return result
      })
      .catch(e => console.log(`${e.message}`))
  },
  getPostBySlug (slug, lang) {
    let url = `${resource}/slug?_embed&slug=${slug}&lang=${lang}`
    return $axios.get(url)
      .then(r => r.data)
      .catch(e => console.log(`${e.message}`))
  },
  getTagBySlug (slug, lang) {
    let url = `${resource}/tags?slug=${slug}&lang=${lang}`
    return $axios.get(url)
      .then(r => r.data[0])
      .catch(e => console.log(`${e.message}`))
  },
  getCategoryBySlug (slug, lang) {
    let url = `${resource}/categories?slug=${slug}&lang=${lang}`
    return $axios.get(url)
      .then(r => r.data[0])
      .catch(e => console.log(`${e.message}`))
  },
  getCategories () {
    let url = `${resource}/categories?lang=${lang}`
    return $axios.get(url)
      .then(r => r.data)
      .catch(e => console.log(`${e.message}`))
  },
  getMenu (location, lang) {
    let url = `${resource}/menu?lang=${lang}&location=${location}`;
    return $axios.get(url)
    .then(r => r.data)
    .catch(e => console.log(`${e.message}`))
  },
  getInitialization () {
    let url = `${resource}/initalize`;
    return $axios.get(url)
    .then(r => r.data)
    .catch(e => console.log(`${e.message}`))
  },
});
// const api = {
//     getPosts (perPage = 10) {
//       let url = `${endpoint}/posts?per_page=${perPage}`
//       return axios.get(url)
//         .then(r => r.data)
//         .catch(e => console.log(`${url} ${e.message}`))
//     },
//     getPaginatedPosts (perPage = 10, pageNumber = 1, tagId = null, categoryId = null) {
//       let url = `${endpoint}/posts?per_page=${perPage}&page=${pageNumber}`
//       if (tagId) {
//         url += `&tags=${tagId}`
//       }
//       if (categoryId) {
//         url += `&categories=${categoryId}`
//       }
//       return axios.get(url)
//         .then(response => {
//           const result = {
//             total: Number(response.headers['x-wp-total']),
//             totalPages: Number(response.headers['x-wp-totalpages']),
//             data: response.data
//           }
//           return result
//         })
//         .catch(e => console.log(`${url} ${e.message}`))
//     },
//     getPostBySlug (slug, lang) {
//       let url = `${endpoint}/posts?_embed&slug=${slug}`
//       return axios.get(url)
//         .then(r => r.data[0])
//         .catch(e => console.log(`${url} ${e.message}`))
//     },
//     getPageBySlug (slug, lang) {
//       console.log('getslugbupage'+lang);
//       lang = 'en';
//       let url = `${endpoint}/pages?_embed&slug=${slug}&lang=${lang}`
//       return axios.get(url)
//         .then(r => r.data[0])
//         .catch(e => console.log(`${url} ${e.message}`))
//     },
//     // getTagBySlug (slug, lang) {
//     //   let url = `${endpoint}/tags?slug=${slug}`
//     //   return axios.get(url)
//     //     .then(r => r.data[0])
//     //     .catch(e => console.log(`${url} ${e.message}`))
//     // },
//     // getCategoryBySlug (slug, lang) {
//     //   let url = `${endpoint}/categories?slug=${slug}`
//     //   return axios.get(url)
//     //     .then(r => r.data[0])
//     //     .catch(e => console.log(`${url} ${e.message}`))
//     // },
//     // getCategories () {
//     //   let url = `${endpoint}/categories`
//     //   return axios.get(url)
//     //     .then(r => r.data)
//     //     .catch(e => console.log(`${url} ${e.message}`))
//     // },
//     // getComments (url) {
//     //   return axios.get(url)
//     //     .then(r => r.data)
//     //     .catch(e => console.log(`${url} ${e.message}`))
//     // }
//   }
  
//   export default api