'use stricts'

const data = [
    {
        title: 'Burger App',
        img: './assets/img/burger-app.jpg',
        tag: 'frontend',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/WebCV',
        link: 'https://vaunshop.com',
        date: '',
        desc: 'Use ReactJs to build a custom burger order app',
        techs: ['HTML', 'CSS', 'Javascript'],
    },
    {
        title: 'WebCV',
        img: './assets/img/webcv.jpg',
        tag: 'frontend',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/WebCV',
        link: 'https://phamhoangtuanvu.com',
        date: '',
        desc: 'Use HTML, CSS and JS to build a website introduce myself',
        techs: ['HTML', 'CSS', 'Javascript'],
    },
    {
        title: 'Weather App',
        img: './assets/img/weatherapp.jpg',
        tag: 'frontend',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/Weather-App',
        link: 'https://weather.phamhoangtuanvu.com',
        date: '',
        desc: 'Use Javascript to call API and display weather data ',
        techs: ['HTML', 'CSS', 'Javascript'],
    },
    {
        title: 'Music Player',
        img: './assets/img/musicplayer.jpg',
        tag: 'frontend',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/Music-Player',
        link: 'https://music.phamhoangtuanvu.com',
        date: '',
        desc: '',
        techs: ['HTML', 'CSS', 'Javascript'],
    },
    {
        title: 'TodoList',
        img: './assets/img/todolist.jpg',
        tag: 'reactjs',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/TodoList',
        link: 'https://todolist.phamhoangtuanvu.com',
        date: '',
        desc: 'Use Javascript to build Todo App based on Redux workflow ',
        techs: ['HTML', 'CSS', 'Javascript'],
    },
    {
        title: 'Check Price',
        img: './assets/img/checkprice.jpg',
        tag: 'python',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/check-price',
        link: '',
        date: '',
        desc: 'Crawl data from over 15 website, use Django to build a system to check product price on sale',
        techs: ['HTML', 'CSS', 'Python', 'Django', 'Scrapy'],
    },
    {
        title: 'Recommender System',
        img: './assets/img/recommender-system.jpg',
        tag: 'python',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/recommender-system-using-pyspark-without-mllib',
        link: '',
        date: '',
        desc: 'Recommender System (Neighborhood-Base Collaborator Filtering) using Pyspark without MLLib',
        techs: ['Python', 'Pyspark'],
    },
    {
        title: 'Page Rank',
        img: './assets/img/pagerank.jpg',
        tag: 'python',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/pagerank-using-pyspark-from-scratch',
        link: '',
        date: '',
        desc: 'Google PageRank algorithm with Pyspark ',
        techs: ['Python', 'Pyspark'],
    },
    {
        title: 'Text Detection and Recognization using EAST',
        img: './assets/img/east.jpg',
        tag: 'python',
        content: '',
        author: 'Tuan Vu',
        github: 'https://github.com/phamhoangtuanvu/text-detection-and-recognization-using-EAST',
        link: '',
        date: '',
        desc: 'Use EAST Model to detect text boundering box, recognize text with Tesseract OCR',
        techs: ['Python', 'OpenCV'],
    },
    {
        title: 'AK Swiss',
        img: './assets/img/akswiss.jpg',
        tag: 'wordpress',
        content: '',
        author: 'Tuan Vu',
        github: '',
        link: 'ak-swiss.com',
        date: '',
        desc: '',
        techs: ['Wordpress'],
    },
    {
        title: 'Tianchao',
        img: './assets/img/ngoaithatdainam.jpg',
        tag: 'wordpress',
        content: '',
        author: 'Tuan Vu',
        github: '',
        link: 'ngoaithatdainam.com',
        date: '',
        desc: '',
        techs: ['Wordpress'],
    },
    {
        title: 'Dang Hang Shop',
        img: './assets/img/danghangshop.jpg',
        tag: 'wordpress',
        content: '',
        author: 'Tuan Vu',
        github: '',
        link: 'danghangshop.com',
        date: '',
        desc: '',
        techs: ['Wordpress'],
    },
    {
        title: 'TIN Holdings',
        img: './assets/img/tinholding-design-1.jpg',
        tag: 'design',
        content: '',
        author: 'Tuan Vu',
        github: '',
        link: '',
        date: '',
        desc: '',
        techs: ['Photoshop', 'Illustrator'],
    },
    {
        title: 'AK Swiss',
        img: './assets/img/akswiss-design-1.jpg',
        tag: 'design',
        content: '',
        author: 'Tuan Vu',
        github: '',
        link: '',
        date: '',
        desc: '',
        techs: ['Photoshop', 'Illustrator'],
    },
    {
        title: 'Tianchao',
        img: './assets/img/tianchao-design-1.jpg',
        tag: 'design',
        content: '',
        author: 'Tuan Vu',
        github: '',
        link: '',
        date: '',
        desc: '',
        techs: ['Photoshop', 'Illustrator'],
    },
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuList = $$('.menu li')
const arrow = $('.nav .arrow')


let menuItemActive = $('.menu li.active')

const app = {
    currentIndex: '0',
    currentPage: $(`.content[data-index="0"]`),

    loadContent: function () {
        this.currentPage.style.display = 'none'
        this.currentPage = $(`.content[data-index="${this.currentIndex}"]`)
        this.currentPage.style.display = 'flex'
    },

    updateMenu: function (menuItem) {
        menuItemActive.classList.remove('active')
        menuItemActive = menuItem
        menuItemActive.classList.add('active')
    },

    toLeft: function () {
        --this.currentIndex
        if (this.currentIndex < 0) {
            this.currentIndex = menuList.length - 1
        }
    },

    toRight: function () {
        ++_this.currentIndex
        if (_this.currentIndex >= menuList.length) {
            _this.currentIndex = 0
        }
    },

    handleEvent() {
        _this = this
        // Xử lý khi bấm menu
        menuList.forEach((element, index) => {
            element.onclick = function (e) {
                const menuItem = e.target.closest('li:not(li.active)')
                if (menuItem) {
                    _this.currentIndex = index
                    _this.updateMenu(menuItem)
                    _this.loadContent()
                }
            }
        })

        // Xử lý khi bấm arrow
        arrow.onclick = function (e) {
            const left = e.target.closest('li#left')
            const right = e.target.closest('li#right')

            if (left) {
                _this.toLeft()
            }

            if (right) {
                _this.toRight()
            }

            let menuItem = $(`.menu li[data-index="${_this.currentIndex}"]`)
            _this.updateMenu(menuItem)
            _this.loadContent()
        }

        window.onkeyup = function (e) {
            switch (e.keyCode) {
                case 37:
                case 38:
                    _this.toLeft()
                    _this.updateMenu($(`.menu li[data-index="${_this.currentIndex}"]`))
                    _this.loadContent()
                    break;

                case 39:
                case 40:
                    _this.toRight()
                    _this.updateMenu($(`.menu li[data-index="${_this.currentIndex}"]`))
                    _this.loadContent()
                    break;
                default:
                    break;
            }
        }

    },

    start() {
        this.handleEvent()
    }
}

app.start()


//Menu toggle
const header = $('.header')
const menuToggle = $('#main .menu-toggle')

menuToggle.onclick = function () {
    if (menuToggle.classList.contains('open')) {
        // Đóng menu
        menuToggle.classList.remove('open')
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'
        header.style.animation = 'closeMenuToggle .5s forwards'
    } else {
        // Mở menu
        menuToggle.classList.add('open')
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        header.style.animation = 'openMenuToggle .5s forwards'
    }

}


const portfolioList = $('#portfolio .portfolio-list')
const menuPortfolio = $$('#portfolio .filter li')
const portfolioDetail = $('.portfolio-detail')

portfolioList.innerHTML = data.map((portfolio) => {
    return `        
        <div class="portfolio-item" data-tag=${portfolio.tag} key=${portfolio.id}>
            <div class="img-cover">
                <img src=${portfolio.img} alt="" />
            </div>
            <div class="title">
                ${portfolio.title}
            </div>
        </div>`
}).join('')

const portfolioItems = $$('#portfolio .portfolio-item')

const portfolioApp = {
    currentTag: 'all',
    portfolioData: [],
    filterPortfolio() {
        this.portfolioData.forEach((value, index) => {
            if (value.tag == this.currentTag) {

            }
        })
    },

    handleEvent() {
        menuPortfolio.forEach((item, index) => {
            item.onclick = function (e) {
                let portfolioActive = $('#portfolio .filter li.active')
                let liTag = e.target.closest('li')

                if (liTag) {
                    liTag.classList.add('active')
                    portfolioActive.classList.remove('active')
                    portfolioActive = liTag
                }
                const tag = liTag.getAttribute('data-tag')
                if (tag) {
                    portfolioItems.forEach((value, index) => {
                        if (tag == value.getAttribute('data-tag') || tag == 'all') {
                            value.style.animation = 'zoomIn 0.6s forwards'
                            // value.style.display = 'inline-block'
                        } else {
                            // value.style.displau = 'none'
                            value.style.animation = 'shrinkOut 0.5s forwards, removeElement .0s forwards'
                        }
                    })
                }
            }
        }),

            portfolioItems.forEach((portfolio, index) => {
                portfolio.onclick = () => {
                    const { title, content, author, github, link, date, desc, img, techs, tag } = data[index]
                    portfolioDetail.innerHTML = `
                <div class="close-icon"><i class="fa-solid fa-xmark"></i></div>
                <h1 class="title">${title}</h1>
                <div class="flex-box">
                    <div class="content">
                        <img src="${img}"
                            alt="">
                        <p>${content}</p>
                    </div>
                    <div class="desc">
                        <h3>Description</h3>
                        <p class="author">Author: ${author}</p>
                        ${github && `<p class="link">Github: <a target="_blank" href="${github}">Click here</a></p>`} 
                        ${link && `<p class="link">Link: <a target="_blank" href="${link}">Click here</a></p>`} 
                        <p class="tag">Tag: ${tag}</p>
                        <p class="short-desc">Desc: ${desc}</p>
                        <h3>Libraries, Languages</h3>
                        <div class="tag">
                            <ul>
                                ${techs.map(tech => `<li>${tech}</li>`).join('')}
                            </ul >
                        </div >
                    </div >
                </div >
            `

                    portfolioDetail.style.animation = 'slideInRight linear 0.5s forwards'
                }
            }),

            portfolioDetail.onclick = (e) => {
                if (e.target.closest('.close-icon')) {
                    portfolioDetail.style.animation = 'shrinkOut 0.5s forwards'
                }
            }
    },

    start() {
        this.handleEvent()
    }
}

portfolioApp.start()


