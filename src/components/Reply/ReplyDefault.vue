<template>
  <div ref="$reply">
    <el-input :spellcheck="false" v-model="content" @focusin="$emit('focusin')" @focusout="$emit('focusout')"
      @input="$emit('replying', { ...reply, content: content.split(customeTarget)[1] || '' })"
      :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="Please input" />
  </div>
</template>

<script setup>

import { defineProps, ref, watch, onMounted } from 'vue';

const props = defineProps({
  reply: {
    type: Object,
  },
  focus: {
    type: Boolean,
  },
})

const $reply = ref();
const customeTarget = `@${String(props.reply.target).toLowerCase()} `;
const content = ref(customeTarget);

watch(content, (newContent) => {
  if (!newContent.includes(customeTarget)) {
    content.value = customeTarget;
  }
})

onMounted(() => {
  $reply.value.firstChild.firstElementChild.focus();
})

</script>
