import { defineComponent, ref } from 'vue';
// import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld';

export default defineComponent({
  name: 'App',
  setup() {
    const counts = ref(0);
    return () => (
      <>
        <img alt="Vue logo" src="/@/assets/logo.png" />
        <HelloWorld v-model={counts.value} />

        <div>counts :{counts.value}</div>
      </>
    );
  },
});
