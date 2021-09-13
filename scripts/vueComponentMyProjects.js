const allProjects = [
    {
        category: 'Учебный проект',
        title: 'New Automation',
        hrefSite: 'https://juris-berkulis.github.io/GB_0902/',
        technologies: 'HTML, SCSS, Figma',
        hrefGitHub: 'https://juris-berkulis.github.io/GB_0902/',
        place: 'GitHub'
    },
    {
        category: 'Учебный проект',
        title: 'Simple',
        hrefSite: 'https://juris-berkulis.github.io/GB_1204/',
        technologies: 'HTML, SCSS, Figma',
        hrefGitHub: 'https://github.com/Juris-Berkulis/GB_1204',
        place: 'GitHub'
    },
    {
        category: 'Учебный проект',
        title: 'Waxom',
        hrefSite: 'https://juris-berkulis.github.io/GB_1204_Second_Layout/',
        technologies: 'HTML, SCSS, Figma',
        hrefGitHub: 'https://github.com/Juris-Berkulis/GB_1204_Second_Layout',
        place: 'GitHub'
    },
    {
        category: 'Полностью собственная игра',
        title: 'Duck hunt',
        hrefSite: 'https://juris-berkulis.github.io/Duck_hunt/',
        technologies: 'HTML, SCSS',
        hrefGitHub: 'https://github.com/Juris-Berkulis/Duck_hunt',
        place: 'GitHub'
    },
    {
        category: 'Тренировочный проект',
        title: 'Burger menu',
        hrefSite: 'https://juris-berkulis.github.io/Burger_menu/by_css_with_transition.html',
        technologies: 'HTML, SCSS, JavaScript ES6, DOM',
        hrefGitHub: 'https://github.com/Juris-Berkulis/Burger_menu',
        place: 'GitHub'
    },
    {
        category: 'Учебный проект',
        title: 'Home Work. JS - Level 1',
        hrefSite: 'https://juris-berkulis.github.io/GB_0106_JS_L1_HW/',
        technologies: 'JavaScript ES5, DOM',
        hrefGitHub: 'https://github.com/Juris-Berkulis/GB_0106_JS_L1_HW',
        place: 'GitHub'
    },
    {
        category: 'Полностью собственный сайт',
        title: 'Этот сайт-резюме',
        hrefSite: '',
        technologies: 'HTML, SCSS, JavaScript ES5/ES6, DOM, Vue.js',
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
        technologies: 'HTML, SCSS, JavaScript ES6, внешний API, Vue.js',
        hrefGitHub: 'https://github.com/Juris-Berkulis/04_JavaScript_Level_2_Site_with_only_Frontend',
        place: 'GitHub'
    },
    {
        category: 'Составной учебный проект',
        title: 'Интернет-магазин с корзиной',
        hrefSite: '',
        technologies: 'HTML, SCSS, JavaScript ES6, внешний API, API JSON, Vue.js, предоставленный Node.js, WebPack',
        hrefGitHub: 'https://github.com/Juris-Berkulis/GB_1907_JS_L2_HW',
        place: 'GitHub'
    }
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
                <div class="career__line"></div>
                <div class="my_projects__cont__projects">
                    <myprojectitem v-for="project of projects" :projectItem="project"></myprojectitem>
                </div>
            </div>
            `
};
