<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <slot name="headerleft"></slot>
      </div>
      <div class="header__center">
        <a href="/">Rémi Huguet</a>
      </div>
      <div class="header__right">
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
          <a href="//gridsome.org"  title="Gridsome" target="_blank" rel="noreferrer">Gridsome</a>. <br />
          Icons made by <a href="http://www.freepik.com/" target="_blank" rel="noreferrer" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> <br />
          Illustrations made by <a href="https://www.manypixels.co" target="_blank" rel="noreferrer" title="Manypixels">Manypixels</a>
        </span>
      </p>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Links from "~/components/Links.vue";
import Social from "~/components/Social.vue";
import Breadcrumb from '~/components/Breadcrumb.vue';
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    Links,
    Social,
    Breadcrumb,
    LocaleSwitcher
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  min-height: var(--header-height);
  padding: calc(2 * var(--space)) calc(8 * var(--space));
  margin: 0 0 calc(2 * var(--space)) 0;
  background-color:var(--cultured);
  box-shadow: 0px 2px 5px var(--platinum);

  &__left,
  &__right,
  &__center {
    display: flex;
    flex-basis: 33%;
    align-items: center;
  }
  &__center {
    font-weight: 700;
    color: var(--independence);
    justify-content: center;
  }
  &__left {
    justify-content: flex-start;
  }
  &__right {
    justify-content: flex-end;
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
  padding: calc(2 * var(--space));
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  &__copy {
    margin: 0.5rem 0;
    font-size: 0.7em;
  }
}

@media screen and (max-width: 920px) {
  .header {
    padding: 0 var(--space) var(--space) var(--space);
  }
}

@media print {
  body {
    font-size: 12px;
  }
  
  main, .main {
    width: var(--content-width);
    padding: 0;
  }

  .header, .footer {
    display: none;
  }
}
</style>
