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
              '안녕하세요! 저는 젠이러우라고 합니다. 저는 훌륭한 웹 개발자가 될 도록 노력하고 있습니다. 이념과 가까한 회사에서 동료와 같이 일하면서 회사를 잘 될 수 있게 하는 것을 제 목표입니다. ',
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
            description:
              'Hello This is Chen Yi Rou! As a NON computer science graduate, I realize I am lack of computer science knowledge.However, I am willing to learn by myself through the Internet and take some related courses while I was attending school.There are a lot of thing to catch up, but I will do my best to become a qualified web developer!',
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
              '您好！我是陳以柔，木蟲誒一位優秀的前端工程師，期待和公司裡的圖示妹一起完成專案，一起成長！',
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
