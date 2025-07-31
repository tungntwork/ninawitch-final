import { defineStore } from "pinia";
import axios from '../utils/axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  actions: {
    async login(email, password) {
      const res = await axios.post('/api/users/login', { email, password })
      this.token = res.data.token
      this.user = res.data.user
      localStorage.setItem('token', this.token)
      localStorage.setItem('user', JSON.stringify(this.user))
      return res.data
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.clear()
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token
  }
})