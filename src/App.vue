<template>
  <div class="container-fluid" id="fade">
    <Header />
    <Chat />
    <div class="row mx-auto my-5"></div>
    <div class="row justify-content-center mx-auto">
      <About />
      <Contact />
    </div>
    <div class="row mx-auto my-5"></div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Chat from './components/Chat'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
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
