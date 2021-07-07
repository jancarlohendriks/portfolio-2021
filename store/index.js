export const state = () => ({
  counter: 0,
	sections: null
})

export const mutations = {
  addSections(state, sections) {
    state.sections = sections
  }
}