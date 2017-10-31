<!--多选组件-->
<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <!-- 遍历选项数组 -->
            <li v-for="(item, index) in selections" :title="item.label" :class="{active: checkActive(index)}" @click="multiSelect(index)">
                {{ item.label }}
            </li>
        </ul>
    </div>
</template>

<script>
// 引入JavaScript工具库lodash
import _ from 'lodash'
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
            nowIndexes: [0]
        }
    },
    methods: {
        multiSelect(index) {
            if (this.nowIndexes.indexOf(index) === -1) {
                this.nowIndexes.push(index)
            }
            else {
                this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
                    return idx !== index
                })
            }
            let nowObjArray = _.map(this.nowIndexes, (idx) => {
                return this.selections[idx]
            })
            // 触发on-chosen事件，向父组件传递选中的项
            this.$emit('on-chosen', nowObjArray)
        },
        checkActive(index) {
            return this.nowIndexes.indexOf(index) !== -1
        }
    }
}
</script>

<style scoped>
.chooser-component {
    position: relative;
    display: inline-block;
}

.chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
}

.chooser-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>