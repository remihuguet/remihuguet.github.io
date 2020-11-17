<template>
    <div class="content-box me">
        <g-image alt="" class="me__image" :src="myself_url" blur="5"/>
        <div class="me__iam">
          <p v-for="(p, i) in presentations" :key="i">{{p}}</p>
        </div>
    </div>
</template>

<script>
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

export default {

  props: ["presentations"],
  computed: {
    myself_url: function () {
      return cl.url('portrait2018_p3ku3w.jpg', {transformation: [
        {effect: "sharpen:100", width: 360, crop: "scale"},
      ]});
    }
  },
    
}
</script>

<style lang="scss" scoped>
.me {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: calc(8 * var(--space)) auto calc(6 * var(--space)) auto;

  .me__image {
    flex-shrink: 0;
    flex-grow: 0;
    height: auto;
    width: 20vw;
  }
  .me__iam {
    text-align: center;
    flex-basis: 50%;
  }
}


</style>
