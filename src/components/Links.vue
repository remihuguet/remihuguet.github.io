<template>
    <ul class="nav">
        <li>
            <g-link to="/fr">Accueil (fr)</g-link> / 
            <g-link to="/en">Home (en)</g-link>
        </li>
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
        letter-spacing: 0.06ch;
        font-family: var(--font-headers);
        font-weight: 700;
        font-size: 1.2rem;
     }
    }

}

</style>
