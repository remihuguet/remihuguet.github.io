<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>
      <div class="header__right">
        <Lang/>
        <Links />
      </div>
    </header>

    <main class="main">

      <Breadcrumb />
      <slot />
    </main>

    <footer class="footer">
      <Links />
      <Social />
      <p class="footer__copy">
        <span class="footer__copyright">© {{ new Date().getFullYear() }} Rémi Huguet.</span>
        <span class="footer__links">
          Site propulsé par
          <a href="//gridsome.org" target="_blank" rel="noreferrer">Gridsome</a>.
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Links from "~/components/Links.vue";
import Social from "~/components/Social.vue";
import Lang from '~/components/LanguageSwitch.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    Links,
    Social,
    Lang,
    Breadcrumb
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  min-height: var(--header-height);
  padding: 0 0 calc(var(--space) / 3) 0;
  max-width: var(--content-width);
  margin: calc(var(--space) / 2) auto;
  border-bottom: solid 5px var(--link-color);

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }
}

.main {
  margin: 0 auto;
  padding: 0 15px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  margin-top: 3rem;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  &__copy {
    margin: 0.5rem 0;
  }
}

@media screen and (max-width: 920px) {
  .header {
    padding: 0 calc(var(--space) / 3) calc(var(--space) / 3) calc(var(--space) / 3);
  }
}


</style>
