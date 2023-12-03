
/**********************************************************************************************************************************/
/* ########################################################### PROJECTS ########################################################### */
/**********************************************************************************************************************************/

// Fonction pour trier par date DESC
function sortByDate() {
    const container = document.getElementById('generateProjects');

    console.log('Tri par date');

    // Triez les données JSON par date
    fetchDataProjects().then(projects => {
        projects.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });

        // Effacez les projets actuels du conteneur
        container.innerHTML = '';

        console.log(projects);
        // Réaffichez les projets triés
        displayProjects(projects);
    });

}


// Fonction pour trier par défaut (par exemple, afficher tous les projets)
function sortByDefault() {
    console.log('Tri par défaut');
    const container = document.getElementById('generateProjects');

    fetchDataProjects().then(projects => {
        // Effacez les projets actuels du conteneur
        container.innerHTML = '';

        // Réaffichez les projets triés
        displayProjects(projects);
    });
}


// Fonction pour afficher uniquement les projets web
function sortByWebProject() {
    console.log('Afficher uniquement les projets web');
    const container = document.getElementById('generateProjects');

    fetchDataProjects().then(projects => {
        // Filtrer les projets pour ne conserver que ceux de type "web"
        const webProjects = projects.filter(project => project.type === "web");
       
        // Effacez les projets actuels du conteneur
        container.innerHTML = '';

        // Réaffichez uniquement les projets web triés
        displayProjects(webProjects);
    });
}

// Fonction pour afficher uniquement les projets game
function sortByGameProject() {
    console.log('Afficher uniquement les projets web');
    const container = document.getElementById('generateProjects');

    fetchDataProjects().then(projects => {
        // Filtrer les projets pour ne conserver que ceux de type "web"
        const webProjects = projects.filter(project => project.type === "game");
       
        // Effacez les projets actuels du conteneur
        container.innerHTML = '';

        // Réaffichez uniquement les projets web triés
        displayProjects(webProjects);
    });
}



// Gestionnaire d'événements pour les boutons de tri
// Gestionnaire d'événements pour les boutons de tri
const sortButtons = document.querySelectorAll('.sort-btn');
const container = document.getElementById('generateProjects');

function swicthSort() {

    

    sortButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirez la classe "checked" de tous les boutons
            sortButtons.forEach(btn => btn.classList.remove('checked'));
    
            // Ajoutez la classe "checked" au bouton cliqué
            button.classList.add('checked');
    
            const buttonId = button.id;
    
            switch (buttonId) {
                case 'sortByDefault':
                    sortByDefault();
                    break;
                case 'sortByDate':
                    sortByDate();
                    break;
                case 'sortByWebProject':
                    sortByWebProject();
                    break;
                case 'sortByGameProject':
                    sortByGameProject();
                    break;
                // Ajoutez d'autres cas pour d'autres boutons de tri si nécessaire
                default:
                    break;
            }
        });
    });
}

// Fonction pour détecter le bouton "checked" au chargement de la page et exécuter la fonction de tri correspondante
// function checkInitialCheckedButton() {
//     const checkedButton = document.querySelector('.sort-btn.checked');
//     if (checkedButton) {
//         const buttonId = checkedButton.id;

//         switch (buttonId) {
//             case 'sortByDefault':
//                 sortByDefault(container);
//                 break;
//             case 'sortByDate':
//                 sortByDate(container);
//                 break;
//             case 'sortByProjectType':
//                 sortByProjectType(container);
//                 break;
//             // Ajoutez d'autres cas pour d'autres boutons de tri si nécessaire
//             default:
//                 break;
//         }
//     }
// }











function fetchDataProjects() {
    return fetch('../projects.json') // Spécifiez le chemin relatif pour accéder au fichier
        .then(response => {
            if (!response.ok) {
                throw new Error('La requête a échoué');
            }
            return response.json();
        })
        .then(data => {
            return data.projects;
        });
}

