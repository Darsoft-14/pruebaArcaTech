<template>
	<main>

		<div class="mx-auto" style="width: 600px;">
			<h1>The Rick and Morty</h1>
		</div>

		<div class="mx-auto" style="width: 600px;">
			<h7>Filter by status</h7>
		    <b-form-select v-model="selected" :options="options"></b-form-select>

		    <h7>Filter by Gender</h7>
		    <select v-model="selectedG">
                <option value= "Male">Male</option>
                <option value= "Female">Female</option>
                <option value= "unknown">unknown</option>
              </select>

              <b-button variant="success" size="sm" v-on:click="clean">Clean</b-button>
			  

		    <br></br>
		  </div>


		<!-- mostrar los datos-->

		<!-- contenedor-->
		<div class="content">
			<!-- contenedor comic-->
			<div class="content-comics" v-for="(comic, index) in filterSelected" :key="index">
				<!-- comics-->
				<div class="comic">
					<img :src="comic.image" alt="">
					<!-- información comics-->
					<div class="info-comic">
						<h2> {{ comic.name }}</h2>
						<h4> {{ comic.status }} - {{ comic.species }}</h4>
						<h4> Gender: {{ comic.gender }}</h4>
						<h4>Last known location:</h4>
						<h4> {{ comic.location.name }}</h4>
						
					</div>
				</div>
			</div>
		</div>


	</main>
</template>


<script>

export default {
	name: "comics",
	data(){
		return{
			comics:[],

			selected:'',
	        options: [
	          { value: 'Alive', text: 'Alive' },
	          { value: 'unknown', text: 'unknown' },
	          { value: 'Dead', text: 'Dead' },
	        ],

	        selectedG:'',
	       

		}
	},

	mounted(){
		this.mostrarComics();
	},
	methods:{
		async mostrarComics(){
			await this.axios.get('https://rickandmortyapi.com/api/character/')
				.then(response=>{
				this.comics = response.data.results
				})
				.catch(error=>{
					this.blog = []
				})
		},

		clean: function (event) {
	      location. reload()
	      
    	}

	},

	computed: {
		filterSelected(){
			return this.comics.filter(get =>{
			//if(this.selected){
				return get.status.includes(this.selected)
			//}

			//if(this.selectedG){
				//return get.gender.includes(this.selectedG)
			//}
			})
		}
	
	},

	

}


</script>

<style >

.content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px 20px;
  width: 100%;
  margin: 0 auto;
}
.content-comics{
  background: #002128;
  padding: 1rem;
  border-radius: 1rem;
}
.content-comics:hover {
    background: #1b1b1b;
}
.comic {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info-comic{
  display: table-column;
  justify-content: center;
  margin: 0 auto;
}

img {
  height: 50%;
  width: 50%;
  border-radius: 1rem;
}

h2 {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.8rem;
  margin: 1rem;
}
h4 {
  margin: 1rem;
  color: #ffffff;
  border-radius: 0.4rem;
  font-weight: inherit;
  padding: 0.2rem;
}



</style>
