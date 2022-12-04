const allProjects = [
    {
        category: 'Учебный проект',
        title: 'Waxom',
        hrefSite: 'https://juris-berkulis.github.io/GB_1204_Second_Layout/',
        technologies: 'HTML, SCSS, Figma',
        hrefGitHub: 'https://github.com/Juris-Berkulis/GB_1204_Second_Layout',
        place: 'GitHub'
    },
    {
        category: 'Собственный проект',
        title: 'Игра "Duck hunt"',
        hrefSite: 'https://juris-berkulis.github.io/Duck_hunt/',
        technologies: 'HTML, SCSS',
        hrefGitHub: 'https://github.com/Juris-Berkulis/Duck_hunt',
        place: 'GitHub'
    },
    {
        category: 'Собственный проект',
        title: 'Этот сайт-резюме',
        hrefSite: '',
        technologies: 'HTML, SCSS, JavaScript ES5/ES6, DOM API, Vue.js',
        hrefGitHub: 'https://github.com/Juris-Berkulis/Res_JB',
        place: 'GitHub'
    },
    {
        category: 'Учебный проект',
        title: 'Кухонная Фея',
        hrefSite: 'http://kitchen.fairy.by.olivier.tilda.ws/',
        technologies: 'Инструменты Tilda',
        hrefGitHub: '',
        place: 'Tilda'
    },
    {
        category: 'Учебный проект',
        title: 'Интернет-магазин с корзиной',
        hrefSite: 'https://juris-berkulis.github.io/04_JavaScript_Level_2_Site_with_only_Frontend/',
        technologies: 'HTML, SCSS, JavaScript ES6, REST API, Vue.js',
        hrefGitHub: 'https://github.com/Juris-Berkulis/04_JavaScript_Level_2_Site_with_only_Frontend',
        place: 'GitHub'
    },
    {
        category: 'Составной учебный проект',
        title: 'Интернет-магазин с корзиной',
        hrefSite: '',
        technologies: 'HTML, SCSS, JavaScript ES6, JSON API, Vue.js, предоставленный Node.js, WebPack',
        hrefGitHub: 'https://github.com/Juris-Berkulis/GB_1907_JS_L2_HW',
        place: 'GitHub'
    },
    {
        category: 'Тестовый проект',
        title: 'Набор монет 1987 год',
        hrefSite: 'https://juris-berkulis.github.io/set_of_coins/',
        technologies: 'HTML, SCSS, Figma, JavaScript ES6, jQuery',
        hrefGitHub: 'https://github.com/Juris-Berkulis/set_of_coins',
        place: 'GitHub'
    },
    {
        category: 'Тестовый проект',
        title: 'Картины эпохи Возрождения',
        hrefSite: 'https://juris-berkulis.github.io/renaissance_paintings/',
        technologies: 'Vue.js, SCSS, Figma, WebPack',
        hrefGitHub: 'https://github.com/Juris-Berkulis/renaissance_paintings',
        place: 'GitHub'
    },
    {
        category: 'Собственный проект',
        title: 'Firess Messenger',
        hrefSite: 'https://firess.surge.sh/',
        technologies: 'ReactJS, Redux, Thunk, Persist, JavaScript ES6, Firebase 8, Material-UI, SCSS, HTML, Jest',
        hrefGitHub: 'https://github.com/Juris-Berkulis/gb_211015_react',
        place: 'GitHub'
    },
    {
        category: 'Тестовый проект',
        title: 'Статья про WebSocket',
        hrefSite: 'https://juris-berkulis.github.io/article_about_WebSocket/',
        technologies: 'HTML, SCSS, JavaScript ES6',
        hrefGitHub: 'https://github.com/Juris-Berkulis/article_about_WebSocket',
        place: 'GitHub'
    },
    {
        category: 'Тестовый проект',
        title: 'Novoselie Development',
        hrefSite: 'https://juris-berkulis.github.io/novoselie_development/',
        technologies: 'HTML, SCSS, Figma, JavaScript ES6',
        hrefGitHub: 'https://github.com/Juris-Berkulis/novoselie_development',
        place: 'GitHub'
    },
    {
        category: 'Тестовый проект',
        title: 'Without Redux: SK Design. Verification',
        hrefSite: 'http://krztfj7f.beget.tech/',
        technologies: 'ReactJS, JavaScript ES6, Styled-Components',
        hrefGitHub: 'https://github.com/Juris-Berkulis/sk_design_verification_without_redux',
        place: 'GitHub'
    },
    {
        category: 'Тестовый проект',
        title: 'With Redux: SK Design. Verification',
        hrefSite: 'http://krztfjbf.beget.tech/',
        technologies: 'ReactJS, Redux, Persist, JavaScript ES6, Styled-Components',
        hrefGitHub: 'https://github.com/Juris-Berkulis/sk_design_verification',
        place: 'GitHub'
    },
    {
        category: 'Собственный проект',
        title: 'Entertask',
        hrefSite: 'https://entertask.surge.sh/',
        technologies: 'ReactJS, Redux, Thunk, Persist, JavaScript ES6, Firebase 8, CSS-IN-JS, SCSS, HTML',
        hrefGitHub: 'https://github.com/Juris-Berkulis/entertask',
        place: 'GitHub'
    },
]

