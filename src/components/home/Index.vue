<template>
  <div>
    <el-input-number
      :value="num1"
      @change="handleChange"
      label="描述文字"></el-input-number>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      num1: 'getNumber'
    })
  },

  methods: {
    ...mapActions({
    }),

    handleChange(val) {
      this.$store.dispatch({
        type: 'handleChange',
        param: val,
      })
    },
  }
};
</script>

<style lang="css">
</style>
