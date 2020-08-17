<template>
    <div class="row justify-content-center mx-auto">
        <div class="col-10 mt-5 blab-bg">
            <div class="row mx-5 my-5 px-3 py-3 chat-bg">
                    <ul id="messages"></ul>
                    <form action="">
                        <input id="m" autocomplete="off" /><button class="button-primary">SEND</button>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat'
}
</script>

<style scoped>
    * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font: 13px Helvetica, Arial; }
        form { padding: 3px; position: absolute; bottom: 0; width: 100%; }
        form input { border: 0; padding: 10px; width: 85%; margin-right: 0.5%; }
        form button { width: 9%; background: rgb(130, 224, 255); border: none; }
        #messages { list-style-type: none; margin: 0; padding: 0; }
        #messages li { padding: 5px 10px; }
        #messages li:nth-child(odd) { background: #eee; }
</style>