const myprojectitem = {
    props: ['projectItem'],
    template:`
            <div class="my_projects__cont__projects__item">
                <div class="my_projects__cont__projects__item__top_part">
                    <p class="my_projects__cont__projects__item__top_part__category">{{ projectItem.category }}</p>
                    <p class="my_projects__cont__projects__item__top_part__site_title" v-if="projectItem.hrefSite">
                        <a class="my_projects__cont__projects__item__top_part__site_title__link" target="_blank" :href="projectItem.hrefSite">{{ projectItem.title }}</a>
                    </p>
                    <p class="my_projects__cont__projects__item__top_part__site_title__spare" v-else="projectItem.hrefSite">{{ projectItem.title }}</p>
                    <p class="my_projects__cont__projects__item__top_part__paragraph">Используемые технологии:</p>
                </div>
                <p class="my_projects__cont__projects__item__technologies">{{ projectItem.technologies }}</p>
                <p class="my_projects__cont__projects__item__GitHub">Проект на 
                    <a class="my_projects__cont__projects__item__GitHub__link" target="_blank" :href="projectItem.hrefGitHub" v-if="projectItem.hrefGitHub">{{ projectItem.place }}</a>
                    <span class="my_projects__cont__projects__item__GitHub__spare" v-else="projectItem.hrefGitHub">{{ projectItem.place }}</span>
                </p>
            </div>
            `
};

const myprojectslist = {
    data() {
        return {
            projects: []
        }
    },
    methods: {
        pushProjects() {
            this.projects = allProjects;
        }
    },
    mounted() {
        this.pushProjects();
    },
    components: {myprojectitem},
    template: `
            <div class="my_projects__cont">
                <a class="my_projects__cont__anchor anchor" name="my_projects" href="#"></a>
                <h2 class="my_projects__cont__title">Мои проекты</h2>
                <div class="title_line"></div>
                <div class="my_projects__cont__projects">
                    <myprojectitem v-for="project of projects" :projectItem="project"></myprojectitem>
                </div>
            </div>
            `
};

/** Ниже приведён пример получающегося html-кода, а вся секция свёрстана при помощи vue.js-кода в vue.js-файле "vueComponentMyProjects.js" под управлением vue.js-файла "vueMain.js":
<div class="my_projects__cont">
    <a class="my_projects__cont__anchor anchor" name="my_projects" href="#"></a>
    <h2 class="my_projects__cont__title">Мои проекты</h2>
    <div class="title_line"></div>
    <div class="my_projects__cont__projects">
        <div class="my_projects__cont__projects__item">
            <div class="my_projects__cont__projects__item__top_part">
                <p class="my_projects__cont__projects__item__top_part__category">{{ projectItem.category }}</p>
                <p class="my_projects__cont__projects__item__top_part__site_title" v-if="projectItem.hrefSite">
                    <a class="my_projects__cont__projects__item__top_part__site_title__link" target="_blank" :href="projectItem.hrefSite">{{ projectItem.title }}</a>
                </p>
                <p class="my_projects__cont__projects__item__top_part__site_title__spare" v-else="projectItem.hrefSite">{{ projectItem.title }}</p>
                <p class="my_projects__cont__projects__item__top_part__paragraph">Используемые технологии:</p>
            </div>
            <p class="my_projects__cont__projects__item__technologies">{{ projectItem.technologies }}</p>
            <p class="my_projects__cont__projects__item__GitHub">Проект на 
                <a class="my_projects__cont__projects__item__GitHub__link" target="_blank" :href="projectItem.hrefGitHub">GitHub</a>
            </p>
        </div>
    </div>
</div>
*/
