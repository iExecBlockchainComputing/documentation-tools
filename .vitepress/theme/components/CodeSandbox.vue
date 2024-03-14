<template>
  <iframe
    title="codeSandbox"
    :src="src"
    style="
      width: 100%;
      height: 700px;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
    "
    allowfullscreen
  ></iframe>
</template>

<script>
export default {
  props: ['src'],
};
</script>
