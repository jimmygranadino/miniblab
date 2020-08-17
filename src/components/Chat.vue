<template>
    <div class="row mx-auto">
        <div class="col blab-bg">
            <div class="row mx-5 my-5 px-3 py-3 chat-bg">
                    <ul id="messages"></ul>
                    <form action="">
                        <input id="m" autocomplete="off" /><button>Send</button>
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
        form { background: #000; padding: 3px; position: absolute; bottom: 0; width: 100%; }
        form input { border: 0; padding: 10px; width: 90%; margin-right: 0.5%; }
        form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
        #messages { list-style-type: none; margin: 0; padding: 0; }
        #messages li { padding: 5px 10px; }
        #messages li:nth-child(odd) { background: #eee; }
</style>
