import { gsap } from 'gsap';

const debug = true;

export const setAnimation = (): void => {
  gsap.registerPlugin();
  gsap.to('#main', {
    // アニメーション内容
    backgroundImage: 'linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)',
    duration: 1,
    scrollTrigger: {
      trigger: '#sample',
      start: 'top 40%', //開始時のトリガー条件
      end: 'bottom 40%', //終了時のトリガー条件
      toggleActions: 'restart none restart none', // 複数回繰り返し
      onEnter: (_el) => {
        console.log('enter');
      }, //スクロールイン時
      onEnterBack: () => {
        console.log('enter back');
      }, //スクロールバック時
      markers: debug, // マーカー表示
    },
  });
};
