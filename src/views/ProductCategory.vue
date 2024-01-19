
<script setup lang="ts">
import FeaturedProduct from '../components/Product/FeaturedProduct.vue';
import Catalog from '../components/Product/Catalog.vue';
import { useProductStore } from '../store/productStore';
import { onMounted, ref } from 'vue';
import {useRoute} from "vue-router";
const tempId = ref(0);
const productStore = useProductStore();

const { activeCategory, productLoading } = productStore;
const route = useRoute();
onMounted(() => {
    const id = parseInt(route.params.id as string);
    tempId.value = id;

    console.log(id);
});
</script>

<template>
    <template v-if="!productLoading">
        <FeaturedProduct class="pl-5" :featuredProduct="activeCategory.featuredProduct" />
        <Catalog class=" pl-5 mt-11 font-medium" :productTemplates="activeCategory.productTemplates" :category="activeCategory.name" />
    </template>
</template>
