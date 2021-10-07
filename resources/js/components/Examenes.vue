<template>
	<main>

		<div>
			<h1>Examenes</h1>
		</div>

		<div>
		  <b-button v-b-modal.modal-1 variant="info">Crear Examen</b-button>
		  <b-modal id="modal-1" title="Formulario de examen" bg="primary">
		  
		    <div>
		       <b-form-group  label="Título del examen" size="sm"></b-form-group>
			   <b-form-input size="sm"></b-form-input>

			   <b-form-group  label="Descripción" size="sm"></b-form-group>
			   <b-form-textarea id="textarea-small" size="sm"></b-form-textarea>

			   <b-form-group  label="Tiempo en minutos" size="sm"></b-form-group>
			   <b-form-input size="sm"></b-form-input>

			   <b-form-group  label="Intntos permitidos" size="sm"></b-form-group>
			   <b-form-input size="sm"></b-form-input>			      
			    
			</div>
		  </b-modal>
		</div>


	</main>
</template>