import bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

export default {
  name: 'HomeComponent',
  data() {
    return {}
  },
  mounted() {
    console.log('Bootstrap foi carregado:', bootstrap)
  },
}
