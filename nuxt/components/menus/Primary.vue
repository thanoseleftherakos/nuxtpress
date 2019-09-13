<template>
    <nav v-if="menuitems">
      <ul>
        <li v-for="menuitem in menuitems" v-bind:key="menuitem.ID">
            <nuxt-link :to="renderPath(menuitem)">{{ menuitem.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        props:  ['menuitems'],
        mounted() {
        },
        computed: {
            ...mapState(['initialization'])
        },
        methods: {
            renderPath(menuitem) {
                let mslug = "";
                let slug = "";;
                if(menuitem.type_label == "Custom Link") {
                    slug = menuitem.url;
                } else {
                    for(const key in this.initialization.frontpage_id) { //check if home
                        let id = this.initialization.frontpage_id[key];
                        if(id == menuitem.object_id) {
                            slug = '/';
                            break;
                        } else {
                            slug = '/'+menuitem.post_slug;
                        }
                    }
                }
                if(this.$i18n.locale != this.$i18n.defaultLocale ) {
                    mslug = `/${this.$i18n.locale}${slug}`;
                } else {
                    mslug = `${slug}`;
                }
                return mslug;
            }
        }
    }
</script>