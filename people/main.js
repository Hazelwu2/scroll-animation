// ScrollMagic: init controller
const controller = new ScrollMagic.Controller()

// Tween 觸發：滑動到 section2時
const scene = new ScrollMagic.Scene({
  triggerElement: '#section2'
})

  // animate color and top border in relation to scroll position
  .setTween('#bg img', {
    maxWidth: '1200px',
    top: '40%',
    left: '80%',
    opacity: 0.5
  })
  .addTo(controller)

const scene3 = new ScrollMagic.Scene({
  triggerElement: '#section3',
  duration: 300
})
  .setTween('#bg img', {
    top: '20%'
  })
  .addTo(controller)