Vue.component('CoinDetail', {
    props: ['coin'],

    data() {
        return {
            showPrices: false,
            value: 0,

        }
    },

    computed: {
        title() {
            return `${this.coin.name} - ${this.coin.symbol}`
        },

        convertedValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.coin.price
        }
    },

    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices

            this.$emit('change-color', this.showPrices ? 'FF96C8' : '3D3D3D')
        }
    },

    // Lifecycle Hook
    // @source https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    // Es uno de los primeros eventos que ocurren dentro del ciclo de vida de un componente.
    // Bueno para obtener información de una API Rest.
    created() {
        console.log('Created CoinDetail...');
    },

    // LifeCycle Hook
    // @source https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    // En este evento ya tenemos disponible el DOM y se puede acceder a su información
    // (básicamente elementos del HTML que no están disponibles en el evento 'Created')
    mounted() {
        console.log('Mounted CoinDetail...');
    },

    template: `
      <div>
        <img
          v-on:mouseover="toggleShowPrices"
          v-on:mouseout="toggleShowPrices"
          v-bind:src="coin.img"
          v-bind:alt="coin.name"
        />

        <h1 v-bind:class="coin.changePercent > 0 ? 'green' : 'red'">
          {{ title }}
          <span v-if="coin.changePercent > 0">👍</span>
          <span v-else-if="coin.changePercent < 0">👎</span>
          <span v-else>🤞</span>
          <span v-on:click="toggleShowPrices">
            {{ showPrices ? '🙈' : '🐵' }}
          </span>
        </h1>

        <input type="number" v-model="value" />
        <span>{{ convertedValue }}</span>

        <slot name="text"></slot>
        <slot name="link"></slot>

        <ul v-show="showPrices">
        <li
          class="uppercase"
          v-bind:class="{ orange: p.value == coin.price, red: p.value < coin.price, green: p.value > coin.price }"
          v-for="(p, i) in coin.pricesWithDays"
          v-bind:key="p.day"
        >
          {{ i }} - {{ p.day }} - {{ p.value }}
        </li>
      </ul>
      </div>
    `
})

new Vue({
    el: '#app',

    data() {
        return {
            btc: {
                name: 'Bitcoin',
                symbol: 'BTC',
                img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
                changePercent: -10,
                price: 8400,
                pricesWithDays: [
                    { day: 'Lunes', value: 8400 },
                    { day: 'Martes', value: 7900 },
                    { day: 'Miércoles', value: 8200 },
                    { day: 'Jueves', value: 9000 },
                    { day: 'Viernes', value: 9400 },
                    { day: 'Sábado', value: 10000 },
                    { day: 'Domingo', value: 10200 },
                ]
            },

            color: 'f4f4f4',
        }
    },

    // Lifecycle Hook
    // @source https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    // Es uno de los primeros eventos que ocurren dentro del ciclo de vida de un componente.
    // Bueno para obtener información de una API Rest.
    created() {
        console.log('Created...');
    },

    // LifeCycle Hook
    // @source https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    // En este evento ya tenemos disponible el DOM y se puede acceder a su información
    // (básicamente elementos del HTML que no están disponibles en el evento 'Created')
    mounted() {
        console.log('Mounted...');
    },

    methods: {
        updateColor(color) {
            this.color = color || this.color
                .split('')
                .reverse()
                .join('')
        }
    }
})