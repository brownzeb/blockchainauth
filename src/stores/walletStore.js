import { defineStore } from 'pinia'

// Import images
import trustWalletImage from '@/assets/trustwallet.png'
import atomicwalletimage from '@/assets/atomicwallet.png'
import blockchainwalletimage from '@/assets/blockchain.png'
import coinbasewalletimage from '@/assets/coinbase.png'
import exoduxwalletimage from '@/assets/exodus.png'
import edgewalletimage from '@/assets/edge.png'
import gurdawalletimage from '@/assets/gurdawallet.png'
import safepalwalletimage from '@/assets/safepal.png'
import dcentwalletimage from '@/assets/dcent.png'
import metamaskwalletimage from '@/assets/metamask.jpeg'
import dharmawalletimage from '@/assets/dharma.jpeg'
import ledgerwalletimage from '@/assets/ledgerwallet.png'
import phantomwalletimage from '@/assets/phantomwallet.png'
import uniswapwalletimage from '@/assets/uniswapwallet.png'
import bitpiewalletimage from '@/assets/bitpiewallet.jpeg'
import zengowalletimage from '@/assets/zengowallet.png'
import bitgetwalletimage from '@/assets/bitgetwallet.jpeg'

export const useWalletStore = defineStore('walletStore', {
  state: () => ({
    wallets: [
      { id: 1, title: 'Atomic Wallet', image: atomicwalletimage },
      { id: 2, title: 'Blockchain', image: blockchainwalletimage },
      { id: 3, title: 'Coinbase', image: coinbasewalletimage },
      { id: 4, title: 'Exodus', image: exoduxwalletimage },
      { id: 5, title: 'Edge', image: edgewalletimage },
      { id: 6, title: 'Gurda', image: gurdawalletimage },
      { id: 7, title: 'Safepal Wallet', image: safepalwalletimage },
      { id: 8, title: 'Trust Wallet', image: trustWalletImage },
      { id: 9, title: 'Dcent Wallet', image: dcentwalletimage },
      { id: 10, title: 'Metamask Wallet', image: metamaskwalletimage },
      { id: 11, title: 'Dharma Wallet', image: dharmawalletimage },
      { id: 12, title: 'Ledger Wallet', image: ledgerwalletimage },
      { id: 13, title: 'Phantom Wallet', image: phantomwalletimage },
      { id: 14, title: 'Uniswap Wallet', image: uniswapwalletimage },
      { id: 15, title: 'Bitpie Wallet', image: bitpiewalletimage },
      { id: 15, title: 'Zengo Wallet', image: zengowalletimage },
      { id: 15, title: 'Bitget Wallet', image: bitgetwalletimage },
    ],
  }),
})