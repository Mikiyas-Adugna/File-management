<template>
  <button 
  :class ="add ? 'bg-white px-2 py-1' :  'bg-orange-400 px-4 py-2 ' "
  class="border rounded-md">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  props: ["btnName" , "add"],
  setup() {},
};
</script>
