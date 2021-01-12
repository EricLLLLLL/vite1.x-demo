import { defineComponent, ref, reactive, computed, onMounted } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
    modelValue: {
      type: Number,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, slots, emit }) {
    let count: any = ref(0);

    const title = computed(() => `hello vue3-${count.value}`);

    const info = reactive({ title, version: 'vue3', count });

    function handleClick() {
      info.count++;
      // count.value++;
      console.log('count', count);
      emit('update:modelValue', info.count);
    }

    onMounted(() => {
      console.log('attrs', attrs);
    });

    return () => (
      <>
        <button onClick={handleClick}>count is: {count.value}</button>

        <p>title.value: {title.value}</p>
        <p>info.title: {info.title}</p>
        <p>info.version: {info.version}</p>
      </>
    );
  },
});
