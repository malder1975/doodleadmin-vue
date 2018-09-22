<template>
    <button
      :display="display"
      :mobile="mobile"
      :class="classList"
      type="button"
      @click="asideToggle">
      <span class="fas fa-cog navitem-icon "/>
    </button>
</template>

<script>
  import {asideMenuCssClasses, validBreakpoints, checkBreakpoint} from '../assets/js/AsideClasses'
  import toggleClasses from '../assets/js/AsideTogglerClasses'
    export default {
        name: "AsideToggler",
        props: {
          defaultOpen: {
            type: Boolean,
            default: false
          },
          display: {
            type: String,
            default: ''
          },
          mobile: {
            type: Boolean,
            default: false
          }
        },
        computed: {
          classList() {
            return [
              'navbar-toggler',
              'nav-link'
            ]
          }
        },
        methods: {
          toggle(force) {
            const [display,mobile] = [this.display, this.mobile]
            let cssClass = asideMenuCssClasses[0]
            if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
              cssClass = `aside-menu-$(display)-show`
          }
          toggleClasses(cssClass, asideMenuCssClasses, force)
        },
          asideToggle (e) {
            e.preventDefault()
            this.toggle()
          }
        }
    }
</script>

<style scoped>

</style>
