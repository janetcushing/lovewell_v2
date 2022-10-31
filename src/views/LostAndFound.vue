<template>
  <div class="home">
    <Header />
    <br />
    <br />
    <b-container class="blurb-container">
        <b-col md="1"></b-col>
        <b-col md="10">
          <b-row>
            <h3 class="splash">
              <p>Here are some lost and found items. </p>
              <p> Please <a href="mailto:lpa-eboard@googlegroups.com" target="_blank">Contact us</a> if you know anything about these items, or if you have another lost or found item to report</p>
            </h3>
          </b-row>
          <br/>
       <b-row>
  
            <table width="575">
              <!-- <col /> -->
              <tr v-for="item in items" :key="item.id">
              <td>
                <thead class="table-heading">{{item.title}}</thead>
                <tr class="table-row">{{item.desc}}</tr>
                <tr class="table-row"> 
                  <img v-bind:src="item.photo" v-bind:alt="item.alt" style="width:350px"/>
                </tr>
                
                <tr>&nbsp;  </tr> 
                 <tr>&nbsp;  </tr> 
</td>
              </tr>
               <br/>
            </table>
          </b-row>
          <b-row>
            <h2 class="splash">Please <a href="mailto:lpa-eboard@googlegroups.com" target="_blank">email us</a> with any info!</h2>
          </b-row>
          <br/>
          </b-col>
         <b-col md="1">
        </b-col>
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
          id: 6,
          date: 'October 2022',
          title: "Yellow Canoe, and gear lost from Indian Beach ",
          desc: "We were camping at Indian Beach, and the water came up over night, and a yellow canoe with two paddles, two yellow pdfs, a black backpack and a fishing pole were lost.  If found, please call or text at 207-740-8753",
          photo: "",
          alt: ''
         },
        {
          id: 5,
          date: 'October 2022',
          title: "Lost Dock, pictured below: ",
          desc: "If found, please email melissapatti4@gmail.com",
          photo: require('../assets/images/lostandfound/IMG_7985.jpeg'),
          alt: 'lost doc'
         },
         {
          id: 3,
          date: 'September 2022',
          title: "Red kayak found at Pine Island",
          desc: "It is now being moored at 84 Ruths Way.",
          photo: require('../assets/images/lostandfound/redKayak.jpg'),
          alt: 'RED KAYAK'
         },
         {
          id: 2,
          date: 'July 2022',
          title: "Did you find some dock sections??",
          desc: "3 sections were lost from this dock, located on Moose Rock Road.  Please let us know if you find the missing sections.",
          photo: require('../assets/images/lostandfound/lostdocksections.jpeg'),
           alt: 'lost dock sections'
         },
          {
          id: 1,
          date: 'July 2022',
          title: "Did you lose a dock??",
          desc: "A section of a dock washed up at Rappatuck Beach.  It is labeled 4 on one end, and 5 on the other.",
          photo: require('../assets/images/lostandfound/lostDock.jpeg'),
          alt: 'found dock'
         },
        
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
  font: Bold 20px/20px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 10;
  color: #287492;
  opacity: 1;
}
.table-row {
   top: 30px;
  left: 0px;
  height: 24px;
  font: Regular 18px/30px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 10;
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

