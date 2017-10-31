<!--数字选择组件-->
<template>
    <div class="counter-component">
        <div class="counter-btn" @click="minus"> - </div>
        <div class="counter-show">
            <input type="text" v-model="number" @keyup="fixNumber">
        </div>
        <div class="counter-btn" @click="add"> + </div>
    </div>
</template>

<script>
export default {
    props: {
        // 接收父级传递过来的最大值，并定义类型和默认值
        max: {
            type: Number,
            default: 5
        },
        // 接收父级传递过来的最小值，并定义类型和默认值
        min: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            number: this.min
        }
    },
    watch: {
        number() {
            // 触发on-number事件，向父组件传递数值
            this.$emit('on-number', this.number)
        }
    },
    methods: {
        fixNumber() {
            let fix
            if (typeof this.number === 'string') {
                fix = Number(this.number.replace(/\D/g, ''))
            }
            else {
                fix = this.number
            }
            if (fix > this.max) {
                fix = this.max
            }
            else if (fix < this.min) {
                fix = this.min
            }
            this.number = fix
        },
        minus() {
            if (this.number <= this.min) {
                return
            }
            this.number--
        },
        add() {
            if (this.number >= this.max) {
                return
            }
            this.number++
        }
    }
}
</script>

<style scoped>
.counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}

.counter-show {
    float: left;
}

.counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 23px;
    line-height: 23px;
    width: 30px;
    outline: none;
    text-indent: 4px;
}

.counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
}

.counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>