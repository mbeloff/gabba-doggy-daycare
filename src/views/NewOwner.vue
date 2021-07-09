<template>
  <div class="tile relative h-full">
    <div v-if="gettingToken" class="fixed h-screen w-screen grid place-items-center bg-white bg-opacity-50">
      <spinner></spinner>
    </div>
    <div v-if="tokenFailed" class="h-full py-20 text-center grid place-items-center">
      <div class="grid place-items-center">
        <p>Sorry, something went wrong.</p>
        <p>redirecting... </p>
        <spinner></spinner>
      </div>
      
    </div>
    <div v-show="!gettingToken && !tokenFailed" class="container h-full mx-auto py-10 p-2">
      <p class="text-center font-bold text-blue-500 text-xl">Create a New Account for GDDC <span class="capitalize">{{this.getRegion()}}</span></p>
      <div class="flex flex-col gap-3 max-w-xl mx-auto py-3 text-sm">        
        <p class="text-left">Please complete the form below to create a new PetExec account with Gabba Doggy Daycare. You will then be able to <open-login class="link-pink">login</open-login> to manage your doggy daycare bookings and purchase packages.</p>
        <p class="text-left">If you already have a petexec account with another daycare, you will need to use a different email address. If you already have a petexec account with us but you've forgotten your password, you can click here <a target="_blank" rel="noopener" href="https://
