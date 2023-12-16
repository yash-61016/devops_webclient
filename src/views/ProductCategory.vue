
<script setup lang="ts">
// import { ref, defineProps } from 'vue';
import { ProductCategoryModel } from '../models/Product/ProductCategoryModel';
import { FeaturedProductTemplateModel } from '../models/Product/FeaturedProductTemplateModel';
import { ImageModel } from '../models/Product/ImageModel';
import FeaturedProduct from '../components/Product/FeaturedProduct.vue';
import Catalog from '../components/Product/Catalog.vue';
import { PropertyModel } from '../models/Product/PropertyModel';

// const props = defineProps(['category']);

// const category = ref<ProductCategoryModel>(props.category);

const newFeatureImage: ImageModel = {
    imageUrl: 'newFeature.png',
    altText: null
};

const bannerImages: ImageModel[] = [
    {
        imageUrl: 'banner1.png',
        altText: null
    },
    {
        imageUrl: 'banner2.png',
        altText: null
    },
    {
        imageUrl: 'banner3.png',
        altText: null
    }
];

const featuredImages: ImageModel[] = [
    {
        imageUrl: 'featured1.png',
        altText: null
    },
    {
        imageUrl: 'featured2.png',
        altText: null
    },
    {
        imageUrl: 'featured3.png',
        altText: null
    }
];

const properties: PropertyModel[] = [
    {
        key: 'size',
        type: 'Size',
        value: '44mm case size',
    },
    {
        key: 'display',
        type: 'Display',
        value: 'Always-On Retina',
    },
    {
        key: 'processor',
        type: 'Processor',
        value: 'S9 SiP',
    }
];

const featuredProduct: FeaturedProductTemplateModel = {
    id: 2,
    name: 'Apple Watch Ultra',
    briefDescription: 'The most rugged and capable Apple Watch pushes the limits again. Featuring the all-new S9 SiP.',
    startingPrice: 799.00,
    title: 'Next-level adventure.',
    description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
    newFeatureImage: newFeatureImage,
    newFeatureDescription: ' The lightweight titanium case is rugged and corrosion resistant.',
    newFeatureImage2: newFeatureImage,
    newFeatureDescription2: ' The customizable Action button gives you quick, physical control over a variety of functions. ',
    bannerImages: bannerImages,
    bannerTitle: 'New Guts. More Glory.',
    featuredImages: featuredImages,
    productCategoryId: 1,
    products: [],
    properties: properties
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
