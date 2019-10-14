<template>
	<g-link class="logo" to="/">
	  <span class="logo__text">
	    {{ $static.metadata.siteName }}
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

<style lang="scss">
.logo {
	text-decoration: none;
	color: var(--body-color)!important;
	font-family: var(--font-headers);
	text-transform: uppercase;
	font-weight: 600;
	font-size: 2rem;

	&__image {
		vertical-align: middle;
		border-radius: 99px;
		height: 40px;
		width: 40px;
		margin-right: .5em;
	}

}
</style>
