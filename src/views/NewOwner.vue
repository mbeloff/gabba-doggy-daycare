<template>
  <div>
    <div class="login">
      <form id="theForm" name="theForm" return="" false="" @submit.prevent="handleSubmit" class="has-validation-callback max-w-screen-md m-auto">
        <fieldset class='flex flex-col'>
          <h2>Create an Owner for Gabba Doggy Daycare</h2>

          <div class="directions" id="tDirections"><b>Directions</b>: Fill out the form. Once created, you will be able to log into the system using the credentials provided here. This form requires Javascript and Cookies to be processed. Please enable before continuing.

            <br><br><strong>Note:</strong> Field names with a <span class="required"><strong>* </strong> </span> &nbsp;are required.<br><br>


            <div class="caution">In the event the system detects that you already have an account, you can reset the login credentials by using our <a href="lostPassword.php" class="btn btn-default btn-sm">Reset Password</a> function, which will email the information to the requested email address.</div>



          </div>

          <div class="mb-1">
            <label class="my-label" for="firstName">First Name</label>
            <input class="my-input" type="text" name="firstName" id="firstName" value="" placeholder="First Name" autocomplete="off" v-model="form.firstName">
          </div>

          <div class="mb-1">
            <label class="my-label" for="lastName">Last Name</label>
            <input class="my-input" type="text" name="lastName" id="lastName" value="" placeholder="Last Name" autocomplete="off" v-model="form.lastName">
          </div>

          <div class="mb-1">
            <label class="my-label" for="username">Username <small><span class="glyphiconglyphicon-asterisk"> </span></small></label>
            <input class="my-input" type="text" name="username" id="username" value="" placeholder="username" autocomplete="off" v-model="form.username">
          </div>

          <div class="mb-1">
            <label class="my-label" for="password">Password</label>
            <input class="my-input" type="password" name="password" id="password" placeholder="Enter New Password" autocomplete="off" v-model="form.password">
          </div>
          <div class="mb-1">
            <label class="my-label" for="password2">Password Again*</label>
            <input class="my-input" type="password" name="password2" id="password2" placeholder="Enter New Password Again" autocomplete="off" v-model="form.password2">
          </div>

          <div class="clearfix"></div>
          <div class="mb-1">
            <label class="my-label" for="additionalOwner">Additional Owner</label>
            <input class="my-input" type="text" name="additionalOwner" id="additionalOwner" value="" placeholder="Additional Owner" v-model="form.additionalOwner">
          </div>

          <div class="mb-1">
            <label class="my-label" for="addr1">Address</label>
            <input class="my-input" type="text" name="addr1" id="addr1" value="" placeholder="Address" v-model="form.addr1">
          </div>

          <div class="mb-1">
            <label class="my-label" for="city">City</label>
            <input class="my-input" type="text" name="city" id="city" value="" placeholder="City" v-model="form.city">
          </div>

          <div class="mb-1 w-1/2">
            <label class="my-label" for="selectedStateId">State</label>
            <select class="my-input" name="selectedStateId" id="selectedStateId" v-model="form.state">
              <option value="0">Select a State</option>
              <option value="NSW">New South Wales</option>
              <option value="ACT">Australian Capital Territory</option>
              <option value="NTA">Northern Territory</option>
              <option value="QLD">Queensland</option>
              <option value="SA">South Australia</option>
              <option value="TAS">Tasmania</option>
              <option value="VIC">Victoria</option>
              <option value="WAU">Western Australia</option>
            </select>
          </div>

          <div class="mb-1 w-1/2">
            <label class="my-label" for="zip">Zip / Postal Code</label>
            <input class="my-input" type="text" name="zip" id="zip" value="" placeholder="Zip / Postal Code" v-model="form.zip">
          </div>

        </fieldset>
        <br>
        <fieldset>

          <h2 class="legend1">Contact Info / Other</h2>
          <div class="mb-1">
            <label class="my-label" for="email">Email</label>
            <input class="my-input" type="text" name="email" id="email" value="" placeholder="Email Address" v-model="form.email">
          </div>

          <div class="mb-1">
            <label class="my-label" for="homePhone">Home Phone (optional)</label>
            <input class="my-input" type="text" name="homePhone" id="homePhone" value="" placeholder="Home Phone Number" v-model="form.homePhone">
          </div>

          <div class="mb-1">
            <label class="my-label" for="cellPhone">Cell Phone</label>
            <input class="my-input" type="text" name="cellPhone" id="cellPhone" value="" placeholder="Cell Phone Number" v-model="form.cellPhone">
          </div>

          <div class="mb-1">
            <label class="my-label" for="emergencyContact">Emergency Contact Name</label>
            <input class="my-input" type="text" name="emergencyContact" id="emergencyContact" value="" placeholder="Emergency Contact Name" autocomplete="off" v-model="form.emergencyContact">
          </div>

          <div class="mb-1">
            <label class="my-label" for="emergencyContactPhone">Emergency Contact Phone</label>
            <input class="my-input" type="text" name="emergencyContactPhone" id="emergencyContactPhone" value="" placeholder="Emergency Contact Phone" v-model="form.emergencyPhone">
          </div>

          <div class="mb-1">
            <label class="my-label" for="howFound">How did you find us?</label>
            <select class="my-input" name="selectedHowFoundId" id="selectedHowFoundId" v-model="form.howFoundId">
              <option value="0">How did you find us?</option>
              <option value="3927">Existing Owner</option>
              <option value="3701">Facebook</option>
              <option value="3926">Google</option>
              <option value="3702">Instagram</option>
              <option value="3933">Other</option>
              <option value="3700">Signage</option>
              <option value="3929">Trainer</option>
              <option value="3930">Vet</option>
              <option value="3931">Walk-in</option>
              <option value="3932">Website</option>
              <option value="3928">Word of mouth</option>
            </select>
          </div>

          <div class="mb-1">
            <label class="my-label" for="howFoundOther">How Found Other</label>
            <input class="my-input" type="text" name="howFoundOther" id="howFoundOther" value="" v-model="form.howFoundOther">
          </div>
        </fieldset>
        <br>




        <br>

        <div class="button col-sm-4"> <input type="submit" name="theAction" id="theAction" value="Create Account" class="btn-blue check-out">&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/ajax-loader.gif" id="loading-indicator" style="display:none">
        </div>
        <div class="col-sm-4"></div>
        <div class="clearfix"></div>

        <div id="success"></div>




        <input type="hidden" name="x" value="zFuFWakd7Aw=">

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        base64: {},
        state: "",
        response: {},
        form: {
          username: 'gddcuser',
          password: '11111111',
          password2: '11111111',
          firstName: 'my name',
          lastName: 'my last name',
          employer: '-',
          additionalOwner: 'extra owner',
          addr1: '46 Deshon St',
          city: 'Woolloongabba',
          state: 'QLD',
          zip: '4107',
          email: 'michaelabeloff@gmail.com',
          homePhone: '0987098098',
          cellPhone: '1234123123',
          emergencyContact: 'some person',
          emergencyPhone: '2345234234',
          howFoundId: '3701',
          howFoundOther: 'Ad on facebook',
        }
      }
    },
    mounted() {
      this.state = Math.floor(Math.random() * 1000000000).toString();
      console.log(this.state)
      
      fetch("https://secure.petexec.net/api/authorize?response_type=token&client_id=1e18704def422bd1a3c1d3fdde12d106&redirect_uri=https://www.gabbadoggydaycare.com&scope=owner_create&state=" + this.state, {method: "GET"})
      .then(response => console.log(response))
      // .then(() => )
    },
    methods: {
      handleSubmit() {
        fetch("https://secure.petexec.net/api/token", {
        method: "POST",
        headers: {
          Authorization: this.base64,
        },  
      })
      .then(response => {
        var success = response.responseJSON.success;
        if (success == false) {
          var errors = response.responseJSON.combinedErrors;
          console.log(errors)
        } else {              
          console.log(success)
        }
      });
      }
    }
  }
</script>

<style>

</style>