<template>
  <div class="wallet">
    <!-- <HeaderComp /> -->
    <section>
      <header>
        <router-link to="/" class="logo">
          <img :src="logo" alt="blockchain-logo" />
        </router-link>
        <div class="nav">
          <router-link :to="{ name: 'home' }">Authenticate Wallet</router-link>
          <!-- <div class="flag"></div> -->
        </div>
      </header>
    </section>
    <section class="hero">
      <h1>Authenticate Wallet</h1>
      <div class="input">
        <input type="text" />
        <button>search</button>
      </div>
    </section>

    <section class="wallets">
      <h2>Choose your wallet</h2>
      <div class="wallet-container">
        <router-link
          v-for="wallet in walletStore.wallets"
          :key="wallet.id"
          :to="{ name: 'WalletDetails', params: { id: wallet.id } }"
          class="wallet-card"
        >
          <div class="title">{{ wallet.title }}</div>
          <div class="photo">
            <img :src="wallet.image" :alt="wallet.title" />
          </div>
        </router-link>
      </div>
      <FooterComp />
    </section>
  </div>
</template>

<script setup>
import logo from '@/assets/logo.png'
import FooterComp from '@/components/FooterComp.vue'
// import HeaderComp from '@/components/HeaderComp.vue'
import { useWalletStore } from '@/stores/walletStore'

// Use the wallet store
const walletStore = useWalletStore()
</script>

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
  width: 100%;
  height: 40px;
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
  border-radius: 12px;
  text-decoration: none;
  color: white;
  font-size: 12px;
  white-space: nowrap;
}
.flag {
  padding: 10px 30px;
  background-color: black;
  border: 2px solid white;
  border-radius: 12px;
}
.wallet {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

.hero,
.wallets {
  flex-grow: 1; /* These sections expand to push the footer down */
}

footer {
  background-color: #333; /* Optional footer styling */
  color: white;
  text-align: center;
  /* padding: 10px; */
}

.hero {
  width: 100%;
  height: 60vh;
  background-color: rgb(28, 47, 75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 300;
}
.input {
  padding: 10px;
  width: 50%;
  height: 80px;
  background-color: rgb(28, 53, 68);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input input {
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 5px;
  border-radius: 4px 0 0 4px;
  border: none;
}

.input button {
  background-color: rgb(13, 21, 34);
  color: #fff;
  height: 40px;
  font-size: 16px;
  padding: 5px;
  border: none;
  border-radius: 0 4px 4px 0;
  transition: 0.2s;
  width: 40%;
}
.input button:hover {
  background-color: rgb(17, 35, 61);
}
.wallets {
  /* padding: 10px; */
  width: 100%;
  height: 500px;
  text-align: center;
}
.wallets h2 {
  font-size: 32px;
  padding-top: 20px;
  font-weight: 300;
}
.wallet-container {
  display: flex;
  flex-direction: row; /* Ensure items are in a horizontal row */
  gap: 40px; /* Add spacing between items */
  width: 100%;
  padding: 120px;
  /* background-color: rgb(97, 56, 56); */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Align items vertically */
  flex-wrap: wrap;
}

.wallet-card {
  width: 240px;
  height: 200px;
  background-color: rgb(228, 228, 228);
  box-shadow: #f70000;
  text-decoration: none;
}
.title {
  width: 100%;
  height: 40px;
  background-color: rgb(28, 47, 75);
  color: #fff;
  padding: 10px 10px;
}
.photo {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 50px; */
}
.photo img {
  height: 100%;
}
@media (max-width: 768px) {
  .wallet {
    width: 100%;
  }
  .hero h1 {
    font-size: x-large;
  }
  .input {
    width: 100%;
  }
  .wallet-container {
    width: 100%;
    /* background-color: #f70000; */
    border-radius: 8px;
    padding: 20px;
  }
  .wallet-card {
    width: 100%;
  }
  header {
    flex-direction: row;
    align-items: center;
    /* padding: 15px 20px; */
    /* background-color: #1a1a60;  */
    gap: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .logo {
    /* padding: 10px 15px; */
    /* font-size: 18px; */
    width: 170px;
    height: 60px;
    /* background-color: white; */
    display: flex;
    align-items: center;
    justify-content: center;
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
</style>
