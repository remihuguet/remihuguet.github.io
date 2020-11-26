<template>
    <button class="cta" @click="calendly()">{{cta}}</button>
</template>

<script>
export default {
    props: ['cta'],
    methods: {
        calendly: function () {
            Calendly.initPopupWidget({url: 'https://calendly.com/improve-my-software?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=f4f4f6&text_color=2a2c24&primary_color=009688'});
            return false;
        }
    }
}
</script>


<style lang="scss" scoped>
    button.cta {
    font-family: var(--font-body);
    font-size: 1em;

    border: none;
    border-radius: var(--border-radius);
    box-shadow: 2px 2px 5px var(--independence);
    
    background-color: var(--persian-green);
    color: var(--white);

    padding: calc(1.5 * var(--space)) calc(3 * var(--space));

    align-self: center;
    &:hover {
        box-shadow: 5px 5px 10px var(--independence);
    }
    }
</style>
