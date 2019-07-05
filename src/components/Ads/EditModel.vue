<template>
    <v-dialog width="400px" v-model="modal">
        <v-btn class="warning" flat slot="activator">Edit</v-btn>
        <v-card>
            <v-container>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-title>
                            <h1 class="text--primary">Edit</h1>
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-text>
                            <v-text-field
                                    name="title"
                                    label="Title"
                                    type="text"
                                    v-model="editTitle"
                            ></v-text-field>
                            <v-text-field
                                    name="description"
                                    label="Description"
                                    type="text"
                                    multi-line
                                    v-model="editDescription"
                            ></v-text-field>
                        </v-card-text>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row>
                    <v-flex xs12>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class="error" @click="onCancel">Cancel</v-btn>
                            <v-btn class="success" @click="onSave">Save</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    /*eslint-disable */
    export default {
        props:['ad'],
        name: "EditModel",
        data() {
            return {
                modal: false,
                editDescription: this.ad.description,
                editTitle: this.ad.title
            }
        },
        methods:{
            onCancel(){
                this.editDescription = this.ad.description
                this.editTitle = this.ad.title
                this.modal = false
            },
            onSave(){
                if(this.editDescription !== '' && this.editTitle !== ''){
                    this.$store.dispatch('updateAd',{
                        title: this.editTitle,
                        description: this.editDescription,
                        id: this.ad.id
                    })
                    this.modal = false
                }
            }
        }
    }
</script>

<style scoped>

</style>
