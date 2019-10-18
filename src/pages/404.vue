<template>
  <Layout>
    <div class="content-box">
      <h1>Aïe! Cette page n'existe pas.</h1>
      <p>Désolé si je vous ai amené ici, voici un petit chat pour vous consoler.</p>
      <p> Retrouvez votre chemin avec les liens d'en-tête ;)</p>
      <iframe src="https://giphy.com/embed/yFQ0ywscgobJK" width="398" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/facepalm-yFQ0ywscgobJK"></a></p>
    </div>
  </Layout>
</template>

<script>

export default {

}
</script>

<page-query>
query {
  metadata {
    siteDescription
    siteName
    siteUrl
  }
}
</page-query>

<style lang="scss">
.content-box {
  text-align: center;
}
</style>
