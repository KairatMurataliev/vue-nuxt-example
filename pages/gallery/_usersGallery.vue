<template>
  <div>
    <h3 v-if="usersGallery && usersGallery.author" class="author">{{ usersGallery.author.username }}</h3>
    <div class="photo-container">
      <div v-for="image of usersGallery.photos" class="photo">
        <img :src="`http://localhost:8000/uploads/${image.photo}`" alt="" class="image">
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  mounted() {
    this.fetchUsersGallery(this.$route.params.usersGallery)
  },
  computed: mapState(['usersGallery']),
  methods: {
    ...mapActions(['fetchUsersGallery']), ...mapMutations(['addUsersPhotos'])
  },
}
</script>

<style scoped>
  .photo {
    width: 400px;
    padding: 10px;
    border-radius: 10px;
    background: #e3e3e3;
    margin-bottom: 10px
  }
  .image {
    width: 100%
  }
  .photo-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .author {
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 20px
  }
</style>
