<template>
  <div class="gallery">
    <Header />
    <br />
    <br />
    <b-container class="blurb-container">
        <b-col md="1"></b-col>
        <b-col md="10">
          <b-row>
   <b-row><h2>Some photos of life on the lake.</h2></b-row> 
    <h3>If you have a photo to post, please <a href="mailto:lpa-eboard@googlegroups.com" target="_blank">email us</a></h3>
   
    </b-row>
     <br/>
     <b-row>
     <h3 class="table-heading">WildLife Around the Lake</h3>
     </b-row>
    <b-row>
      <li class="list" v-for="photo in animalsVert" :key="photo.id" style="width: 18rem;">
  <div class="card">
  <img v-bind:src="photo.photo" v-bind:alt="photo.alt" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{photo.title}}</h5>
    <p class="card-text">{{photo.desc}}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</li>
</b-row>
 <br/>
     <b-row>
     <h3 class="table-heading">Lake Scenery</h3>
     </b-row>
<b-row>
      <li class="list" v-for="photo in sceneryHoriz" :key="photo.id" style="width: 36rem;">
  <div class="card">
  <img v-bind:src="photo.photo" v-bind:alt="photo.alt" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{photo.title}}</h5>
    <p class="card-text">{{photo.desc}}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</li>
</b-row>
<b-row>
      <li class="list" v-for="photo in sceneryVert" :key="photo.id" style="width: 18rem;">
  <div class="card">
  <img v-bind:src="photo.photo" v-bind:alt="photo.alt" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">{{photo.title}}</h5>
    <p class="card-text">{{photo.desc}}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</li>
</b-row>
</b-col>
 <b-col md="1"></b-col>
 </b-container>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  name: 'Gallery',
  components: {
    Header,
    Footer
  },
   data() {
    return {
      animalsVert: [
        {
          id: 1,
          date: '2021',
          title: "Young Deer",
          desc: "Deer hanging out by the lake",
          photo: require('../assets/images/gallery/youngdeer.jpg'),
          alt: 'young deer'
        },
         {
          id: 2,
          date: '2021',
          title: "2 Young Deer",
          desc: "Oh look, she brought a friend",
          photo: require('../assets/images/gallery/youngdeer2.jpg'),
          alt: '2 young deer'
        }
      ],
      animalsHoriz: [],
      sceneryHoriz: [
        {
          id: 3,
          date: '2021',
          title: "Colorful Sunset at Lovewell",
          desc: "",
          photo: require('../assets/images/gallery/sunsetcolorful.jpg'),
          alt: 'Colorful Sunset'
        },
        {
          id: 6,
          date: '2021',
          title: "Winter Sunset at Lovewell",
          desc: "",
          photo: require('../assets/images/gallery/sunsetwinter.jpg'),
          alt: 'Winter Sunset'
        },
        {
          id: 8,
          date: '2021',
          title: "Sunset at Lovewell",
          desc: "Sunset",
          photo: require('../assets/images/gallery/sunsetcolorful.jpg'),
          alt: 'Sunset'
        }
      ],
      sceneryVert: [
       
        {
          id: 4,
          date: '2021',
          title: "Red Sunset at Lovewell",
          desc: "",
          photo: require('../assets/images/gallery/redsunset.jpg'),
          alt: 'Red Sunset'
        },
        {
          id: 5,
          date: '2021',
          title: "Sunset at Lovewell",
          desc: "",
          photo: require('../assets/images/gallery/sunsetsky.jpg'),
          alt: 'Sunset Sky'
        },
      
        {
          id: 7,
          date: '2021',
          title: "Stormy Skies at Lovewell",
          desc: "",
          photo: require('../assets/images/gallery/weather.jpg'),
          alt: 'Stormy Weather'
        }
      ]
    }
  }
}
</script>
<style scoped>
.blurb-container {
  text-align: left;
}
.table-heading {
  height: 38px;
  font: Bold 20px/20px "Open Sans";
  font-family: "Open Sans", sans-serif;
  letter-spacing: 10;
  color: #3721e2;
  opacity: 1;
}
.list {
  list-style: none;
  padding: 0;
  margin: 0 0 0 8px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
}
</style>
