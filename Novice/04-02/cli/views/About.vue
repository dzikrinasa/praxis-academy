<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ greeting }}</p>
  </div>
</template>

<script>
module.export = {
    data : function() {
        return {
            greeting : 'Assalamualaikum'
        }
    }
}
</script>

<style scoped>
p {
 font-size: 2em;
 text-align: center;
}
</style>