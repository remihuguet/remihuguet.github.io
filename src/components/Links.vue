<template>
    <ul class="nav">
        <li>
            <g-link to="/blog/">Blog</g-link>
        </li>
        <li>
            <g-link to="/about/">À propos</g-link>
        </li>
    </ul>
</template>

<style lang="scss">
ul.nav {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: right;
    list-style: none;
    & li {
        margin: 0;
        padding: 0 0.4rem;
     & a {
        font-family: var(--font-body);
        font-weight: 700;
        font-size: 0.8rem;
     }
    }

}

</style>
