<template>
    <div>
        <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
            <div class="flex-none px-2 mx-2">
                <span class="text-lg font-bold">MyBlog</span>
            </div> 
            <div class="flex-1 px-2 mx-2">
                <div class="items-stretch hidden lg:flex">
                    <router-link class="btn btn-ghost btn-sm rounded-btn" to="/">Home</router-link> 
                    <router-link class="btn btn-ghost btn-sm rounded-btn" to="/about">About</router-link> 
                    <router-link class="btn btn-ghost btn-sm rounded-btn" to="/contact">Contact</router-link>
                </div>
            </div> 
            <div class="flex-none">
                <router-link class="btn btn-ghost btn-sm rounded-btn" to="/register">Register</router-link>
            </div> 
            <div class="flex-none">
                <router-link class="btn btn-ghost btn-sm rounded-btn" to="/login">Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
}

</script>