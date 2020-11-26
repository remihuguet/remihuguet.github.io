<template>
    <g-link :to="'/'">
        <span class="logo">
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
}

a {
  &:hover {
    text-decoration: none;
  }
    text-decoration: none;
}
</style>
