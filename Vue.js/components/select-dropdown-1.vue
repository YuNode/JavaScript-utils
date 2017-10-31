<!--下拉选择组件-->
<template>
    <div class="selection-component">
        <div class="selection-show" @click="toggleDrop">
            <!-- 显示选中的项 -->
            <span>{{ selections[nowIndex].label }}</span>
            <div class="arrow"></div>
        </div>
        <div class="selection-list" v-if="isDrop">
            <ul>
                <!-- 遍历选项数组 -->
                <li v-for="(item, index) in selections" @click="dropdownSelection(index)">
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 接收父级传递过来的选项数据，并定义类型和默认值
        selections: {
            type: Array,
            default: [{
                label: 'test',
                value: 0
            }]
        }
    },
    data() {
        return {
            nowIndex: 0,
            isDrop: false
        }
    },
    methods: {
        toggleDrop(event) {
            this.isDrop = !this.isDrop
        },
        dropdownSelection(index) {
            this.nowIndex = index
            this.isDrop = false
            // 触发on-chosen事件，向父组件传递选中的项
            this.$emit('on-chosen', this.selections[this.nowIndex])
        }
    }
}
</script>

<style scoped>
.selection-component {
    position: relative;
    display: inline-block;
}

.selection-show {
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
}

.selection-show .arrow {
    display: inline-block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    width: 0;
    height: 0;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    vertical-align: middle;
}

.selection-list {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
}

.selection-list li {
    padding: 5px 15px 5px 10px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    cursor: pointer;
    background: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.selection-list li:hover {
    background: #e3e3e3;
}
</style>