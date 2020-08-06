<template>
  <div>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home">
        <router-link to="/yu" tag="div">书架</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="column">
        <router-link to="/shou" tag="div">书城</router-link>
        </van-tabbar-item>
    <van-tabbar-item icon="card">发现</van-tabbar-item>
    <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
        }
    },
}
</script>

<style>

</style>