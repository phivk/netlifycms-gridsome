<template>
  <Layout>
    <div class="artwork-title">
      <h1 class="artwork-title__text">
        {{ $page.drawing.title }}
      </h1>
      
      <ArtworkMeta :artwork="$page.drawing" />

    </div>
    
    <div class="artwork content-box">
      <div class="artwork__header">
        <g-image alt="Cover image" v-if="$page.drawing.coverImage" :src="$page.drawing.coverImage" />
      </div>

      <div class="artwork__content" v-html="$page.drawing.content" />

      <!-- <div class="artwork__footer">
        <ArtworkTags :artwork="$page.drawing" />
      </div> -->
    </div>

    <div class="artwork-comments">
      <!-- Add comment widgets here -->
    </div>

    <Author class="artwork-author" />
  </Layout>
</template>

<script>
import ArtworkMeta from '~/components/ArtworkMeta'
import ArtworkTags from '~/components/ArtworkTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    ArtworkMeta,
    ArtworkTags
  },
  metaInfo () {
    return {
      title: this.$page.drawing.title,
      meta: [
        {
          name: 'description',
          content: this.$page.drawing.material + ' (' + this.$page.drawing.year + ')'
        }
      ]
    }
  }
}
</script>

<page-query>
query Drawing ($path: String!) {
  drawing: drawing (path: $path) {
    title
    path
    date (format: "D. MMMM YYYY")
    year
    material
    dimensions
    timeToRead
    tags {
      id
      title
      path
    }
    content
    coverImage (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.artwork-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.artwork {
  padding-bottom: 0;

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    
    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.artwork-comments {
  padding: calc(var(--space) / 2);
  
  &:empty {
    display: none;
  }
}

.artwork-author {
  margin-top: calc(var(--space) / 2);
}
</style>