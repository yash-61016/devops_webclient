
<script setup lang="ts">
// import { ref, defineProps } from 'vue';
import { ProductCategoryModel } from '../models/Product/ProductCategoryModel';
import { FeaturedProductTemplateModel } from '../models/Product/FeaturedProductTemplateModel';
import { ImageModel } from '../models/Product/ImageModel';
import FeaturedProduct from '../components/Product/FeaturedProduct.vue';
import Catalog from '../components/Product/Catalog.vue';
import { PropertyModel } from '../models/Product/PropertyModel';
import { ProductTemplateModel } from '../models/Product/ProductTemplateModel';

// const props = defineProps(['category']);

// const category = ref<ProductCategoryModel>(props.category);

const newFeatureImage: ImageModel = {
    imageUrl: 'smartwatches/featuredProduct/newFeature.png',
    altText: null
};

const bannerImages: ImageModel[] = [
    {
        imageUrl: 'smartwatches/featuredProduct/banner1.png',
        altText: null
    },
    {
        imageUrl: 'smartwatches/featuredProduct/banner2.png',
        altText: null
    },
    {
        imageUrl: 'smartwatches/featuredProduct/banner3.png',
        altText: null
    }
];

const featuredImages: ImageModel[] = [
    {
        imageUrl: 'smartwatches/featuredProduct/featured1.png',
        altText: null
    },
    {
        imageUrl: 'smartwatches/featuredProduct/featured2.png',
        altText: null
    },
    {
        imageUrl: 'smartwatches/featuredProduct/featured3.png',
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
    newFeatureDescription2: ' The customizable Action button gives you quick functions. ',
    bannerImages: bannerImages,
    bannerTitle: 'New Guts. More Glory.',
    featuredImages: featuredImages,
    productCategoryId: 1,
    products: [],
    properties: properties
};

const productTemplates: ProductTemplateModel[] =
    [
        {
            id: 1201,
            brand: 'Apple',
            name: 'Watch Ultra',
            description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
            defaultImages: [
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_1.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_2.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_3.png',
                    altText: null,
                }
            ],
            productCategoryId: 1,
            products: [
                {
                    id: 1301,
                    name: 'Apple Watch Ultra 44mm',
                    price: 799.00,
                    discounted_price: null,
                    images: { imageUrl: 'smartwatches/appleWatchUltra/awd_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#4d4249',
                },
                {
                    id: 1302,
                    name: 'Apple Watch Ultra 44mm',
                    price: 799.00,
                    discounted_price: null,
                    images: { imageUrl: 'smartwatches/appleWatchUltra/awd_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#f6754a',
                },
            ],
            badges: ['new'],
            displayPrice: 799,
            displayDiscountedPrice: null,
        },
        {
            id: 1202,
            brand: 'Google',
            name: 'Pixel Watch',
            description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
            defaultImages: [
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_1.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_3.png',
                    altText: null,
                }
            ],
            productCategoryId: 1,
            products: [
                {
                    id: 1303,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#68746f',
                },
                {
                    id: 1304,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#1e1e1e',
                },
                {
                    id: 1305,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#95bbea',
                },
            ],
            badges: ['sale'],
            displayPrice: 349,
            displayDiscountedPrice: 300,
        },
        {
            id: 1201,
            brand: 'Apple',
            name: 'Watch Ultra',
            description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
            defaultImages: [
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_1.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_2.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_3.png',
                    altText: null,
                }
            ],
            productCategoryId: 1,
            products: [
                {
                    id: 1301,
                    name: 'Apple Watch Ultra 44mm',
                    price: 799.00,
                    discounted_price: null,
                    images: { imageUrl: 'smartwatches/appleWatchUltra/awd_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#4d4249',
                },
                {
                    id: 1302,
                    name: 'Apple Watch Ultra 44mm',
                    price: 799.00,
                    discounted_price: null,
                    images: { imageUrl: 'smartwatches/appleWatchUltra/awd_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#f6754a',
                },
            ],
            badges: [],
            displayPrice: 799,
            displayDiscountedPrice: null,
        },
        {
            id: 1202,
            brand: 'Google',
            name: 'Pixel Watch',
            description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
            defaultImages: [
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_1.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_3.png',
                    altText: null,
                }
            ],
            productCategoryId: 1,
            products: [
                {
                    id: 1303,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#68746f',
                },
                {
                    id: 1304,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#1e1e1e',
                },
                {
                    id: 1305,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#95bbea',
                },
            ],
            badges: ['refurbished'],
            displayPrice: 349,
            displayDiscountedPrice: 300,
        },
        {
            id: 1201,
            brand: 'Apple',
            name: 'Watch Ultra',
            description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
            defaultImages: [
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_1.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_2.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/appleWatchUltra/awu_d_3.png',
                    altText: null,
                }
            ],
            productCategoryId: 1,
            products: [
                {
                    id: 1301,
                    name: 'Apple Watch Ultra 44mm',
                    price: 799.00,
                    discounted_price: null,
                    images: { imageUrl: 'smartwatches/appleWatchUltra/awd_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#4d4249',
                },
                {
                    id: 1302,
                    name: 'Apple Watch Ultra 44mm',
                    price: 799.00,
                    discounted_price: null,
                    images: { imageUrl: 'smartwatches/appleWatchUltra/awd_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#f6754a',
                },
            ],
            badges: [],
            displayPrice: 799,
            displayDiscountedPrice: null,
        },
        {
            id: 1202,
            brand: 'Google',
            name: 'Pixel Watch',
            description: 'A magical new way to use your watch without touching the screen. The brightest Apple display ever. And now you can choose a case and strap combination that is carbon neutral.',
            defaultImages: [
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_1.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png',
                    altText: null,
                },
                {
                    imageUrl: 'smartwatches/googlePixelWatch/gpw_d_3.png',
                    altText: null,
                }
            ],
            productCategoryId: 1,
            products: [
                {
                    id: 1303,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#68746f',
                },
                {
                    id: 1304,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#1e1e1e',
                },
                {
                    id: 1305,
                    name: 'Google Pixel Watch 44mm',
                    price: 349.00,
                    discounted_price: 300.00,
                    images: { imageUrl: 'smartwatches/googlePixelWatch/gpw_d_2.png', altText: 'Product A Image' },
                    properties: [{ key: 'Color', type: 'String', value: 'Blue' }],
                    productTemplateId: 1201,
                    tags: ['New'],
                    color: '#95bbea',
                },
            ],
            badges: [],
            displayPrice: 349,
            displayDiscountedPrice: 300,
        },
    ];

const category: ProductCategoryModel = {
    id: 1,
    name: 'Watches',
    isSelected: true,
    preferenceIndex: 0,
    productTemplates: productTemplates,
    featuredProduct: featuredProduct,
};
</script>

<template>
    <FeaturedProduct class="pl-5" :featuredProduct="category.featuredProduct" />
    <Catalog class=" pl-5 mt-11 font-medium" :productTemplates="category.productTemplates" :category="category.name" />
</template>
