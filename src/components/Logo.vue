<template>
    <g-link :to="'/'">
        <span class="logo">
          🏠
            <!-- {{ $static.metadata.siteName }} -->
        </span>
    </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" >
.logo {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.8rem;
  // letter-spacing: 0.06ch;
  // color: var(--body-color)!important;
  // text-decoration: none;
  // text-transform: uppercase;
  // font-size: 2rem;
}

a {
  &:hover {
    text-decoration: none;
  }
    text-decoration: none;
}
</style>
