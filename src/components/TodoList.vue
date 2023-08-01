<template>
  <div>
    <div>--------------------TodoList组件---------------------------</div>
    <div>{{ name }} -- {{ age }} -- {{ level }}</div>
    <button @click="changeStore">基本修改</button>
    <button @click="resetState">重置</button>
    <button @click="changePatchStore">批量修改</button>
    <div>--------------------actions---------------------------</div>
    <button @click="changeAge">修改Age</button>

    <ul>
      <template v-for="item in userStore.banners" :key="item.title">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
// 解构
const { name, age, level } = storeToRefs(userStore);

// 1. 可以通过store实例直接操作store中的数据
function changeStore() {
  userStore.name = "wf";
  userStore.age = 30;
  userStore.level = 999;
}

// 2. 重置State，可以调用reset()方法将状态重置到其初始值
const resetState = () => userStore.$reset();

// 3. 批量修改
function changePatchStore() {
  userStore.$patch({ name: "wlc", age: 40 });
}

// 4. 调用actions中的方法修改数据
function changeAge() {
  userStore.increment(10);
}

// 5. 获取接口数据
userStore.fetchUserData().then((res) => {
  console.log("res", res, "async函数的返回值是promise类型");
});
</script>
