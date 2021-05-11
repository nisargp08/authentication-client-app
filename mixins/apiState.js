export default {
  data() {
    return {
      errMessages: [],
      sucMessages: [],
    }
  },
  methods: {
    resetState() {
      this.errMessages = []
      this.sucMessages = []
    },
    setErrorMessage(err) {
      if (err.message.includes(',')) {
        const messages = err.message.split(',')
        this.errMessages = messages
      } else {
        this.errMessages.push(err.message)
      }
    },
  },
}
