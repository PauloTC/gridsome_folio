<template lang="pug">
    li.love_work-item
        img( :src="work.img"  :width="widthimg" )
        h4 {{ work.name }}
        p  {{ work.description }}
</template>
<script>
export default {
    props: {
        work: Object
    },
    methods: {

    },
    computed: {
        buildimage(){
            return '../static/img/' + this.work.img + '.png'
        },
        widthimg(){
            return this.work.width
        }   
    }
}
</script>
<style lang="sass">
.love_work-item
    display: flex
    justify-content: center
    flex-direction: column
    justify-content: center
    align-items: center
    h4
        color: #fff
        font-weight: 400px
        font-size: 16px
    img
        margin-bottom: 25px
    p
        margin-top: 18px
        max-width: 75%
        text-align: center
        line-height: 25px
        font-size: 14px
</style>

