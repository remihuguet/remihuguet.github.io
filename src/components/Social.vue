<template>
    <div class="links">
        <div class="links__links">
          <a target='_blank' rel="noreferrer" href="mailto:me@remihuguet.dev" title="Email">
            <g-image src='~/assets/images/mail.svg' width="32" />
          </a>
          <a target='_blank' rel="noreferrer" href="/rss.xml" title="RSS feed">
            <g-image src='~/assets/images/rss.svg' width="32" />
          </a>
          <a target='_blank' rel="noreferrer" href="//linkedin.com/in/remihuguet/" title="Linkedin">
              <g-image src='~/assets/images/linkedin.svg' width="32" />
          </a>
          <a target='_blank' rel="noreferrer" href="//twitter.com/remihuguet" title="Twitter">
              <g-image src='~/assets/images/twitter.svg' width="32" />
          </a>
          <a target='_blank' rel="noreferrer" href="//gitlab.com/remihuguet" title="Gitlab">
            <g-image src='~/assets/images/glab.svg' width="32" />
          </a>
          <a target='_blank' rel="noreferrer" href="//github.com/remihuguet" title="Github">
            <g-image src='~/assets/images/ghub.svg' width="32" />
          </a>
      </div>
    </div>
</template>

<style lang="scss">
.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: calc(2 * var(--space)) 0;

  &__links{
    a {
      margin: 0 calc(1/2 * var(--space));
    }
  }
}
</style>
