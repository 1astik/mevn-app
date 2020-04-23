<template>
    <div class="home container">
        <div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Name</span>
                </div>
                <input type="text" class="form-control" placeholder="Name" v-model="name" id="name">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Email</span>
                </div>
                <input type="email" class="form-control" placeholder="Email" v-model="email" id="email">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">Address</span>
                </div>
                <input type="text" class="form-control" placeholder="Address" v-model="address" id="address">
            </div>
            <div class="input-group mb-3 d-flex justify-content-center ">
                <div class="form-check px-3">
                    <input class="form-check-input" type="radio" v-model="gender" id="gender" value="male" :checked="genderD">
                    <label class="form-check-label" for="gender">
                        Male
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="gender" id="gender1" value="female">
                    <label class="form-check-label" for="gender">
                        Female
                    </label>
                </div>
            </div>
            <input type="submit" value="Send" class="btn btn-primary" @click="sendData">
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Home',
        data: () => {
          return {
            name: '',
            email: '',
            address: '',
            gender: '',
            genderD: false,
          }
        },
      methods: {
          async sendData(){
                console.log( await axios({
                    url: 'http://localhost:3001/api/users',
                    method: 'post',
                    data: {
                        name: this.name,
                        email: this.email,
                        address: this.address,
                        gender: this.gender
                    }
                }));
          }
      }
    }
</script>
