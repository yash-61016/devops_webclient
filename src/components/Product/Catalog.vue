<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { ProductModel } from '@/models';

const props = defineProps(['products', 'categories']);

const products = ref<ProductModel[]>(props.products);
const categories = ref<string[]>(props.categories);
</script>

<template>
    <div>
      <ProductFilter :categories="categories" />
      <ProductSort />
      <ProductList :products="products" />
    </div>
</template>
  
