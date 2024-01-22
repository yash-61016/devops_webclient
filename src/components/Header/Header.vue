<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useProductStore } from "../../store/productStore.ts";
import { useCartStore } from "../../store/cartStore.ts";
import ProfileButton from "./ProfileButton.vue";
import { useRouter} from "vue-router";
import { useAuth0 } from "@auth0/auth0-vue";
import { storeToRefs } from "pinia";

const { user } = useAuth0();

const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore();
const appName = import.meta.env.VITE_APP_NAME as string;
const activeTab = ref<number>(0);
const { fetchCart } = cartStore;
const { cart } = storeToRefs(cartStore);
const toggleTab = (tabNumber: number) => {
    activeTab.value = tabNumber === activeTab.value ? 0 : tabNumber;
};

//watch isAuthenticated
watch(user, (newValue) => {
    if (newValue) {
        fetchCart();
    }
});

onMounted(async () => {
    try {
        await productStore.fetchCategories();
        // Set the initial active tab based on the first category
        if (productStore.getCategories.length > 0) {
            activeTab.value = productStore.getCategories[0].id;
            productStore.fetchCategoryCatalogue(activeTab.value).then(() => {
                router.push({ name: 'product-category', params: { id: 1 } });
            });
        }
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
});
</script>
<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a class="btn btn-ghost text-xl">{{ appName }}</a>
        </div>
        <div class="navbar-center">
            <div role="tablist" class="tabs tabs-boxed">
                <a v-for="category in productStore.getCategories" :key="category.id" role="tab"
                    @click="toggleTab(category.id)"
                    :class="{ 'tab': true, 'tab-active': activeTab === category.id, 'tab-expanded': activeTab === category.id }">
                    {{ category.name }}
                </a>
            </div>
        </div>
        <div class="navbar-end">
            <button class="btn btn-sm btn-circle mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <template v-if="cart">
                            <span class="badge badge-sm indicator-item">{{ cart.cartProducts?.length }}</span>
                        </template>
                    </div>
                </div>
                <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <template v-if="cart">
                        <div class="card-body">
                            <span class="font-bold text-lg">{{ cart.cartProducts?.length ?? 0 }} Items</span>
                            <span class="text-info">Subtotal: $0</span>
                            <div class="card-actions">
                                <button class="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                        </template>
                        <template v-else>
                            <div class="card-body">
                                <span class="font-bold text-lg">0 Items</span>
                                <span class="text-info">Subtotal: $0.00</span>
                                <div class="card-actions">
                                    <button class="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </template>
                </div>
            </div>
            <div class="dropdown dropdown-end">
                <ProfileButton />
            </div>
        </div>
    </div>
</template>

<style scoped>
.tabs-boxed {
    display: flex;
    flex-direction: row;
    width: 60vw;
    border-radius: 25px;
}

.tab {
    flex: 1;
    transition: flex 0.35s ease-in-out, border-radius 0.35s ease-in-out;
    border-radius: 25px;
}

.tab-active {
    flex: 3;
}
</style>