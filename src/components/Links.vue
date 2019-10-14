<template>
    <ul class="nav">
        <li>
            <a href="/about/">À propos</a>
        </li>
        <li>
            <a href="/">Veille</a>
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
        // text-decoration: none;
        font-weight: 700;
        font-size: 1.2rem;
     }
    }

}

</style>
