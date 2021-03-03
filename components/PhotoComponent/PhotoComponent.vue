<template>
  <b-card
    title="Card Title"
    :img-src="`http://localhost:8000/uploads/${photo}`"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{title}}
    </b-card-text>
    <b-card-text>
      {{author.username}}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "PhotoComponent",
  props: {
    photo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: Object,
    },
  }
}
</script>

<style scoped>

</style>
