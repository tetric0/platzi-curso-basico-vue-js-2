new Vue({
    el: '#app',

    data() {
        return {
            courses: [
                //                { title: 'Curso 1', time: 21 },
                //                { title: 'Curso 2', time: 25 },
                //                { title: 'Curso 3', time: 28 },
                //                { title: 'Curso 4', time: 17 },
            ],
            title: null,
            time: null,
        }
    },

    computed: {
        totalTime() {
            return this.courses.reduce(function (acumulador, elementoActual) {
                return acumulador + parseInt(elementoActual.time)
            }, 0);
        }
    },

    methods: {
        addCourse() {
            this.courses.push({ title: this.title, time: this.time })
        }
    }
})