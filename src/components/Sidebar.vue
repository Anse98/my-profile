<script>
import Badge from '../slots/Badge.vue';

export default {
    components: {
        Badge
    }
}
</script>

<template>
    <div class="pt-20">
        <nav class="font-semibold text-gray-600  ml-3 h-2/3 flex flex-col gap-3">
            <!-- menu-icon sidebar-->
            <div class="p-3 rounded px-5 bg-gradient-to-t from-[#9c9c9f] to-[#696a6c] text-white">
                <font-awesome-icon icon="fa-solid fa-bars-staggered" />
            </div>

            <!-- content sidebar -->
            <div class="bg-gradient-to-t from-[#9c9c9f] to-[#696a6c] text-white h-full rounded flex flex-col">

            </div>
        </nav>
    </div>
</template>
