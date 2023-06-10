<script lang="ts" setup>
definePageMeta({
    middleware: ["user-only"],
});

const currentUser = useAuthUser();
</script>

<template>
    <div>
        <PageTitle title="Мой профиль" />
        <PageDescription description="This page should only be visible if user is connected" />
        <PageUser :user="currentUser" />
    </div>
</template>
