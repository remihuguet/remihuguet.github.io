<template>
    <g-link :to="$tp('/')">
        <span class="logo">	
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
}

a {
    text-decoration: none;
}
</style>
