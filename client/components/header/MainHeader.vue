<template>
  <header id="header">
      <div class="container">
          <NuxtLink class="logo-link" to="/home"><img class="logo" src="~/static/img/dennisfink-logo-white.svg" alt=""></NuxtLink>
          <nav>
              <ul>
                  <li>
                      <NuxtLink to="/login">Login</NuxtLink>
                  </li>
              </ul>
          </nav>
      </div>
  </header>
</template>

<script>
export default {
    name: "MainHeader"
}
</script>

<style>

</style>