<template>
  <div class="home">
    <Header />
    <br />
    <br />
    <b-container class="blurb-container">
          <b-row>
            <h2 class="splash">Here are some lost and found items.  <a href="mailto:lpa-eboard@googlegroups.com" target="_blank">Contact us</a> for more information</h2>
          </b-row>
          <br/>
       <b-row>
            <table>
              <col width="175" />
              <tr v-for="item in items" :key="item.id">
                <td class="table-heading">{{item.title}}</td>
                <td class="table-row">{{item.desc}}</td>
                 <td class="table-row">{{item.photo}}</td>
                <td class="table-row"> <img v-bind:src="item.photo" v-bind:alt="item.alt" style="width:300px"/></td>
                <td>&nbsp;  </td> 
                 <td>&nbsp;  </td> 
                  <td>&nbsp;  </td> 
                   <td>&nbsp;  </td> 

              </tr>
               <br/>
            </table>
          </b-row>
          <br/>
    </b-container>
    <hr />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Lost and Found",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      items: [
        {
          id: 1,
          date: 'July 2022',
          title: "Lost Dock",
          desc: "A piece of dock washed up at 61 Kaiser Drive.",
          photo: require('../assets/images/sunsetwinter.jpg'),
          alt: 'sunset'
         },
         {
          id: 2,
          date: 'July 2022',
          title: "Lost Dog",
          desc: "A lost dog was found swimming in the pond",
          photo: require('../assets/images/sunsetwinter.jpg'),
           alt: 'lovely sunset'
         }
      ]
  }
}
}
</script>
<style scoped>
.margins {
  background: #f6f8f9 0% 0% no-repeat padding-box;
}
.blurb-container {
  text-align: left;
}
.events {
  left: 170px;
  height: 38px;
  font: Bold 22px/14px Ubuntu;
  font-family: "Ubuntu", "Source Sans Pro", sans-serif;
  letter-spacing: 0;
  color: #265730;
  opacity: 1;
}
.table-heading {
  left: 170px;
   height: 38px; 
  font: Bold 16px/16px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 10;
  color: #287492;
  opacity: 1;
}
.table-row {
  top: 30px;
  left: 0px;
  /* height: 24px; */
   font: Bold 14px/14px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0;
  color: #343638;
}

.containerz {
  display: flex;
  width: 300px;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0 0 0 8px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
.item {
  margin: 0 4px 4px 0;
  background: aqua;
}
.splash {
   font: Regular 14px/14px "Open Sans";
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  color: #cc1717;

}
</style>

