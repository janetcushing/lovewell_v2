<template>
<div>
    <!-- <b-container class="hdr-container"> -->
    <b-row>
        <b-col md="12">
            <div>
                <h1 id="title">The Lovewell Pond Association</h1>
            </div>
        </b-col>
    </b-row>
    <b-row>
        <b-col md="12">
            <Nav />
        </b-col>
    </b-row>
    <!-- </b-container> -->
</div>
</template>

<script>
import Nav from "@/components/layout/Nav.vue";
export default {
    name: "Header",
    components: {
        Nav
    }
};
</script>

<style scoped>

#title {
    background: url("../../assets/images/lovewellpondsummer.png");
    background-size: cover;
    background-color: #555555;
    height: 32vh;
    /* top: 219px; */
    /* height: 50px; */
    text-align: center;
    vertical-align: middle;
    font: Bold 60px/69px Ubuntu;
    font-family: 'Ubuntu', 'Source Sans Pro', sans-serif;
    margin:20px 20px 20px 20px; 
    padding: 20px 20px 20px 20px;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
}
</style>
