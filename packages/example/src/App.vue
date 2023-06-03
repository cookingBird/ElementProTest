<template>
<div class="flex h-full text-center light:bg-transparent light:transition-shadow">
  <div class="flex-grow-0 h-full max-w-xs overflow-y-auto light:text-sm deep:text-lg">
    <el-tree
      :data="routes"
      node-key="path"
      class="p-2 space-y-2 bg-gray-400 rounded"
    >
      <span
        slot-scope="{data}"
        class="flex-grow p-2 bg-yellow-200 rounded"
      >
        <router-link :to="data.path">
          {{ data.name }}
        </router-link>
      </span>
    </el-tree>
  </div>
  <div class="flex-grow">
    <router-view />
  </div>
</div>
</template>

<script>
  import { routes } from './router';
  export default {
    data() {
      return {
        routes
      };
    },
  };
</script>

<style lang="scss">
  body {
    height: 100vh;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: rgba(255, 0, 0, 0.5);
      }
    }
  }
</style>

<style scoped>
  ::v-deep .el-tree-node__content {
    height: auto;
  }

  ::v-deep .el-tree-node {
    @apply space-y-2;
  }

  ::v-deep .el-tree-node__children {
    @apply space-y-2;
  }
</style>
