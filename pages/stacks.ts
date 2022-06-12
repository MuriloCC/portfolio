import animatedReactIcon from '../assets/react.json'
import animatedFlutterIcon from '../assets/flutter.json'
import animatedHtmlIcon from '../assets/html.json'
import animatedCssIcon from '../assets/css3.json'
import animatedNodeJsIcon from '../assets/nodejs.json'
import animatedJsIcon from '../assets/javascript.json'

export const stacks = [
  {
    width: 100,
    height: 100,
    title: "React",
    type: "WEB e Mobile",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedReactIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "Flutter",
    type: "MOBILE",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedFlutterIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "HTML",
    type: "WEB",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedHtmlIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "CSS",
    type: "WEB",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedCssIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "NodeJs",
    type: "Backend",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedNodeJsIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },

  {
    width: 120,
    height: 120,
    title: "Javascript",
    type: "Linguagem",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: animatedJsIcon,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
  },
]