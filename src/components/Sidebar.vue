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
            <div
                class="bg-gradient-to-t from-[#9c9c9f] to-[#696a6c] text-white h-full rounded flex flex-col justify-center gap-3 text-[12px] uppercase">

                <div class="flex flex-col items-center">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    <span class="mt-1"><small>about</small></span>
                </div>

                <div class="flex flex-col items-center pt-3">
                    <font-awesome-icon icon="fa-solid fa-wand-sparkles" />
                    <span class="mt-1"><small>skill</small></span>
                </div>

                <div class="flex flex-col items-center pt-3">
                    <font-awesome-icon icon="fa-solid fa-square-share-nodes" />
                    <span class="mt-1"><small>social</small></span>
                </div>

                <div class="flex flex-col items-center pt-3">
                    <font-awesome-icon icon="fa-solid fa-briefcase" />
                    <span class="mt-1"><small>works</small></span>
                </div>

                <div class="flex flex-col items-center pt-3">
                    <font-awesome-icon icon="fa-solid fa-id-card" />
                    <span class="mt-1"><small>contact</small></span>
                </div>

            </div>
        </nav>
    </div>
</template>
