<template>
  <div class="tile">
    <div class="container mx-auto py-10">
      <p class="text-center font-bold text-blue-500 text-xl">Create a New Account for GDDC <span class="capitalize">{{this.getRegion()}}</span></p>
      <p class="py-10 text-center max-w-xl mx-auto">Please complete the form below to create a new PetExec account with Gabba Doggy Daycare. You will then be able to <open-login class="link-pink">login</open-login> to manage your doggy daycare bookings.</p>
      <form action="POST" class="max-w-xl mx-auto grid grid-cols-1">
        <span class="form-heading">Account</span>
        <div class="form-group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">

            <div class="input-group grid col-span-full">
              <label class="new-label" for="newusername">username</label>
              <input autocomplete="off" v-model="form.username" type="text" name="username" id="newusername" class="new-input">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="newpassword">password</label>
              <input autocomplete="off" v-model="form.password" :type="pw1 ? 'text' : 'password'" name="password" id="newpassword" class="new-input" @focus="pw1 = true" @blur="pw1 = false">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="newpassword2">re-type password</label>
              <input autocomplete="off" v-model="form.password2" :type="pw2 ? 'text' : 'password'" name="password2" id="newpassword2" class="new-input" @focus="pw2 = true" @blur="pw2 = false">
            </div>
          </div>
        </div>

        <p class="form-heading">Personal Details</p>
        <div class="form-group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            <div class="input-group grid">
              <label class="new-label" for="firstname">First name</label>
              <input v-model="form.firstname" type="text" name="firstname" id="firstname" class="new-input">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="lastname">last name</label>
              <input v-model="form.lastname" type="text" name="lastname" id="lastname" class="new-input">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="cellphone">Phone #</label>
              <input v-model="form.cellphone" type="number" name="cellphone" id="cellphone" class="new-input">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="email">email</label>
              <input v-model="form.email" type="email" name="email" id="email" class="new-input">
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="grid grid-cols-2 gap-2 p-2">
            <div class="input-group grid col-span-full md:col-span-1">
              <label class="new-label" for="address">Street Address</label>
              <input v-model="form.addr1" type="text" name="address" id="address" class="new-input">
            </div>
            <div class="input-group grid col-span-full md:col-span-1">
              <label class="new-label" for="city">city</label>
              <input v-model="form.city" type="text" name="city" id="city" class="new-input">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="state">state</label>
              <select v-model="form.state" name="state" id="state" class="new-input">
                <option value="QLD">QLD</option>
                <option value="NSW">NSW</option>
                <option value="ACT">ACT</option>
                <option value="NTA">NT</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="VIC">VIC</option>
                <option value="WAU">WA</option>
              </select>
            </div>
            <div class="input-group grid">
              <label class="new-label" for="zip">postcode</label>
              <input v-model="form.zip" type="number" name="zip" id="zip" class="new-input w-full">
            </div>
          </div>
        </div>

        <p class="form-heading">Emergency Contact</p>
        <div class="form-group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            <div class="input-group grid">
              <label class="new-label" for="emergencyContact">Emergency Contact Name</label>
              <input v-model="form.emergencyContact" type="text" name="emergencyContact" id="emergencyContact" class="new-input">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="emergencyPhone">Emergency Contact Number</label>
              <input v-model="form.emergencyPhone" type="number" name="emergencyPhone" id="emergencyPhone" class="new-input">
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="grid grid-cols-1 gap-2 p-2">
            <div class="input-group grid">
              <label class="new-label" for="howfound">How did you find us?</label>
              <select v-model="form.howFoundId" name="howfound" id="howfound" class="new-input">
                <option v-for="item in this.howFound" :key="item.id" :value="item.howfoundid">{{item.howfound}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="col-span-full grid grid-cols-2 gap-2 p-2">
          <button class="btn-blue col-start-2" @click.prevent="addOwner">Create Account</button>
        </div>

      </form>
      <div v-if="!newaccountcreated">
        <form ref="login" method="POST" action="https://secure.petexec.net/remoteLogin.php" id="petExecLogin" class="invisible hidden-form">
          <input v-model="form.username" ref="name" class="my-input" name="username" id="username" type="text" placeholder="">
          <input v-model="form.password" class="my-input" name="password" id="password" type="password" placeholder="">
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        pw1: null,
        pw2: null,
        newaccountcreated: false,
        howFound: "",
        response: "",
        form: {
          username: '',
          password: '',
          password2: '',
          firstname: '',
          lastname: '',
          addr1: '',
          city: '',
          state: '',
          zip: '',
          emergencyContact: '',
          emergencyPhone: '',
          email: '',
          cellPhone: '',
          howFoundId: '',
        }
      }
    },
    computed: {
      region() {
        return this.getRegion()
      },
    },
    props: {
    },
    watch: {
      // get new access token on region change
      'region': async function () {
        await this.getToken()
      },
      // get howfound list once new token is generated
      'response.access_token': async function () {
        console.log('token changed')
        await this.howfound()
      }
    },
    created() {
      this.getToken()
    },
    methods: {
      getToken() {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        fetch("http://localhost:8888/.netlify/functions/getAuth?r=" + this.getRegion(), requestOptions)
          .then(response => response.text())
          .then(result => {
            console.log(result)
            this.response = JSON.parse(result)
            this.$forceUpdate()
          })
          .catch(error => console.log('error', error));
      },
      howfound() {
        // fetch("https://secure.petexec.net/api/company/how-found", {
        //   method: "GET",
        //   header: {
        //     "Authorization": 'Bearer ' + this.response.access_token
        //   }
        // })
        //   .then(response => response.text())
        //   .then(result => {
        //     console.log(result)
        //   })

          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer " + this.response.access_token);

          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };

          fetch("https://secure.petexec.net/api/company/how-found", requestOptions)
            .then(response => response.text())
            .then(result => {
              console.log(result)
              this.howFound = JSON.parse(result).howfound
              })
            .catch(error => console.log('error', error));
      },  
      // getAuth() {
      //   // console.log(event)
      //   // console.log(context)
      //   let Base64 = 'Basic ' + process.env.VUE_APP_PE_BASE
      //   var myHeaders = new Headers();
      //   myHeaders.append("Authorization", Base64);
      //   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      //   var urlencoded = new URLSearchParams();
      //   urlencoded.append("grant_type", "password");
      //   urlencoded.append("username", process.env.VUE_APP_PE_U);
      //   urlencoded.append("password", process.env.VUE_APP_PE_P);
      //   urlencoded.append("scope", "owner_create company_read");

      //   var requestOptions = {
      //     method: 'POST',
      //     headers: myHeaders,
      //     body: urlencoded,
      //     redirect: 'follow'
      //   };
      //   // let token
      //   fetch("https://secure.petexec.net/api/token", requestOptions)
      //     .then(response => response.text())
      //     .then(result => console.log(result))
      //     .catch(error => console.log('error', error))

      //   // console.log('final token = ' + token)
      //   // return token
      // },
      login() {
        this.$refs.login.submit()
      },
      addOwner() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.response.access_token);

        var formdata = new FormData();
        formdata.append("firstName", this.form.firstname);
        formdata.append("lastName", this.form.lastname);
        formdata.append("addr1", this.form.addr1);
        formdata.append("city", this.form.city);
        formdata.append("state", this.form.state);
        formdata.append("zip", this.form.zip);
        formdata.append("emergencyContact", this.form.emergencyContact);
        formdata.append("emergencyPhone", this.form.emergencyPhone);
        formdata.append("username", this.form.username);
        formdata.append("password", this.form.password);
        formdata.append("password2", this.form.password2);
        formdata.append("email", this.form.email);
        formdata.append("howFoundId", this.form.howFoundId);
        formdata.append("cellPhone", this.form.cellphone);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        fetch("https://secure.petexec.net/api/owner", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            if (!result.success) {
              alert(result.errors)
            } else {
              this.newaccountcreated = true
              this.login()
            }
          })
        // .catch(error => console.log('error', error));
      }
    }
  }
</script>

<style lang="postcss">
  @layer components {
    .new-label {
      @apply text-xs capitalize transition text-blue-600 font-bold pl-1 mb-0.5
    }

    .new-input {
      @apply text-xl p-1 bg-white w-full
    }

    .new-input:focus {
      @apply ring-0
    }

    .form-heading {
      @apply col-span-full font-bold text-xl pl-3 rounded-t bg-gray-200
    }

    .form-group {
      @apply border mb-2 bg-gray-200 rounded-b
    }
  }

  .hidden-form {
    pointer-events: none
  }
</style>