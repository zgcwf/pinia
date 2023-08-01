import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "zgc",
    age: 18,
    level: 8,
    banners: [],
    recommends: [],
  }),

  actions: {
    // 1. 基本使用(传参)
    increment(num) {
      this.age += num;
    },

    // 2. 网络请求
    async fetchUserData() {
      const res = await fetch("http://123.207.32.32:8000/home/multidata");
      const data = await res.json();
      console.log("data", data);
      this.banners = data.data.banner.list
      this.recommends = data.data.recommend.list
    },
  },
});
