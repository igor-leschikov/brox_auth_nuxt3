<script lang="ts" setup>
const currentUser = useAuthUser();
const isAdmin = useAdmin();
const isUser = useUser();
const { logout } = useAuth();

const form = reactive({
    pending: false,
});

async function onLogoutClick() {
    try {
        form.pending = true;

        await logout();

        await navigateTo("/");
    } catch (error) {
        console.error(error);
    } finally {
        form.pending = false;
    }
}
</script>

<template>
    <div min-h-screen flex flex-col bg-slate-900>
        <header p-3 mx-auto w-full max-w-4xl>
            <nav
                class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark"
                data-bs-theme="dark"
            >
                <div class="container-fluid">
                    <NuxtLink class="navbar-brand" to="/">BROX</NuxtLink>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NuxtLink class="nav-link" aria-current="page" to="/">Home</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" aria-current="page" to="/about">About</NuxtLink>
                            </li>
                            <template v-if="currentUser">
                                <li class="nav-item">
                                    <NuxtLink v-if="isAdmin" class="nav-link" aria-current="page" to="/clients"
                                        >Клиенты
                                    </NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink v-if="isAdmin" class="nav-link" aria-current="page" to="/admin"
                                        >Админка
                                    </NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <NuxtLink v-if="isUser" class="nav-link" aria-current="page" to="/ib">IB</NuxtLink>
                                </li>
                            </template>
                        </ul>
                        <template v-if="currentUser">
                            <ul class="d-flex navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" aria-current="page" to="/profile">{{
                                        currentUser.email
                                    }}</NuxtLink>
                                </li>
                                <li class="nav-item">
                                    <button class="nav-link" @click="onLogoutClick">Выход</button>
                                </li>
                            </ul>
                        </template>
                        <template v-else>
                            <ul class="d-flex navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NuxtLink class="nav-link" to="/login">Войти</NuxtLink>
                                </li>
                            </ul>
                        </template>
                    </div>
                </div>
            </nav>
        </header>

        <main p-3 mx-auto w-full max-w-4xl>
            <slot />
        </main>
    </div>
</template>