secure.petexec.net/lostPassword.php" class="mr-3 text-sm link-pink" tabindex="0">forgot password?</a></p>
      </div>
      
      <form action="POST" class="max-w-xl mx-auto grid grid-cols-1" id="createAccount">
        <span class="form-heading">Account</span>
        <div class="form-group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">

            <div class="input-group grid col-span-full">
              <label class="new-label" for="newusername">username</label>
              <input readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" ref="username" @input="checkMissing('username')" v-model="form.username" type="text" name="username" id="newusername" class="new-input" :class="{'input-invalid' : formMissing.includes('username') && form.username.length == 0}">
              
            </div>
            <div class="input-group grid">
              <label class="new-label" for="newpassword">password</label>
              <input readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" ref="password" @input="checkMissing('password')" v-model="form.password" type="text" name="password" id="newpassword" class="new-input" @focus="pw1 = true" @blur="pw1 = false" :class="{'input-invalid' : formMissing.includes('password') && form.password.length == 0}">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="newpassword2">re-type password</label>
              <input readonly onfocus="this.removeAttribute('readonly');" autocomplete="off" ref="password2" @input="checkMissing('password2')" v-model="form.password2" type="text" name="password2" id="newpassword2" class="new-input" @focus="pw2 = true" @blur="pw2 = false" :class="{'input-invalid' : formMissing.includes('password2') && form.password2.length == 0}">
            </div>
          </div>
        </div>

        <p class="form-heading">Personal Details</p>
        <div class="form-group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            <div class="input-group grid">
              <label class="new-label" for="firstname">First name</label>
              <input v-model="form.firstname" ref="firstname" @input="checkMissing('firstname')" type="text" name="firstname" id="firstname" class="new-input" :class="{'input-invalid' : formMissing.includes('firstname') && form.firstname.length == 0}">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="lastname">last name</label>
              <input v-model="form.lastname" ref="lastname" @input="checkMissing('lastname')" type="text" name="lastname" id="lastname" class="new-input" :class="{'input-invalid' : formMissing.includes('lastname') && form.lastname.length == 0}">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="phone">Phone</label>
              <input v-model="form.phone" ref="phone" @input="checkMissing('phone')" type="number" name="phone" id="phone" class="new-input" :class="{'input-invalid' : formMissing.includes('phone') && form.phone.length == 0}">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="email">email</label>
              <input v-model="form.email" @input="checkMissing('email')" ref="email" type="email" name="email" id="email" class="new-input" :class="{'input-invalid' : formMissing.includes('email') && form.email.length == 0}">
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="grid grid-cols-2 gap-2 p-2">
            <div class="input-group grid col-span-full md:col-span-1">
              <label class="new-label" for="address">Address</label>
              <input v-model="form.address" @input="checkMissing('address')" ref="address" type="text" name="address" id="address" class="new-input" :class="{'input-invalid' : formMissing.includes('address') && form.address.length == 0}">
            </div>
            <div class="input-group grid col-span-full md:col-span-1">
              <label class="new-label" for="city">city</label>
              <input v-model="form.city" @input="checkMissing('city')" ref="city" type="text" name="city" id="city" class="new-input" :class="{'input-invalid' : formMissing.includes('city') && form.city.length == 0}">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="state">state</label>
              <select v-model="form.state" @input="checkMissing('state')" ref="state" name="state" id="state" class="new-input" :class="{'input-invalid' : formMissing.includes('state') && form.state.length == 0}">
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
              <label class="new-label" for="postcode">postcode</label>
              <input v-model="form.postcode" @input="checkMissing('postcode')" ref="postcode" type="number" name="postcode" id="postcode" class="new-input w-full" :class="{'input-invalid' : formMissing.includes('postcode') && form.postcode.length == 0}">
            </div>
          </div>
        </div>

        <p class="form-heading">Emergency Contact</p>
        <div class="form-group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            <div class="input-group grid">
              <label class="new-label" for="emergencycontact">Emergency Contact Name</label>
              <input v-model="form.emergencycontact" @input="checkMissing('emergencycontact')" ref="emergencycontact" type="text" name="emergencycontact" id="emergencycontact" class="new-input" :class="{'input-invalid' : formMissing.includes('emergencycontact') && form.emergencycontact.length == 0}">
            </div>
            <div class="input-group grid">
              <label class="new-label" for="emergencyphone">Emergency Contact Number</label>
              <input v-model="form.emergencyphone" @input="checkMissing('emergencyphone')" ref="emergencyphone" type="number" name="emergencyphone" id="emergencyphone" class="new-input" :class="{'input-invalid' : formMissing.includes('emergencyphone') && form.emergencyphone.length == 0}">
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="grid grid-cols-1 gap-2 p-2">
            <div class="input-group grid">
              <label class="new-label" for="howfound">How did you find us?</label>
              <select v-model="form.howfound" @input="checkMissing('howfound')" ref="howfound" name="howfound" id="howfound" class="new-input" :class="{'input-invalid' : formMissing.includes('howfound') && form.howfound.length == 0}">
                <option v-for="item in this.howFound" :key="item.howfoundid" :value="item.howfoundid">{{item.howfound}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 px-2" v-if="formMissing.length > 0">
          <p class="text-blue-700 text-sm">All fields are required*</p>       
        </div>
        <div class="grid grid-cols-1 p-2 pl-6" v-if="petexecErrors.length > 0">
          <ul class="list-disc list-outside">
            <li class="text-blue-900 text-sm" v-for="error in petexecErrors" :key="error">{{error}}</li>
          </ul>
        </div>
        <div class="col-span-full grid grid-cols-2 gap-2 p-2">
          <button class="btn-blue col-start-2" @click.prevent="validateForm">Submit and Login</button>
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
        gettingToken: true,
        tokenFailed: false,
        pw1: null,
        pw2: null,
        newaccountcreated: false,
        howFound: "",
        response: "",
        formMissing: [],
        petexecErrors: [],
        form: {    
          howfound: '',      
          emergencycontact: '',
          emergencyphone: '',
          postcode: '',
          state: 'QLD',
          city: '',
          address: '',
          email: '',
          phone: '',
          lastname: '',
          firstname: '',
          password2: '',
          password: '',
          username: '',
        },
      }
    },
    computed: {
      region() {
        return this.getRegion()
      },
      link() {
        return this.$store.state[this.getRegion()].newAccountLink
      }
    },
    props: {
    },
    watch: {
      // get new access token on region change
      'region': async function () {
        this.gettingToken = true
        await this.getToken()
      },
      // get howfound list when region/token changes
      'response.access_token': async function () {
        this.gettingToken = false
        await this.howfound()
      },
      'tokenFailed': function() {
        if (this.tokenFailed == true) {
          window.location.href=this.link 
        }                               
      },
      'response': function () {
        if (this.response.error) {
          this.gettingToken = false
          this.tokenFailed = true
        } 
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
        fetch("https://www.gabbadoggydaycare.com/.netlify/functions/getAuth?r=" + this.getRegion(), requestOptions)
          .then(response => response.text())
          .then(result => {
            // console.log(result)
            this.response = JSON.parse(result)
            this.$forceUpdate()
          })
          .catch(error => {console.log('Couldn\'t get token!', error)
          this.gettingToken = false
          this.tokenFailed = true});
      },
      howfound() {
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
              this.howFound = JSON.parse(result).howfound

              })
            .catch(error => console.log('error', error));
      },  
      login() {
        this.$refs.login.submit()
      },
      validateForm() {
        this.formMissing = []
        let obj = this.form
        Object.keys(obj).forEach(key => {
          if (obj[key].length == 0) {
            this.formMissing.push(key)
            this.$refs[key].focus()
          }          
        });
        this.$forceUpdate()
        if (this.formMissing.length < 1) {
          this.addOwner()
        }      
      },
      checkMissing(item){
        let index = this.formMissing.indexOf(item);
        if (index > -1) {
          this.formMissing.splice(index, 1);
        } if (this.form[item].length == 0) {
          this.formMissing.push(item)
        }
      },
      addOwner() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.response.access_token);

        var formdata = new FormData();
        formdata.append("firstName", this.form.firstname);
        formdata.append("lastName", this.form.lastname);
        formdata.append("addr1", this.form.address);
        formdata.append("city", this.form.city);
        formdata.append("state", this.form.state);
        formdata.append("zip", this.form.postcode);
        formdata.append("emergencyContact", this.form.emergencycontact);
        formdata.append("emergencyPhone", this.form.emergencyphone);
        formdata.append("username", this.form.username);
        formdata.append("password", this.form.password);
        formdata.append("password2", this.form.password2);
        formdata.append("email", this.form.email);
        formdata.append("howFoundId", this.form.howfound);
        formdata.append("cellPhone", this.form.phone);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("https://secure.petexec.net/api/owner", requestOptions)
          .then(response => response.json())
          .then(result => {
            if (!result.success) {
              let errs = result.errors
              this.petexecErrors = errs
            } else {
              this.newaccountcreated = true 
              this.login()
            }
          })
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
      @apply text-xl p-1 bg-white w-full rounded
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

    .input-invalid {
      @apply ring ring-red-500 ring-opacity-50
    }
  }

  .hidden-form {
    pointer-events: none
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>