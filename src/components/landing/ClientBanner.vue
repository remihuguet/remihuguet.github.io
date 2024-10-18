<template>
  <section class="client-banner">
    <div class="container">
      <div class="logo-container">
        <g-image
          v-for="client in clients"
          :key="client.name"
          :src="cloudy_url(client.logo)"
          :alt="client.name"
          class="client-logo"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

export default {
  methods: {
    cloudy_url: function (img) {
      return cl.url(img, {
        transformation: [{ effect: "sharpen:100", width: 100, crop: "scale" }],
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

<style scoped>
.client-banner {
  background-color: #f8f8f8;
  padding: 40px 0;
}

.client-banner h2 {
  text-align: center;
  margin-bottom: 30px;
}

.logo-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.client-logo {
  max-width: 150px;
  height: auto;
  margin: 10px;
}

@media (max-width: 768px) {
  .client-logo {
    max-width: 100px;
  }
}
</style>
