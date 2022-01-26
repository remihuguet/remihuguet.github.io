<template>
    <g-link :to="'/'">
        <span class="logo">
          <g-image width="100" src='~/assets/images/logo-secondaire.svg' alt="Logo Rémi Huguet" />
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
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  & > g-image {
    width: 100%;
    height: 100%;
  }
}

a {
  &:hover {
    text-decoration: none;
  }
    text-decoration: none;
}
</style>
