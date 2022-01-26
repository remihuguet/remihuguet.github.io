<template>
    <ul class="nav">
        <li>
            <g-link to="/home">Accueil</g-link>
        </li>
        <li>
            <g-link to="/blog/">Blog</g-link>
        </li>
        <li>
            <g-link to="/resume/">A&nbsp;propos</g-link>
        </li>
        <li>
            <g-link to="/testimonies/">Témoignages</g-link>
        <li>
            <g-link to="/contact/">Contact</g-link>
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
            font-family: var(--font-family-base);
            font-weight: 600;
            line-height: 1.2;
            padding: calc(var(--space)/2) calc(var(--space));
            color: var(--white);
            text-decoration: none;

            &.active, &:focus, &:hover {
                border-bottom: 5px solid var(--yellow);
                opacity: 1;
            }
        }
    }

}

</style>
