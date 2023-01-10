const app = Vue.createApp({

    // template:  `
    // <h1> Hola Mundo </h1>
    // <p> Desde app.js </p>
    // `

    data(){
        return {
            quote: 'I\'m Iron Man',
            author: 'Tony Stark'
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola Mundo');
            this.author = "Danmcode";
            this.capitalize();
        },
        capitalize(){
            this.quote = this.quote.toUpperCase();
        }

    },

});

app.mount('#myApp');