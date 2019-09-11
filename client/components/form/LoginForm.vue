<template>
    <div id="login-form">
        <form>
            <div class="form-group">
                <label>E-Mail</label>
                <input type="email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" />
            </div>
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginForm'
}
</script>
