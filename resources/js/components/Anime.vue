<template>
    <div>
        <div v-bind:style="{ width: width + 'px' }" class="bar">RTS</div>
    <div class="bar bar2"></div>
    <input class="range" v-model="width" type="range" min="0" value="30" max="1000" step="1" v-on:change="animate">
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

    export default {
        data() {
            return {
                width: 500
            }
        },
        methods: {
        animate: function() {
            console.log("Here");
            anime({
                targets: '.bar2',
                duration: 1500,
                // easing: 'easeInSine',
                elasticity: 400,
                width: this.width
            });
        }
    }
    }
</script>

<style lang="scss" scoped>
.bar {
    background: red;
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}
</style>

