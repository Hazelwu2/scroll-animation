// Init Controller
const controller = new ScrollMagic.Controller()

const scene = new ScrollMagic.Scene({
  triggerElement: '#section1',
  // duration: 100,
  triggerHook: 0
})
  .setTween('.cover img', {
    maxWidth: '800px',
    top: '40%',
    left: '60%',
    opacity: 0.7
  })
  // .setPin('.animation')
  .addTo(controller)