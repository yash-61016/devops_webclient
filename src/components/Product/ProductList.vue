<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { ProductModel } from '../../models/Product/ProductModel';

const props = defineProps(['productTemplates']);

const productTemplates = ref<ProductModel[]>(props.productTemplates);

function getImageUrl(imageName: string) {
    return new URL('./../../assets/' + imageName, import.meta.url)
}

</script>

<template>
    <div class="pt-10 pb-10 px-1 flex flex-row flex-wrap gap-5">
        <div v-for="productTemplate in productTemplates" :key="productTemplate.id" class="card w-72 h-72"
            @click="console.log('hello')" style="cursor: pointer">
            <div class="p-3 pb-0">
                <div class="flex flex-row justify-between">
                    <p class="font-light">{{ productTemplate.brand }}</p>
                    <tempalte v-for="badge in productTemplate.badges" :key="badge">
                        <div class="badge badge-primary rounded-badge ">
                            {{ badge }}
                        </div>
                    </tempalte>
                </div>
                <h2 class="card-title">{{ productTemplate.name }}</h2>
            </div>
            <figure class="px-2 pt-1">
                <img class="h-44 w-auto rounded-xl" :src="getImageUrl(productTemplate.defaultImages[0].imageUrl).toString()"
                    :alt="productTemplate.defaultImages[0].altText" />
            </figure>
            <div class="flex flex-row justify-between p-2">
                <div class="flex items-center gap-1">
                    <template v-for="product in productTemplate.products" :key="product.id">
                        <div class="badge badge-lg border-0" :style="{ backgroundColor: product.color }"></div>
                    </template>
                </div>
                <div>
                    <template v-if="productTemplate.displayDiscountedPrice">
                        <div class="flex flex-row items-center gap-1">
                            <h2 class="text-base line-through">£{{ productTemplate.displayPrice.toFixed(2) }}
                            </h2>
                            <h2 class="text-lg font-semibold">£{{ productTemplate.displayDiscountedPrice.toFixed(2) }}</h2>
                        </div>
                    </template>
                    <template v-else>
                        <h2 class="text-lg font-semibold">£{{ productTemplate.displayPrice.toFixed(2) }}</h2>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #e6e6e6;
}
</style>