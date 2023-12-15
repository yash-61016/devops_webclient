
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { FeaturedProductTemplateModel } from './../../models/Product/FeaturedProductTemplateModel';

const props = defineProps(['featuredProduct']);

const featuredProduct = ref<FeaturedProductTemplateModel | null>(props.featuredProduct);
</script>

<template>
  
</template>
  
