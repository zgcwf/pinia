<template>
  <div>HomeList组件</div>
  <!-- 读取 counterStore 中的 state-->
  <div>count:{{ counterStore.count }}</div>
  <!-- 读取 解构出来的 state -->
  <div>count:{{ count }}</div>
  <!-- 读取 counterStore 计算属性值 -->
  <div>doubleCount:{{ counterStore.doubleCount }}</div>
  <div>doubleCountAddOne:{{ counterStore.doubleCountAddOne }}</div>
  <div>getFriend:{{ counterStore.getFriend(3) }}</div>
  <div>showMessage:{{ counterStore.showMessage }}</div>

  <button @click="incrementCount">+1</button>
</template>
<script setup>
import {storeToRefs} from 'pinia'
import { useCounterStore } from "@/store/counter";

// 1. store在其试用期是不会被创建的， 我们可以通过useXxx函数来得到store
const counterStore = useCounterStore();

// 2. 注意 Store 获取后不能被解构，解构会失去响应式
// 所以为了从store中提取属性并保持其响应式，你需要使用storeToRefs()

// const { count } = counterStore; 失去响应式
const { count } = storeToRefs(counterStore); // 具备响应式

const incrementCount = () => counterStore.count++; 

</script>
