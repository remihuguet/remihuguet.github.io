<template>
  <Layout>
    <Post :post="this.$page.post" />
        <div class="ml-form-embed"
      data-account="3133558:z6k9c8a6o1"
      data-form="4049125:f3t1z4">
    </div>
  </Layout>
</template>

<script>
import Post from '~/components/Post';
import {Cloudinary, Layer, TextLayer} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

export default {
  components: {
    Post
  },
  computed: {
    cloudy_image: function () {
      return cl.url('cover.jpg', {transformation: [
        {height: 380, width: 1200, crop: "thumb"},
        {height: 380, overlay: new Layer().publicId("cover_xb5won"), opacity: 51, width: 1200, crop: "scale"},
        {
          overlay: new TextLayer().fontFamily("Oswald").fontSize(100).fontWeight("bold").text(this.$page.post.title),
          effect: "colorize",
          color: "white"
        },
      ]});
    }
  },
  metaInfo () {
    return {
      htmlAttrs: {
        lang: this.$page.post.locale
      },
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        {
          property: 'og:title',
          content:  this.$page.post.title + " - " + this.$page.metadata.siteName 
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl + this.$page.post.path
        },
        {
          property: "og:image",
          content: this.cloudy_image
        }
]
    };
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "DD/MM/YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    locale
  }
  metadata {
    siteName
    siteUrl
  }
}
</page-query>
