<template>
  <div>
    <header>
      <router-link to="/" class="logo">Logo</router-link>
      <div class="nav">
        <router-link :to="{ name: 'Wallets' }">connect wallet</router-link>
        <div class="flag"></div>
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  background-color: rgb(18, 18, 44);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 120px;
}
.logo {
  padding: 10px 20px;
  background-color: white;
  border-radius: 12px;
  text-decoration: none;
}
.logo a {
  text-decoration: none;
}
.nav {
  display: flex;
  gap: 20px;
}
.nav a {
  background-color: rgb(64, 120, 224);
  padding: 10px 20px;
  border-radius: 12px;
  text-decoration: none;
  color: white;
}
.flag {
  padding: 10px 30px;
  background-color: black;
  border: 2px solid white;
  border-radius: 12px;
}
</style>
