<template>
  <img alt="Vue logo" src="/@/assets/logo.png" />
  <HelloWorld v-model="counts" @click="() => {}" />

  <div>counts :{{ counts }}</div>
</template>

<script>
import { ref } from 'vue';

import HelloWorld from '/@/components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const counts = ref(0);

    return {
      counts,
    };
  },
};
</script>
