<template>
  <div> 
  <div class="card" style="width: 35rem;">
  <img src="../assets/images/loon2.jpg" class="card-img-top" alt="a loon">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
   props: ["images"] 
  }
}
</script>


