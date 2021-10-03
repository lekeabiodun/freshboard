<template>
    <div class="flex items-center justify-center min-h-screen w-full bg-neutral">
        <div class="card w-1/4">
            <div class="card-body bg-base-100">
                <Logo />
                <form action="/admin" method="GET">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label> 
                        <input type="text" placeholder="username" class="input input-bordered">
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label> 
                        <input type="password" placeholder="password" class="input input-bordered">
                    </div>

                    <div class="flex mt-5">
                        <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary">
                        <span class="label-text px-2">Remember Me</span>
                    </div>

                    <div class="text-center">
                        <button class="btn btn-primary mt-5 w-full">Login</button>
                    </div> 

                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "/src/components/Logo.vue";

export default{
    name: 'Login',
    components: {
        Logo,
    }
}
</script>
