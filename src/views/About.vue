<template>
    <div class="container">
        <div class="about d-flex justify-content-between">
            <div class="card text-center" v-for="elem in info">
                <div class="card-header">
                    {{elem.name}}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ elem.email }}</h5>
                    <p class="card-text">{{ elem.address }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data: () => {
            return {
                info: []
            }
        },
        beforeMount() {
            axios.get( 'http://localhost:3001/api/users' )
                .then( data => {
                    console.log( data.data );
                    this.info = data.data;
                } )
        }
    }
</script>
