$(document).ready(() => {
    render_projects('all');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/TripleBlocks.png',
            link: 'https://github.com/python-discord/game-jam-2020/tree/master/Finalists/gamer_gang',
            title: 'Triple Blocks',
            technologies: ['Lead Design'],
            description: "A simple platformer puzzle game where you control 3 blocks and must navigate them all towards the exit flag.",
            categories: ['featured']
        },
        {
            image: 'assets/images/Armageddon.png',
            link: 'https://redbluebird.itch.io/armageddon-v2',
            title: 'Armageddon',
            technologies: ['Lead Design', 'Design Document'],
            description: "A side scrolling 2d bullet hell where defeating an enemy causes enemy bullets to disappear.<\n> <a href="https://docs.google.com/document/d/1If2QAyn5Nk-3rgJq18c1JjRCY_Tn6W5dd2Yudgf8JTQ/edit?usp=sharing">Design Document Link</a>",
            categories: ['featured']
        },
        {
            image: 'assets/images/SSS.png',
            link: 'https://redbluebird.itch.io/sticky-stacky-blocks',
            title: 'Sticky Stacky Blocks',
            technologies: ['Lead Design'],
            description: "A puzzle game where you control a tetris block and must rotate it through obstacles to reach the finish.",
            categories: ['featured']
        },
        {
            image: 'assets/images/Climatic.png',
            link: 'https://redbluebird.itch.io/climatic',
            title: 'Climatic',
            technologies: [],
            description: "A management game where you must keep your island's population alive in the face of natural disasters and global warming.",
            categories: []
        },
        {
            image: 'assets/images/SS.png',
            link: 'https://redbluebird.itch.io/square-shuffle',
            title: 'Square Shuffle',
            technologies: [],
            description: "A simple puzzle game where you move around blocks and avoid enemies to reach the finish.",
            categories: []
        },
        {
            image: 'assets/images/Phishing.png',
            link: 'https://redbluebird.itch.io/phishing-trip',
            title: 'Phishing Trip',
            technologies: [],
            description: "A \"Papers Please\" knockoff where you check whether the emails you receive are legitimate.",
            categories: []
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
