<template>
    <main>
        

		<!-- bootstrap-vue -->
		<div>
		  <b-navbar toggleable="lg" type="dark" variant="primary">
		    <b-navbar-brand href="#">ArcaTech</b-navbar-brand>

		    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		    <b-collapse id="nav-collapse" is-nav>
		      <b-navbar-nav>
		      <router-link exact-active-class="active" to="/" class="nav-link">Inicio</router-link>
		      <router-link exact-active-class="active" to="/comics" class="nav-link">Cómics</router-link>
		      <router-link exact-active-class="active" to="/examenes" class="nav-link">Exámenes</router-link>
		      </b-navbar-nav>		      
		    </b-collapse>

		  </b-navbar>
		</div>


        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {}
</script>