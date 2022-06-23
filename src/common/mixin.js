//两个组件之间复用代码，通过 mixin 来复用
import { debounce } from "./utils"
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500)

        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
            // console.log('混入');
    },
}

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    },
}