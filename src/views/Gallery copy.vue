<template>
  <div id="app">
    <section>
      <vue-horizontal-list :items="items" :options="options">
        <template v-slot:default="{item}">
          <div class="item">
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </section>
  </div>
</template>
 
<script>
  import Vue from 'vue';
  import VueHorizontalList from '@/vue-horizontal-list.vue';
 
  export default Vue.extend({
    name: 'ServeDev',
    components: {
      VueHorizontalList
    },
    data() {
      return {
        options: {
          responsive: [
            {end: 576, size: 1}, 
            {start: 576, end: 768, size: 2},
            {start: 768, end: 992, size: 3},
            {size: 4}
          ],
          list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,
            
            // Because: #app {padding: 80px 24px;}
            padding: 24
          }
        },  
        items: [
          {title: 'Item 0', content: 'Content item with description'},
        ]
      }
    }
  });
</script>
 
<style>
  body {
    margin: 0;
    padding: 0;
  }
 
  #app {
    max-width: 1400px;
 
    margin-left: auto;
    margin-right: auto;
 
    padding: 80px 24px;
  }
 
  @media (min-width: 1200px) {
    #app {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
</style>