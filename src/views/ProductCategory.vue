
<script setup lang="ts">
// import { ref, defineProps } from 'vue';
import { ProductCategoryModel } from '../models/Product/ProductCategoryModel';
import { FeaturedProductTemplateModel } from '../models/Product/FeaturedProductTemplateModel';
import { ImageModel } from '../models/Product/ImageModel';
import FeaturedProduct from '../components/Product/FeaturedProduct.vue';
import Catalog from '../components/Product/Catalog.vue';

// const props = defineProps(['category']);

// const category = ref<ProductCategoryModel>(props.category);

const newFeatureImage: ImageModel = {
    imageUrl: '/workspaces/devops_webclient/src/assets/newFeature.jpg',
    altText: null
};

const bannerImages: ImageModel[] = [
    {
        imageUrl: '/workspaces/devops_webclient/src/assets/banner1.jpg',
        altText: null
    },
    {
        imageUrl: '/workspaces/devops_webclient/src/assets/banner2.jpg',
        altText: null
    },
    {
        imageUrl: '/workspaces/devops_webclient/src/assets/banner3.jpg',
        altText: null
    }
];

const featuredImages: ImageModel[] = [
    {
        imageUrl: '/workspaces/devops_webclient/src/assets/featured1.jpg',
        altText: null
    },
    {
        imageUrl: '/workspaces/devops_webclient/src/assets/featured2.jpg',
        altText: null
    },
    {
        imageUrl: '/workspaces/devops_webclient/src/assets/featured3.jpg',
        altText: null
    }
];

const featuredProduct: FeaturedProductTemplateModel = {
    id: 2,
    name: 'Watch Ultra 2',
    briefDescription: 'The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP.',
    title: 'Next-level adventure.',
    description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
    newFeatureImage: newFeatureImage,
    newFeatureDescription: ' The lightweight titanium case is rugged and corrosion resistant, and its raised to protect the sapphire crystal from edge impacts.',
    bannerImages: bannerImages,
    featuredImages: featuredImages,
    productCategoryId: 1,
    products: []
};

const category: ProductCategoryModel = {
    id: 1,
    name: 'Smart Watches',
    isSelected: true,
    preferenceIndex: 0,
    products: [],
    featuredProduct: featuredProduct
};
</script>

<template>
    <div>
        <FeaturedProduct :featuredProduct="category.featuredProduct" />
        <Catalog :products="category.products" />
    </div>
</template>
