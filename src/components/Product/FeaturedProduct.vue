
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { FeaturedProductTemplateModel } from './../../models/Product/FeaturedProductTemplateModel';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

const props = defineProps(['featuredProduct']);
const featuredCarousel = ref(null);
const featuredProduct = ref<FeaturedProductTemplateModel>(props.featuredProduct);

function getImageUrl(imageName: string) {
    return new URL('./../../assets/' + imageName, import.meta.url)
}

function nextFeaturedCarousel() {
    if (featuredCarousel.value) {
        (featuredCarousel.value as any).next();
    }
}

function prevFeaturedCarousel() {
    if (featuredCarousel.value) {
        (featuredCarousel.value as any).prev();
    }
}

</script>

<template>
    <div class="flex mt-5">
        <p class="text-9xl font-semibold grow">{{ featuredProduct.name }}</p>
        <div class="w-56">
            <div class="flex flex-col items-end">
                <p class="text-xs text-right pt-5"> {{ featuredProduct.briefDescription }}</p>
                <button class="btn btn-primary rounded-btn btn-sm mt-2 w-7/12">Read more</button>
            </div>
        </div>
    </div>
    <div class="flex mt-10 justify-between">
        <div class="w-4/12 flex flex-col justify-between">
            <div>
                <p class="text-4xl">{{ featuredProduct.title }}</p>
                <p class="text-xs mt-3">{{ featuredProduct.description }}</p>
                <div class="flex gap-2 mt-3">
                    <button class="btn btn-sm btn-circle">M</button>
                    <button class="btn btn-sm btn-circle">L</button>
                    <button class="btn btn-primary rounded-btn btn-sm ml-2">Buy Now £{{
                        featuredProduct.startingPrice.toFixed(2) }}</button>
                </div>
            </div>
            <div class="mt-5">
                <div class="mt-3">
                    <Carousel ref="featuredCarousel" class="carousel rounded-box" :autoplay="4000" :wrap-around="true">
                        <Slide v-for="image in featuredProduct.featuredImages" :key="image.imageUrl">
                            <div class="carousel__item space-x-4 rounded-box">
                                <img class="rounded-box " :src="getImageUrl(image.imageUrl).toString()" />
                            </div>
                        </Slide>
                    </Carousel>
                    <div class="mt-3 flex justify-between">
                        <div class="flex gap-2 items-center">
                            <p class="text-xl">{{ featuredProduct.bannerTitle }}</p>
                            <button class="btn btn-xs btn-circle p-0.3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex gap-5">
                            <button class="btn btn-m btn-outline btn-circle p-0.3" @click="prevFeaturedCarousel">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button class="btn btn-m btn-outline btn-circle p-0.3" @click="nextFeaturedCarousel">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 19.5l7.5-7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-4/12 flex items-center">
            <Carousel class="carousel rounded-box" ref="bannerCarousel" :autoplay="6000" :wrap-around="true">
                <Slide v-for="image in featuredProduct.bannerImages" :key="image.imageUrl">
                    <div class="carousel__item space-x-4">
                        <img class="rounded-box " :src="getImageUrl(image.imageUrl).toString()" />
                    </div>
                </Slide>
            </Carousel>
        </div>
        <div class="w-3/12 flex flex-col justify-between">
            <div class="flex gap-2">
                <img class="rounded-box w-5/12" :src="getImageUrl(featuredProduct.newFeatureImage.imageUrl).toString()" />
                <div class="flex flex-col justify-between">
                    <div class="badge badge-ghost badge-lg rounded-badge"
                        style="height:2.5rem; border-radius: 2rem; width: 5rem;">New</div>
                    <p class="text-s ml-1 mt-3"> {{ featuredProduct.newFeatureDescription }}</p>
                </div>
            </div>
            <div class="overflow-x-auto">
                <table class="table table-sm">
                    <tbody>
                        <tr v-for="(property, index) in featuredProduct.properties" :key="index">
                            <td class="font-semibold">{{ property.type }}</td>
                            <td class="font-light text-right">{{ property.value }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex gap-2">
                <div class="flex flex-col justify-between items-end">
                    <div class="badge badge-ghost badge-lg rounded-badge"
                        style="height:2.5rem; border-radius: 2rem; width: 5rem;">New</div>
                    <p class="text-s mr-1 mt-3 text-right"> {{ featuredProduct.newFeatureDescription2 }}</p>
                </div>
                <img class="rounded-box w-4/12" :src="getImageUrl(featuredProduct.newFeatureImage2.imageUrl).toString()" />
            </div>

        </div>
    </div>
</template>
<style>
.carousel {
    background-color: #e6e6e6 !important;
}
</style>