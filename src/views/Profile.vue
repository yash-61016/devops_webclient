<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { user } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : "";
</script>
<template>
    <div class="mockup-window border bg-base-300">
        <div class="avatar">
            <div class="w-24 rounded">
                <img :src="user?.picture" />
            </div>
        </div>
        <div class="flex justify-center px-4 py-16 bg-base-200">Hello {{ user?.name }}!</div>
        <div class="flex justify-center px-4 py-16 bg-base-200">Email {{ user?.email }}</div>
        <div class="flex justify-center px-4 py-16 bg-base-200">Verified {{ user?.email_verified }}</div>
        <div class="flex justify-center px-4 py-16 bg-base-200">code {{ code }}</div>
    </div>
</template>