<template>
    <div>
      <button @click="show =! show"> show hide text</button>
      <transition name="fade">
        <p v-if="show">Hello Word</p>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "tranisition",
        data(){
          return{
            show:true
          }
        }
    }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active 在低于版本 2.1.8 中 */ {
    opacity: 0;
  }
</style>
