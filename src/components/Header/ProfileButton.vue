<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: "/profile",
        },
    });
};

const handleLogout = () =>
    logout({
        logoutParams: {
            returnTo: window.location.origin,
        }
    });

</script>
<template>
    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
            <template v-if="isAuthenticated">
                <img :src="user?.picture" />
            </template>
            <template v-else>
                <div class="flex h-full justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
            </template>
        </div>
    </div>
    <template v-if="isAuthenticated">
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
            <li>
                <a class="justify-between">
                    Profile
                    <span class="badge">New</span>
                </a>
            </li>
            <li><a @click="handleLogout">Logout</a></li>
        </ul>
    </template>
    <template v-else>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36">
            <li>
                <a class="justify-between" @click="handleLogin">
                    Login / Sign Up
                </a>
            </li>
        </ul>
    </template>
</template>