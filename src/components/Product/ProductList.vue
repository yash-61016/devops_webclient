<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { ProductModel } from '../../models/Product/ProductModel';
import { ProductTemplateModel } from '../../models/Product/ProductTemplateModel';

const props = defineProps(['productTemplates']);

const productTemplates = ref<ProductTemplateModel[]>(props.productTemplates);
const selectedProduct = ref<ProductTemplateModel>();

function getImageUrl(imageName: string) {
    return new URL('./../../assets/' + imageName, import.meta.url)
}

const openModal = (index: number) => {
    selectedProduct.value = productTemplates.value[index];
    console.log(selectedProduct.value);
    const modal = document.getElementById('my_modal_2');
    modal?.showModal();
}

</script>

<template>
    <div class="pt-10 pb-10 px-1 flex flex-row flex-wrap gap-5">
        <div v-for="(productTemplate, index) in productTemplates" :key="productTemplate.id" class="card w-72 h-72"
            @click="openModal(index)" style="cursor: pointer">
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
    <dialog id="my_modal_2" class="modal">
        <div class="modal-box h-3/12">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div class="flex">
                <figure>
                    <img class="h-44 w-auto rounded-xl"
                        :src="getImageUrl(selectedProduct?.products[0].images.imageUrl ?? '').toString()"
                        :alt="selectedProduct?.products[0].images.altText ?? ''" />
                </figure>
                <div class="ml-4">
                    <div class="flex flex-row gap-2">
                        <p class="font-light">{{ selectedProduct?.brand }}</p>
                        <tempalte v-for="badge in selectedProduct?.badges" :key="badge">
                            <div class="badge badge-primary rounded-badge ">
                                {{ badge }}
                            </div>
                        </tempalte>
                    </div>
                    <h2 class="card-title">{{ selectedProduct?.name }}</h2>
                    <div class="flex items-center gap-1 mt-2">
                        <template v-for="product in selectedProduct?.products" :key="product.id">
                            <div class="badge badge-lg border-0" :style="{ backgroundColor: product.color }"></div>
                        </template>
                    </div>
                    <div class="flex flex-row justify-between items-center mt-6">
                        <div>
                            <template v-if="selectedProduct?.displayDiscountedPrice">
                                <div class="flex flex-row items-center gap-1">
                                    <h2 class="text-base line-through">£{{ selectedProduct?.displayPrice.toFixed(2) }}
                                    </h2>
                                    <h2 class="text-lg font-semibold">£{{ selectedProduct?.displayDiscountedPrice.toFixed(2)
                                    }}
                                    </h2>
                                </div>
                            </template>
                            <template v-else>
                                <h2 class="text-lg font-semibold">£{{ selectedProduct?.displayPrice.toFixed(2) }}</h2>
                            </template>
                        </div>

                    </div>
                    <div class="flex flex-row gap-2 mt-1">
                        <button class="btn btn-primary btn-sm">Add to cart</button>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-between mt-4">
                <div class="flex flex-col gap-2">
                    <h2 class="text-lg font-semibold">Description</h2>
                    <p class="text-sm">{{ selectedProduct?.description }}</p>
                </div>
            </div>
        </div>

    </dialog>
</template>

<style scoped>
.card {
    background-color: #e6e6e6;
}
</style>