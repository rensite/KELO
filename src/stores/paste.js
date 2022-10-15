import { defineStore } from 'pinia'

export const usePasteStore = defineStore('paste', {
  state: () => {
    return {
        pastedText: ''
    }
  },
  getters: {
    pastedTextValue () {
        return this.pastedText
    }
  },
  actions: {
    setPastedText (pastedText) {
        this.pastedText = pastedText
    }
  },
})