function displayProjects(projects) {
    const container = document.getElementById('generateProjects');
    let alternateStructure = false; // Variable pour alterner la structure

    projects.forEach((project, index) => {
        // Créez un élément div pour le projet
        const projectElement = document.createElement('div');
        projectElement.classList.add('onePerOneProject'); // Ajoutez la classe CSS

        // Condition pour alterner la structure
        if (alternateStructure) {
            projectElement.innerHTML = `
            <div class="text_show">
                <div class="show_project">
                    <video class="video_project" autoplay loop muted preload="metadata">
                        <source src="${project.video}" type="video/mp4">
                    </video>
                </div>
                <div class="project_text">
                    <h2>${project.name}</h2>
                    <span><center>${project.date}</center></span><br>
                    <p><b>But du jeu :</b> ${project.but}</p>
                    <p><b>Description :</b> ${project.description}</p>
                    <p><b>Technologies :</b> ${project.technologies}</p>
                    <p><b>Type de projet :</b> ${project.project_type}</p>
                </div>
            </div>
            <div class="div_download_btn">
                <a class="download_btn" href="${project.link_project_page}">PLUS D'INFORMATIONS</a>
            </div>
        `;
        } else {
            projectElement.innerHTML = `
            <div class="text_show">
                <div class="project_text">
                    <h2>${project.name}</h2>
                    <span><center>${project.date}</center></span><br>
                    <p><b>But du jeu :</b> ${project.but}</p>
                    <p><b>Description :</b> ${project.description}</p>
                    <p><b>Technologies :</b> ${project.technologies}</p>
                    <p><b>Type de projet :</b> ${project.project_type}</p>
                </div>
                <div class="show_project">
                    <video class="video_project" autoplay loop muted preload="metadata">
                        <source src="${project.video}" type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="div_download_btn">
                <a class="download_btn" href="${project.link_project_page}">PLUS D'INFORMATIONS</a>
            </div>
        `;
        }

        // Inversez la valeur de alternateStructure pour le prochain projet
        alternateStructure = !alternateStructure;

        // Ajoutez le projet généré au conteneur
        container.appendChild(projectElement);
    });
}







/**********************************************************************************************************************************/
/* ########################################################### SKILLS ########################################################### */
/**********************************************************************************************************************************/

function skills_events() {
    function events() {
        let categories = document.querySelectorAll('#skills_section .box .menu .category');
        let skills_lists = document.querySelectorAll('#skills_section .box .box_content .skills_list');

        function choose(i) {
            for (let j = 0; j < categories.length; j++) {
                categories[j].style.backgroundColor = 'rgba(0, 0, 0, 0)';
                categories[j].style.cursor = 'pointer';
            }

            categories[i].style.backgroundColor = 'white';
            categories[i].style.cursor = 'default';

            for (let j = 0; j < skills_lists.length; j++)
                skills_lists[j].style.display = 'none';

            skills_lists[i].style.display = 'grid';
        }

        for (let i = 0; i < categories.length; i++) {
            categories[i].addEventListener('click', (e) => {
                choose(i);
            });
        }

        choose(0);
    }

    function generate_skills(my_data) {
        let box = document.querySelector('#skills_section .box');
        box.innerHTML = '';

        if (window.innerWidth > 930) {
            let menu = '';
            let box_content = '';

            for (let category of my_data.skills_categories) {
                menu += `<div class="category">${category.name}</div>`;

                let skills = '';

                for (let skill of category.skills) {
                    skills += `<a class="skill" href="${skill.link}" target="_blank">
						<img src="${skill.logo}">
						<span>${skill.name}</span>
					</a>`;
                }

                box_content += `<div class="skills_list">${skills}</div>`;
            }

            box.innerHTML = `<div class="menu">${menu}</div><div class="box_content">${box_content}</div>`;

            events();
        }

        else {
            for (let category of my_data.skills_categories) {
                box.innerHTML += `<div class="category_title">${category.name}</div>`;

                let skills = '';

                for (let skill of category.skills) {
                    skills += `<a class="skill" href="${skill.link}" target="_blank">
						<img src="${skill.logo}">
						<span>${skill.name}</span>
					</a>`;
                }

                box.innerHTML += `<div class="box_content"><div class="skills_list">${skills}</div></div>`;
            }
        }
    }

    let prev_width = window.innerWidth;
    read_json('./skills.json', generate_skills);

    window.addEventListener('resize', () => {
        if ((prev_width >= 930 && window.innerWidth <= 930) || (prev_width <= 930 && window.innerWidth >= 930)) {
            read_json('./skills.json', generate_skills);
            prev_width = window.innerWidth;
        }
    });
}

function read_json(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onreadystatechange = function (data) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let my_data = JSON.parse(data.currentTarget.response);
                callback(my_data);
            }

            else {
                console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
                console.log('Error pJS - File config not found');
            }
        }
    };

    xhr.send();
}



window.onload = function () {
    document.documentElement.scrollLeft = 0;
    console.log('window.onload');
    skills_events();
    
    swicthSort();
    //checkInitialCheckedButton();

    // Chargez les données JSON et affichez les projets
    fetchDataProjects().then(projects => {
        displayProjects(projects);
    });
}


