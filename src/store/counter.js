import { defineStore } from "pinia";

import { useUserStore } from "@/store/user";

// defineStore(storeName/Id,{})
// 返回值是一个函数 use开头，id在中间，store结尾
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 99,
    friends: [
      { id: 1, name: "zgc" },
      { id: 2, name: "wf" },
      { id: 3, name: "cx" },
    ],
  }),

  getters: {
    // 1. 基本使用(接收一个参数 state)
    doubleCount(state) {
      return state.count * 2;
    },

    // 2. 在getter中引入getter(this可以访问当前store实例的所有属性)
    doubleCountAddOne() {
      return this.doubleCount + 1;
    },

    // 3. getter也支持返回一个函数
    getFriend(state) {
      return function (id) {
        return state.friends.find((item) => item.id === id).name;
      };
    },

    // 4.  gettery用到了别的store中的数据
    showMessage(state) {
      const userStore = useUserStore();
      return `${state.friends[2].name}-${userStore.level}`;
    },
  },
});
