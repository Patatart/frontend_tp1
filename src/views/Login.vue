<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12" md="4">
      </v-col>
      <v-col class="text-center" cols="12" md="4">
        <v-form v-model="valid">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required>
          </v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            required>
          </v-text-field>
          <div class="my-2">
            <v-btn color="primary"
              @click="triggerLogin">
              Log In
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    state: false,
    valid: false,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'Email is required'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),
  methods: {
    ...mapActions('user', ['login']),
    async triggerLogin () {
      try {
        await this.login({
          email: this.email,
          password: this.password
        })
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
