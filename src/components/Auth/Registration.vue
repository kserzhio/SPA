<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                      prepend-icon="person"
                      name="email"
                      label="Email"
                      type="email"
                      :rules="emeilRules"
                      v-model="email"
              >

              </v-text-field>
              <v-text-field
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                      :counter="6"
                      v-model="password"
                      :rules="passwordRules"

              >
              </v-text-field>
              <v-text-field
                      prepend-icon="lock"
                      name="confirm-password"
                      label="Password"
                      id="confirm-password"
                      type="password"
                      :counter="6"
                      v-model="confirmPassword"
                      :rules="confirmPasswordRules"

              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    @click="onSubmit"
                    :loading="loading"
                    :disabled="!valid || loading"
                    color="primary">
          Create account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        confirmPassword: '',
        emeilRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be or more'
        ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Password should match'
        ]
      }
    },
    //eslint-disable-next-line
    computed : {
      loading (state) {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          //eslint-disable-next-line
          const user = {
            email: this.email,
            password: this.password
          }
          this.$store.dispatch('registerUser', user)
                  .then(() => {
                    this.$router.push('/')
                  })
                  .catch(err => console.log(err))
        }
      }
    }
  }
</script>
