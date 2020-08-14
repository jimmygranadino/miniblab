<template>
  <div class="container-fluid">
    <Navbar />
    <Chat />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Chat,
    About,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
