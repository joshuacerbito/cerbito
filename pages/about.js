import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Navigation from '../components/Navigation';
import styles from '../styles/Uses.module.css';

const About = ({ title }) => {
  return (
    <main className="is-uses">
      <Head>
        <title>{title} uses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className={styles.centered}>
          <motion.h4
            className={styles.heading}
            layoutId="heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/">
              <a>{title}</a>
            </Link>
          </motion.h4>
          <Navigation />
          <motion.section
            layoutId="about"
            className={styles.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={styles.contentSection}>
              <h2>
                Hello, Internet{' '}
                <img
                  src="https://raw.githubusercontent.com/joshuacerbito/joshuacerbito/main/assets/wave.gif"
                  width="30px"
                />
              </h2>
              <p>
                I'm Joshua Cerbito, a Web Developer and Designer. I'm from the
                Philippines, and currently a Technical Director and the Training
                Director at{' '}
                <a href="https://codeandtheory.com/" rel="nofollow">
                  Code and Theory
                </a>
                .
              </p>
              <h3>🛠️ My Favorite Development Tools</h3>
              <p>
                I'd like to think that my approach to development is "technology
                agnostic", so the list below might look a bit much, but these
                are the actual stuff I've used for the past year or so.
              </p>
              <h4>👨&zwj;💻 Programming languages</h4>
              <p>
                <img
                  src="https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465"
                  alt="CSS3"
                  data-canonical-src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/a0a1ad90011aa02e7e6f32be4998b8843f0884eed20b575c8a2189859550824d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646172742d2532333031373543322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d64617274266c6f676f436f6c6f723d7768697465"
                  alt="Dart"
                  data-canonical-src="https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&amp;logo=dart&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465"
                  alt="HTML5"
                  data-canonical-src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/aeddc848275a1ffce386dc81c04541654ca07b2c43bbb8ad251085c962672aea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d2532333332333333302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d253233463744463145"
                  alt="JavaScript"
                  data-canonical-src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E"
                />
                <img
                  src="https://camo.githubusercontent.com/a44844ce4d3bf26f4685d5ae0e0fab359cdeca62ad71c675d3d89fd30f418665/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d61726b646f776e2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d61726b646f776e266c6f676f436f6c6f723d7768697465"
                  alt="Markdown"
                  data-canonical-src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&amp;logo=markdown&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/7d7b100e379663ee40a20989e6c61737e6396c1dafc3a7c6d2ada8d4447eb0e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"
                  alt="NodeJS"
                  data-canonical-src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/b7e290d2aeff9829bba45e897265ceebd34b25f6f7efba4b08e1b23cfe0815e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7068702d2532333737374242342e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706870266c6f676f436f6c6f723d7768697465"
                  alt="PHP"
                  data-canonical-src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&amp;logo=php&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534"
                  alt="Python"
                  data-canonical-src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&amp;logo=python&amp;logoColor=ffdd54"
                />
                <img
                  src="https://camo.githubusercontent.com/5b61735c54b91b851198d6de978a3ff3f3f9b5c2428bd5ed7f28ced1c93a181c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f727562792d2532334343333432442e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d72756279266c6f676f436f6c6f723d7768697465"
                  alt="Ruby"
                  data-canonical-src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&amp;logo=ruby&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/7df250f624de398fbf14c84b1667c3d1e8e1450d67c0be03bd0dfb4e6a28c2c2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7368656c6c5f7363726970742d2532333132313031312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676e752d62617368266c6f676f436f6c6f723d7768697465"
                  alt="Shell Script"
                  data-canonical-src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&amp;logo=gnu-bash&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/55e1508d75defa7d658205a949df888cfc46f1fc0c933478c71a7d9bd208029a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73776966742d4635344132413f7374796c653d666f722d7468652d6261646765266c6f676f3d7377696674266c6f676f436f6c6f723d7768697465"
                  alt="Swift"
                  data-canonical-src="https://img.shields.io/badge/swift-F54A2A?style=for-the-badge&amp;logo=swift&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"
                  alt="TypeScript"
                  data-canonical-src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white"
                />
              </p>
              <h4>🧰 Frameworks, Platforms, & libraries</h4>
              <p>
                <img
                  src="https://camo.githubusercontent.com/d9952651b677177c9ec05802b314d09d9f34364fcdad7b939c2c999c745d31dc/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d41706f6c6c6f4772617068514c2d3331314338373f7374796c653d666f722d7468652d6261646765266c6f676f3d61706f6c6c6f2d6772617068716c"
                  alt="Apollo-GraphQL"
                  data-canonical-src="https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&amp;logo=apollo-graphql"
                />
                <img
                  src="https://camo.githubusercontent.com/7fdbabca7249452643df5e88d7de38d26e94b5ed832defbeb9fd374a76805de4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456c656374726f6e2d3139313937303f7374796c653d666f722d7468652d6261646765266c6f676f3d456c656374726f6e266c6f676f436f6c6f723d7768697465"
                  alt="Electron.js"
                  data-canonical-src="https://img.shields.io/badge/Electron-191970?style=for-the-badge&amp;logo=Electron&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642"
                  alt="Express.js"
                  data-canonical-src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB"
                />
                <img
                  src="https://camo.githubusercontent.com/b6d2d66adc138025ea9cdf8444cdc29a588c98d062c263f8651ba6b7ad46fef0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f466c75747465722d2532333032353639422e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d466c7574746572266c6f676f436f6c6f723d7768697465"
                  alt="Flutter"
                  data-canonical-src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&amp;logo=Flutter&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/9b7982c2f9e3a972e53616030d446d32cb68c46cc7a5d97376126c615063d769/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4761747362792d2532333636333339392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d676174736279266c6f676f436f6c6f723d7768697465"
                  alt="Gatsby"
                  data-canonical-src="https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&amp;logo=gatsby&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/3a04bb4d94cca4f9031d88724ac757e733f68384ef5086600df86715c85b5cee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f677265656e253230736f636b2d3838434530323f7374796c653d666f722d7468652d6261646765266c6f676f3d677265656e736f636b266c6f676f436f6c6f723d7768697465"
                  alt="Green Sock"
                  data-canonical-src="https://img.shields.io/badge/green%20sock-88CE02?style=for-the-badge&amp;logo=greensock&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/d88eed8eec3f67c14be6906b5f43410837a516741b4a94879506c2bf747fc027/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f47554c502d2532334346343634372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d67756c70266c6f676f436f6c6f723d7768697465"
                  alt="Gulp"
                  data-canonical-src="https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&amp;logo=gulp&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/93ae318132d035a8c007ee1cb244f63a02d87cc0051dfa67323f5bfdc6b222d1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f496e736f6d6e69612d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d696e736f6d6e6961266c6f676f436f6c6f723d353834394245"
                  alt="Insomnia"
                  data-canonical-src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&amp;logo=insomnia&amp;logoColor=5849BE"
                />
                <img
                  src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73"
                  alt="JWT"
                  data-canonical-src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens"
                />
                <img
                  src="https://camo.githubusercontent.com/85b8858163097e34c31ef8eeda533e1fa18be0ec8ce58f494b6b5cedc2f27196/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c61726176656c2d2532334646324432302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6c61726176656c266c6f676f436f6c6f723d7768697465"
                  alt="Laravel"
                  data-canonical-src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&amp;logo=laravel&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/b47580b7e8e0b4ce9bb718070140318f72d316a0c88e0dd53a5ac4b0bdfc755e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e504d2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465"
                  alt="NPM"
                  data-canonical-src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&amp;logo=npm&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465"
                  alt="Next JS"
                  data-canonical-src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/60b022e85907fb54e71ba145be501944f7c800b9acaf025dd73fc23edad82322/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5075672d4646463f7374796c653d666f722d7468652d6261646765266c6f676f3d707567266c6f676f436f6c6f723d413836343534"
                  alt="Pug"
                  data-canonical-src="https://img.shields.io/badge/Pug-FFF?style=for-the-badge&amp;logo=pug&amp;logoColor=A86454"
                />
                <img
                  src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
                  alt="React"
                  data-canonical-src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"
                />
                <img
                  src="https://camo.githubusercontent.com/7a1eac05435009e58e5a990d7319fbb0e76d2f528fc3899d0ffc21636a09ee13/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163745f6e61746976652d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642"
                  alt="React Native"
                  data-canonical-src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB"
                />
                <img
                  src="https://camo.githubusercontent.com/9a7c7ebbabb2096c0ad0cac6f64bc9fe93f4954a3ae3f51d6f3e076ba462aab1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656475782d2532333539336438382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265647578266c6f676f436f6c6f723d7768697465"
                  alt="Redux"
                  data-canonical-src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&amp;logo=redux&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/aa2d67d682b7d59cb0955695b192fc1390c9da34e90aa0c63079c411d01a9c66/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f534153532d686f7470696e6b2e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d53415353266c6f676f436f6c6f723d7768697465"
                  alt="SASS"
                  data-canonical-src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&amp;logo=SASS&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/17c52b69ec19ec917854519501c1359aecd05cee895561a15b3ab3fc746efd99/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374726170692d2532333245374545412e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d737472617069266c6f676f436f6c6f723d7768697465"
                  alt="Strapi"
                  data-canonical-src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&amp;logo=strapi&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465"
                  alt="Styled Components"
                  data-canonical-src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/3029ebce543b028f460e602049059a0e599d1c5cae5bd4d6be0cd9a177055c9c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7376656c74652d2532336631343133642e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7376656c7465266c6f676f436f6c6f723d7768697465"
                  alt="Svelte"
                  data-canonical-src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&amp;logo=svelte&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/ec8056bddf659d21de39b358d9786e56731cd767117e091348411666a5e7eee6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465"
                  alt="TailwindCSS"
                  data-canonical-src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/e46148ed5e9cdfcec09a9b969a88e5c0793d62383884d93c058ffaa21405c03e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74687265656a732d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d74687265652e6a73266c6f676f436f6c6f723d7768697465"
                  alt="Threejs"
                  data-canonical-src="https://img.shields.io/badge/threejs-black?style=for-the-badge&amp;logo=three.js&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/cfb221c05f485331b66bcf123878fc7de981faffc16fe430ff53bb1ad4f41aad/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7765627061636b2d2532333844443646392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7765627061636b266c6f676f436f6c6f723d626c61636b"
                  alt="Webpack"
                  data-canonical-src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&amp;logo=webpack&amp;logoColor=black"
                />
                <img
                  src="https://camo.githubusercontent.com/fd232c52265a587ee5408f80de8736329ae914ca10caa506e4133cb0c5286a10/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7961726e2d2532333243384542422e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7961726e266c6f676f436f6c6f723d7768697465"
                  alt="Yarn"
                  data-canonical-src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&amp;logo=yarn&amp;logoColor=white"
                />
              </p>
              <h4>🗄️ Databases, Cloud hosting, &amp; SaaS</h4>
              <p>
                <img
                  src="https://camo.githubusercontent.com/9281daa5684971fd3325661e3dd5fea86b21a902e3741a556fb636fbf0e2f3d4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d2532334646393930302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465"
                  alt="AWS"
                  data-canonical-src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&amp;logo=amazon-aws&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/79468b9a9eefaf2c34d2bda1d7a315e4e6a82da2eb69552da4adc46ccf54cd4f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436c6f7564666c6172652d4633383032303f7374796c653d666f722d7468652d6261646765266c6f676f3d436c6f7564666c617265266c6f676f436f6c6f723d7768697465"
                  alt="Cloudflare"
                  data-canonical-src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&amp;logo=Cloudflare&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/34424849aa826b133406acdd126f455a7eb5d0369d2dac3d28ddbfcc40e054a9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4469676974616c4f6365616e2d2532333031363766662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6469676974616c4f6365616e266c6f676f436f6c6f723d7768697465"
                  alt="DigitalOcean"
                  data-canonical-src="https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&amp;logo=digitalOcean&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/a65fcdf7030d79c00f4c3d8bab84de39107f5777fca4d12f0cb64440015183fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f66697265626173652d2532333033394245352e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365"
                  alt="Firebase"
                  data-canonical-src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&amp;logo=firebase"
                />
                <img
                  src="https://camo.githubusercontent.com/d18f98a93a8ca015503870e592f96dbdf86f41048e9de1fbbbd4b2dcc7c456b1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6865726f6b752d2532333433303039382e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465"
                  alt="Heroku"
                  data-canonical-src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&amp;logo=heroku&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/19be198b22407b49a4ea491b2900b85e09d859dbb2801e3f0c165a84b66e1506/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6172696144422d3030333534353f7374796c653d666f722d7468652d6261646765266c6f676f3d6d617269616462266c6f676f436f6c6f723d7768697465"
                  alt="MariaDB"
                  data-canonical-src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&amp;logo=mariadb&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/c839570bc71901106b11b8411d9277a6a8356a9431e4a16d6c26db82caab7d62/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465"
                  alt="MongoDB"
                  data-canonical-src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/918fce8d50581bd97b7133e677a78ed2cad14f970522f219daaeb6d1c81060e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d2532333030662e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465"
                  alt="MySQL"
                  data-canonical-src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/dfb4109b571fbeb03ce2fe6eefb9eb9a3ca63e618e57002cc4b17d784baea807/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65746c6966792d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e65746c696679266c6f676f436f6c6f723d23303043374237"
                  alt="Netlify"
                  data-canonical-src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&amp;logo=netlify&amp;logoColor=#00C7B7"
                />
                <img
                  src="https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465"
                  alt="Postgres"
                  data-canonical-src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/ebd60befd49443c14417baff1700c7887f1a3c9c171612b2021a24c597e4b2ea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656469732d2532334444303033312e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265646973266c6f676f436f6c6f723d7768697465"
                  alt="Redis"
                  data-canonical-src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&amp;logo=redis&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/b310667470594171440f9b80f624787ea58555296d88af177788509b0d73a40b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73716c6974652d2532333037343035652e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465"
                  alt="SQLite"
                  data-canonical-src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&amp;logo=sqlite&amp;logoColor=white"
                />
                <img
                  src="https://camo.githubusercontent.com/22547aa007860433c23771dfd59d184297d9433adcf3082be8515a28a16cd875/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f76657263656c2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465"
                  alt="Vercel"
                  data-canonical-src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&amp;logo=vercel&amp;logoColor=white"
                />
              </p>
              <h4>💻 Software & Tools</h4>
              <p>
                If you're intereseted in the software and hardware I use on a
                daily basis,{' '}
                <Link href="/uses">
                  <a>I've created a dedicated page for that</a>
                </Link>
                .
              </p>
              <h3>📈 GitHub Stats for Nerds</h3>
              <p>
                <div className="graphContainer">
                  <img
                    alt="Joshua's Activity Graph"
                    src="https://camo.githubusercontent.com/6aa0cb16c64cccd676ffbae18ec154a89e411e2505cba7ea1b3b719cff1d1d58/68747470733a2f2f61637469766974792d67726170682e6865726f6b756170702e636f6d2f67726170683f757365726e616d653d6a6f736875616365726269746f2662675f636f6c6f723d31463232324526636f6c6f723d463844383636266c696e653d46383544374626706f696e743d46464646464626686964655f626f726465723d74727565"
                    data-canonical-src="https://activity-graph.herokuapp.com/graph?username=joshuacerbito&amp;bg_color=1F222E&amp;color=F8D866&amp;line=F85D7F&amp;point=FFFFFF&amp;hide_border=true"
                  />
                </div>
                <img
                  align="center"
                  src="https://camo.githubusercontent.com/ee67c3043bd3a05a7b2798b085bd7915e2ea536a01dad1b8d67f3dee201e0308/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6a6f736875616365726269746f266c616e67735f636f756e743d38266c61796f75743d636f6d70616374267468656d653d726561637426686964655f626f726465723d747275652662675f636f6c6f723d314632323245267469746c655f636f6c6f723d4638354437462669636f6e5f636f6c6f723d46384438363626686964653d4a7570797465722532304e6f7465626f6f6b"
                  data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=joshuacerbito&amp;langs_count=8&amp;layout=compact&amp;theme=react&amp;hide_border=true&amp;bg_color=1F222E&amp;title_color=F85D7F&amp;icon_color=F8D866&amp;hide=Jupyter%20Notebook"
                />
                <img
                  align="center"
                  src="https://camo.githubusercontent.com/8e193691716f7621483899f74c7842eff6b1af5cf853779125940ae39c9530ed/68747470733a2f2f64656e766572636f646572312d6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f3f757365726e616d653d6a6f736875616365726269746f2673686f775f69636f6e733d7472756526636f756e745f707269766174653d74727565267468656d653d726561637426686964655f626f726465723d747275652662675f636f6c6f723d314632323245267469746c655f636f6c6f723d4638354437462669636f6e5f636f6c6f723d463844383636"
                  alt="Martin's GitHub Stats"
                  data-canonical-src="https://denvercoder1-github-readme-stats.vercel.app/api/?username=joshuacerbito&amp;show_icons=true&amp;count_private=true&amp;theme=react&amp;hide_border=true&amp;bg_color=1F222E&amp;title_color=F85D7F&amp;icon_color=F8D866"
                />
              </p>
              <h3>👨🏽&zwj;🏫 Teaching &amp; Speaking</h3>
              <p>
                I'm passionate about teaching and public speaking. Being able to
                help other people reach their goals is definitely a big win in
                my book, and being able to do that in my day job is one of the
                reasons why I'm still with the same organization for 8 years
                now.
              </p>
              <p>
                Before the pandemic, I used to speak at seminars and conferences
                both public and private; The subjects I talk about range from
                Web Development, Web Design, Graphic Design, Video Production,
                and Music Production, to Philosphy &amp; Christian Apologetics.
              </p>
              <h3>🎸 Music &amp; Video</h3>
              <p>
                When I'm not coding or teaching, I play music (and usually take
                videos of me doing so). You can check out some of my music on{' '}
                <a
                  href="https://www.youtube.com/user/joshuacerbito"
                  rel="nofollow"
                >
                  Youtube
                </a>{' '}
                and on{' '}
                <a href="https://soundcloud.com/joshuacerbito" rel="nofollow">
                  SoundCloud
                </a>
                .
              </p>
              <h3>✍🏽 Blog &amp; Writing</h3>
              <p>
                I also maintain a blog over at{' '}
                <a href="https://dev.to/cerbito" rel="nofollow">
                  Dev.to
                </a>{' '}
                (for tech-related write-ups) as well as on{' '}
                <a href="https://medium.com/@cerbito" rel="nofollow">
                  Medium
                </a>{' '}
                (for other, more personal stuff). I don't write as often as I'd
                like to anymore, but hopefully I've already gotten back to my
                habit of writing by the time you see this.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Joshua Cerbito',
    },
  };
}

export default About;
