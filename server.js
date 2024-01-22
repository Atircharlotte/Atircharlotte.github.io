import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/languages', () => {
      console.log('Mirage route handler for languages is called');
      return {
        languages: [
          {
            id: 1,
            label: 'korean',
            language: '한국어',
            name: '첸이러우',
            job: '웹 개발자',
            menu1: '언어',
            menu2: '이력',
            contact: '연락처',
            aboutMe: '자기소개',
            description:
              '안녕하세요! 저는 젠이러우라고 합니다. 영어 이름 리타라고 불러도 됩니다! 저는 웹 개발에 대한 관심을 가지고 있으며 특히 사용자 화면을 디자인하는 것을 좋아합니다. 더 이쁜 화면을 볼 수 있고 편허게 쓸 수 있는 엡을 디자인하는 것은 제 목표입니다. 개발할 때에 자주 사용하는 프로그래밍 언어는 HTML, CSS, JavaScript 등이 있습니다. 사이드 프로젝트를 만들 때 보통 React프래임워크를 사용합니다. 회사에서 동료와 같이 팀워크를 통해 규모가 더 큰 프로젝트를 해 냈으면 좋겠다는 생각이 들었습니다.',
            skill: '특기사항',
            project: '마이 프로젝트',
            knowLanguage: '언어',
            detail1: '중국어',
            detail2: '영어',
            detail3: '한국어',
          },
          {
            id: 2,
            label: 'english',
            language: 'english',
            name: 'Rita Chen',
            job: 'Web Developer',
            menu1: 'Languages',
            menu2: 'Resume',
            contact: 'Contact',
            aboutMe: 'About me',
            description: `Hello! I'm Chen Yi You, but you can call me Rita. Passionate about front-end development, I specialize in crafting beautiful UI screens and enhancing user experiences. Proficient in HTML, CSS, and JavaScript, I have hands-on experience with frameworks like React. I am excited about the opportunity to contribute my skills and creativity to a dynamic development team. Looking forward to the possibility of working together and bringing impactful designs to life!`,
            skill: 'Skills',
            project: 'My Projects',
            knowLanguage: 'Languages',
            detail1: 'Mandarin',
            detail2: 'English',
            detail3: 'Korean',
          },
          {
            id: 3,
            label: 'mandarin',
            language: '中文',
            name: '陳以柔',
            job: '前端工程師',
            menu1: '語言',
            menu2: '履歷',
            contact: '聯絡資訊',
            aboutMe: '關於我',
            description:
              '你好！我是陳以柔，也可以叫我Rita。我對於前端開發很有興趣，特別是設計美麗的介面以及兼顧使用者的方便性。平常使用的技術有HTML, CSS, JavaScript等。製作side project時使用React的框架。期待能夠有機會在公司裡貢獻自己的技能，與同事合作開發更完整、規模更大的專案。在工作之餘，也會繼續研究前端開發的新技術以及培養對美學設計的敏感度。',
            skill: '技能',
            project: '我的專案',
            knowLanguage: '語言',
            detail1: '中文',
            detail2: '英語',
            detail3: '韓語',
          },
        ],
      };
    });
  },
});
