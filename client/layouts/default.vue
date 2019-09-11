<template>
  <div id="default-layout">
    <MainHeader />
    <nuxt />
    <div id="particles"></div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import MainHeader from './../components/header/MainHeader'
export default {
  components: {
    MainHeader
  }
}
</script>

<style>
</style>
