<template>
    <div class="content-box breadcrumb">
        <span v-for="(p, i) in crumbs" :key='i'>
            <span v-if="i + 1 < crumbs.length">
                <g-link  :to="p.path">{{p.name}}</g-link> > 
            </span>
            <span v-else>{{p.name}}</span>
        </span> 
    </div>
</template>


<script>

export default {
    computed: {
        crumbs () {
            let c = [{name: 'Accueil', path: '/'}];
            if (this.$route.params.title) {
                return c.concat([{name: "Blog", path: '/blog/'}, {name: this.$page.post.title}]);
            }
            else if (this.$route.path == "/blog/") {
                return c.concat([{name: "Blog"}]);
            }
            else if ((this.$route.path == "/about/")){
                return c.concat([{name: "À propos"}]);
            }
        }
    }
}
</script>
<style lang="scss">
.breadcrumb {
    padding:0;
    margin: 0 auto calc(2 * var(--space)) auto;
    font-size: 0.8em;
}

</style>
