/*eslint-disable*/
import * as fb from 'firebase'
class Ad {
    constructor (title, description, ownerId ,imageSrc = '' ,promo = false, id = null) {
        this.title = title
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}
export default {
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'Hello i am description',
                promo: false,
                imageSrc: 'https://3dnews.ru/assets/external/illustrations/2016/09/26/939982/msi-geforce_gtx_1070_gaming_x_8_g-product_pictures-boxshot-2.jpg',
                id: '123'
            },
            {
                title: 'Second ad',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'https://i2.rozetka.ua/goods/3574184/intel_pentium_gold_g4560_images_3574184127.jpg',
                id: '1234'
            },
            {
                title: 'Third ad',
                description: 'Hello i am description',
                promo: true,
                imageSrc: 'http://shtrih-center.ru/state/img/sist_blok_222.gif',
                id: '12345'
            }
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
       async createAd ({commit, getters}, payload) {
            commit('clearError')
           commit('setLoading',true)
           try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.user.id,
                    payload.imageSrc,
                    payload.promo
                )
              const fbValue = await fb.database().ref('ads').push(newAd)
           } catch (error) {
               commit('setError',error.message)
               commit('setLoading',false)
               throw error
           }
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}
