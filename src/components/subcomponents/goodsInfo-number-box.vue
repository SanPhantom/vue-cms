<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxNum">
            <button class="mui-btn mui-btn-numbox-minus" type="button" disabled="">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numBox">
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        name: "goodsInfo-number-box",
        props: ['maxNum'],
        data() {
            return {
                count: 0,
            }
        },
        mounted() {
            mui('.mui-numbox').numbox();
            console.log(this.maxNum);
        },
        methods: {
            countChange() {
                //给当前元素设置ref属性，然后通过（this.$refs.属性值）拿到Dom对象
                console.log(this.$refs.numBox.value);
                this.$emit('getCount', parseInt(this.$refs.numBox.value)); //凡是数字加减，需化整
            }
        },
        watch: {
            //监听最大值，只要监听到maxNum的值改变，立马设置
            maxNum: function (newVal) {
                mui('.mui-numbox').numbox().setOption('max', newVal);
            }
        }
    }
</script>

<style scoped>

</style>