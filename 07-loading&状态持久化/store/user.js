export const state = () => ({
  token: ''
})

export const mutations = {
  M_UPDATE_USER (state, payload) {
    state.token = payload
  }
}