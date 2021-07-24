import { connect } from '../../Themes/OsmiProvider'

export default connect({
  container: 'flex p-5 justify-center items-center',
  appLogo: 'w-150 h-150',
  title: 'font-bold text-2xl text-black text-center -mt-35',
  desc: 'text-base text-white text-center mb-5',
  btnExplore: 'bg-primary rounded-md py-2 px-3 items-center mt-5',
  btnExploreLabel: 'text-xl text-white font-bold text-center'
})