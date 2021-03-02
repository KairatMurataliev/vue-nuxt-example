<template>
  <div class="photo">
    <img :src="`http://localhost:8000/uploads/${photo}`" alt="image" class="image">
    <h4>{{title}}</h4>
    <p>{{author.username}}</p>
    <NuxtLink :to="`photos/${id}`">
      See More
    </NuxtLink>
  </div>
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
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .photo {
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
    background: #e3e3e3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px
  }

  .image {
    width: 400px
  }
</style>
