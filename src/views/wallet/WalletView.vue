<template>
  <div class="wallet">
    <section>
      <header>
        <router-link to="/" class="logo">
          <img :src="logo" alt="blockchain-logo" />
        </router-link>
        <div class="nav">
          <router-link :to="{ name: 'home' }">Authenticate Wallet</router-link>
        </div>
      </header>
    </section>
    <section class="hero">
      <h1>Authenticate Wallet</h1>
      <div style="color: white; margin-top:20px; margin-bottom:10px;">Search Wallet</div>

      <div class="input">
        <input type="text" v-model="searchTerm" placeholder="Search wallets..." />
        <!-- <button @click="filterWallets">Search</button> -->
      </div>
    </section>

    <section class="wallets">
      <h2>Choose your wallet</h2>
      <div class="wallet-container" v-if="filteredWallets.length > 0">
        <router-link
          v-for="wallet in filteredWallets"
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
      <p v-else class="no-wallet">Wallet not found</p>
      <FooterComp />
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import logo from '@/assets/logo.png'
import FooterComp from '@/components/FooterComp.vue'
import { useWalletStore } from '@/stores/walletStore'

const walletStore = useWalletStore()
const searchTerm = ref('')

const filteredWallets = computed(() => {
  return walletStore.wallets.filter(wallet =>
    wallet.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
</script>


<style scoped>
.no-wallet {
  font-size: 20px;
  color: #ff4d4d;
  /* font-weight: bold; */
  margin: 20px;
  padding: 10px;
  background: #ffe6e6;
  border-radius: 5px;
  display: inline-block;
}

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
  width: 100%;
  font-size: 28px;
  font-weight: 600;
  justify-content: center;
  display: flex;
  align-items: center;
  /* background-color: black; */
  text-align: center;
  margin-top: 5px;
  color: #fff;
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
  margin-top: 20px;
}
.wallets h2 {
  font-size: 32px;
  font-weight: 400;
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
  border-radius: 8px;
  height: 200px;
  background-color: rgb(228, 228, 228);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  text-decoration: none;
}
.title {
  width: 100%;
  border-radius:8px 8px 0   0;
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
    width: 85%;
  }
  .wallet-container {
    width: 100%;
    /* background-color: #f70000; */
    border-radius: 8px;
    padding: 20px;
  }
  .wallet-card{
    width: 100%;
    height: min-content;
    padding: 16px;
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
