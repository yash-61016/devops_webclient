<script setup lang="ts">
import { ref, defineProps } from 'vue';
import ProductList from './ProductList.vue';
import { ProductTemplateModel } from '../../models/Product/ProductTemplateModel';

const props = defineProps(['productTemplates', 'category']);

const productTemplates = ref<ProductTemplateModel[]>(props.productTemplates);
const category = ref<string>(props.category);
</script>

<template>
  <div>

    <div class="flex flex-row justify-between items-end">
      <p class="text-5xl">Catalog {{ category }}</p>
      <div class="flex flex-row gap-3">
        <select class="select select-bordered select-sm w-full max-w-xs">
          <option selected>Storage</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select class="select select-bordered select-sm w-full max-w-xs">
          <option selected>Color</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <select class="select select-bordered select-sm w-full max-w-xs">
          <option selected>Brand</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
    </div>
    <ProductList :productTemplates="productTemplates" />
  </div>
</template>
  
