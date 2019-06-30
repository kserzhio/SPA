/* eslint-disable */
export default {
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'Description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '123'
            },
            {
                title: 'Second ad',
                description: 'Description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '12334'
            },
            {
                title: 'Last ad',
                description: 'Description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '123345'
            },
            {
                title: 'Last ad',
                description: 'Description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '12334545'
            }
        ]
    },
    mutations: {},
    action: {},
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        }
    }
}