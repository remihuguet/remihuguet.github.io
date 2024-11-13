<template>
  <div class="bg-wrapper">
    <div class="clients">
      <div class="clients__title">
        <h2>{{ title }}</h2>
        <hr />
      </div>
      <div class="clients__logos">
        <g-image
          v-for="client in clients"
          :key="client.name"
          :src="cloudy_url(client.logo)"
          :alt="client.name"
          class="client-logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

export default {
  methods: {
    cloudy_url: function (img) {
      return cl.url(img, {
        transformation: [{ effect: "sharpen:100", width: 200, crop: "scale" }],
      });
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    clients: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-wrapper {
  padding: calc(2 * var(--space)) calc(6 * var(--space));

  @media screen and (max-width: 650px) {
    padding: calc(2 * var(--space)) calc(2 * var(--space));
  }

  .clients {
    .clients__title {
      max-width: var(--content-width);
      margin: calc(2 * var(--space)) auto;
    }

    .clients__logos {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  .client-logo {
    max-width: 200px;
    height: auto;
    margin: var(--space );
  }
}
</style>
