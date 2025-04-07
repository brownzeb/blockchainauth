<template>
  <div>
    <header>
      <router-link to="/" class="logo">
        <img src="../assets/logo.png" alt="blockchain-logo" />
      </router-link>
      <div class="nav">
        <router-link :to="{ name: 'Wallets' }">connect wallet</router-link>
        <!-- <div class="flag"></div> -->
      </div>
    </header>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  height: 70px;
  /* background-color: rgb(18, 18, 44); */
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 120px;
}
.logo {
  padding: 0;
  width: 30%;
  /* background-color: white; */
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
  background-color: rgb(46, 69, 112);
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  white-space: nowrap;
}
.flag {
  padding: 10px 30px;
  background-color: black;
  border: 2px solid white;
  border-radius: 12px;
}
@media (max-width: 768px) {
  header {
    flex-direction: row;
    align-items: center;
    /* padding: 15px 20px; */
    /* background-color: #1a1a60;  */
    gap: 15px;
  }

  .logo {
    /* padding: 10px 15px; */
    font-size: 1.2em;
  }

  .nav {
    flex-direction: column;
    align-items: flex-start;
    /* gap: 10px; */
  }

  .nav a {
    font-size: 16px;
    /* color: red; */
    padding: 6px 6px;
    border-radius: 4px;
  }

  .flag {
    display: none; /* Hide flag completely for better space management */
  }
}

@media (max-width: 480px) {
  header {
    padding: 10px 15px;
    gap: 10px;
  }

  .logo {
    font-size: 1em;
    padding: 8px 10px;
  }

 
}
</style>
