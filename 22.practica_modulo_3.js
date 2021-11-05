// Fork del proyecto en CodePen: https://codepen.io/ianaya89/pen/LYYJzor
Vue.component('modal', {
  props: [
    'title',
  ],

  template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ title }}</h3>
            <div>
              <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="close">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`,

  methods: {
    close() {
      this.$emit('close')
    }
  }
})

new Vue({
  el: '#app',

  data() {
    return {
      showModal: false,
      title: 'Atención',
    }
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
})