<template>
  <div>
    <el-button type="info" @click='logout'>退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
    // 因为前面没有验证，没有set token，所以就不用下面这句来清空token！
    //   window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
