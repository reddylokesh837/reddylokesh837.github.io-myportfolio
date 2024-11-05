document.addEventListener('DOMContentLoaded', function() {
    // Function to load the index content
    function loadIndexContent() {
        const indexContent = `
        <div class="row sticky-parent" >
          <aside class="col-12 col-md-12 col-lg-2">
            <div class="sidebar box sticky-column">
              <ul class="nav">
                <li class="nav__item">
                  <a href="#" id="index-link" data-page="index" aria-current="page" class="router-link-exact-active router-link-active"><i
                      class="fa fa-user-o fa-3x"></i> About
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="resume-link" data-page="resume" data-page="resume" class=""><i class="fa fa-file-text-o fa-3x"></i> Resume
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="portfolio-link" data-page="portfolio" class=""><i class="fa fa-cube fa-3x"></i> Portfolio
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="blog-link" data-page="blog" class=""><i class="fa fa-book-open fa-3x"></i> Blog
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="contact-link" data-page="contact" class=""><i class="fa fa-address-book fa-3x"></i> Contact
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <!-- About Body content -->
          <div class="col-12 col-md-12 col-lg-10">
            <div class="box box-content">
              <div>
                <div class="pb-0 pb-sm-2">
                  <h1 class="title title--h1 first-title title__separate">
                    About Me
                  </h1>
                  <span class="about-me" style="white-space: pre-wrap;"><div class="about-section">
    I’m <strong class="highlighted-text">Lokesh Reddy Vakada</strong>, a <em class="emphasis-text">Mechanical Engineer graduate</em> with a passion for <strong class="highlighted-text">DevOps</strong>, <strong class="highlighted-text">Cloud Infrastructure</strong>, <strong class="highlighted-text">Python Development</strong>, and <strong class="highlighted-text">Full-Stack Web Development</strong>. My journey from engineering to tech has honed my precision thinking and innovative approach.
    I specialize in <strong class="highlighted-text">end-to-end DevOps automation</strong> and managing <strong class="highlighted-text">cloud infrastructure</strong> across <strong class="highlighted-text">AWS</strong>, <strong class="highlighted-text">Azure</strong>, and <strong class="highlighted-text">GCP</strong>. From optimizing <em class="emphasis-text">CI/CD pipelines</em> to using <strong class="highlighted-text">Kubernetes</strong> and <strong class="highlighted-text">Docker</strong> for <em class="emphasis-text">container orchestration</em>, I ensure smooth deployments. My expertise in <strong class="highlighted-text">IaC</strong> tools like <strong class="highlighted-text">Terraform</strong> and <strong class="highlighted-text">Ansible</strong> allows me to automate cloud environments efficiently. I also focus on <em class="emphasis-text">cloud migration</em>, <em class="emphasis-text">monitoring</em> with <strong class="highlighted-text">Prometheus</strong> and <strong class="highlighted-text">Grafana</strong>, and <em class="emphasis-text">security automation</em>.
    My skills in <strong class="highlighted-text">Python</strong> enable me to build scalable backends using <strong class="highlighted-text">Django</strong>, <strong class="highlighted-text">Flask</strong>, and <strong class="highlighted-text">FastAPI</strong>. I develop robust <em class="emphasis-text">APIs</em> (REST, GraphQL) and automate processes while leveraging data tools like <strong class="highlighted-text">Pandas</strong> and <strong class="highlighted-text">Matplotlib</strong>. My experience includes deploying <em class="emphasis-text">microservices</em> and integrating <strong class="highlighted-text">machine learning</strong> frameworks.
    As a <strong class="highlighted-text">full-stack developer</strong>, I create dynamic applications with <strong class="highlighted-text">MERN</strong>, <strong class="highlighted-text">MEAN</strong>, and <strong class="highlighted-text">Django + React</strong>. My expertise spans <em class="emphasis-text">frontend</em> tech like <strong class="highlighted-text">React</strong>, <strong class="highlighted-text">Angular</strong>, and <strong class="highlighted-text">Vue.js</strong>, alongside <em class="emphasis-text">backend</em> development with <strong class="highlighted-text">Node.js</strong> and <strong class="highlighted-text">Django</strong>. I handle <em class="emphasis-text">database design</em>, <em class="emphasis-text">UI/UX</em>, <em class="emphasis-text">PWAs</em>, and <em class="emphasis-text">API integrations</em>.
    I also bring creativity with skills in <strong class="highlighted-text">graphic design</strong> and <strong class="highlighted-text">Photoshop</strong>, crafting <em class="emphasis-text">digital assets</em>, <em class="emphasis-text">logos</em>, and <em class="emphasis-text">branding materials</em> using <strong class="highlighted-text">Adobe Photoshop</strong> and <strong class="highlighted-text">Illustrator</strong>.
    I streamline DevOps with <em class="emphasis-text">CI/CD automation</em> and <em class="emphasis-text">cloud infrastructure management</em>, using tools like <strong class="highlighted-text">Terraform</strong> and <strong class="highlighted-text">Jenkins</strong>. My automation services enhance productivity, ensuring optimal results. Beyond development, I offer <strong class="highlighted-text">consulting</strong> on <em class="emphasis-text">DevOps transformation</em>, <em class="emphasis-text">cloud strategies</em>, and <em class="emphasis-text">Agile practices</em> to help organizations achieve operational excellence.
</div>
</span>
                </div>
                <div class="mt-4">
                  <h2 class="title title--h3">What I'm Doing</h2>
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="case-item">
                        <img
                          src="img/devops.png"
                          alt="devops_sre" width="40" height="40" />
                        <div class="mt-3">
                          <h3 class="title title--h4">DevOps</h3>
                          <p class="case-item__caption">
                            I enjoy to improve the speed and quality of
                            delivery, automate and achieve CICD
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="case-item">
                        <img
                          src="img/cloud (1).png"
                          alt="cloud_computing" width="40" height="40" />
                        <div class="mt-3">
                          <h3 class="title title--h4">Cloud Engineer</h3>
                          <p class="case-item__caption">
                            I enjoy design, secure and maintenance of an
                            organization’s cloud-based infrastructure and
                            application
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="case-item">
                        <img
                          src="img/sre.png"
                          alt="sre" width="40" height="40" />
                        <div class="mt-3">
                          <h3 class="title title--h4">SRE</h3>
                          <p class="case-item__caption">
                            I curious the processes and tools that ensure the
                            scalability, reliability and availability of
                            software systems
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="case-item">
                        <img
                          src="img/coding.png"
                          alt="web_dev" width="40" height="40" />
                        <div class="mt-3">
                          <h3 class="title title--h4">
                            Software Development
                          </h3>
                          <p class="case-item__caption">
                            I enjoy learning software development either for
                            personal or specific purposes
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="case-item">
                        <img src="img/graphic-design.png" alt="web_dev" width="40" height="40" />
                        <div class="mt-3">
                          <h3 class="title title--h4">
                            Graphic Design & Digital Arts
                          </h3>
                          <p class="case-item__caption">
                            I love to elevate Creativity through Crafting
                            Digital Masterpieces with Precision and Passion
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="case-item">
                        <img src="img/edit.png" alt="web_dev" width="40" height="40" />
                        <div class="mt-3">
                          <h3 class="title title--h4">
                            Photography, Editing & Design Manipulations
                          </h3>
                          <p class="case-item__caption">
                            I love transforming pixels into masterpieces to
                            unleash creativity through Photography, Editing,
                            Designing, and Photo Manipulations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <h2 class="title title--h3">Clients</h2>
                  <div class="swiper-container js-carousel-clients">
                    <div class="swiper-wrapper">
                      <div>
                        <img width="200" height="93"
                          src=""
                          alt="transletin" />
                      </div>
                      <div>
                        <img width="200" height="93"
                          src=""
                          alt="buangdisini" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer class="footer">
              <span><em class="font-icon icon-check-circle" style="color: green"></em>
                All rights reserved.
              </span>
              .
              <a target="_blank" rel="noopener" href="" title="Status">
                Status
              </a>
              .
              <a target="_blank" rel="noopener" href="" title="Uptime">
                Uptime
              </a>
            </footer>
          </div>
        </div>
        `;
        document.getElementById('content-container').innerHTML = indexContent;
        attachEventListeners(); // Reattach event listeners
    }

    // Function to load the resume content
    function loadResumeContent() {
        const resumeContent = `
        <div class="row sticky-parent" >
          <aside class="col-12 col-md-12 col-lg-2">
            <div class="sidebar box sticky-column">
              <ul class="nav">
                <li class="nav__item">
                  <a href="#" id="index-link" data-page="index" class=""><i class="fa fa-user-o fa-3x"></i> About
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="resume-link" data-page="resume" class="router-link-exact-active router-link-active" aria-current="page"><i
                      class="fa fa-file-text-o fa-3x"></i> Resume
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="portfolio-link" data-page="portfolio" class=""><i class="fa fa-cube fa-3x"></i> Portfolio
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="blog-link" data-page="blog" class=""><i class="fa fa-book-open fa-3x"></i> Blog
                  </a>
                </li>
                <li class="nav__item">
                  <a href="#" id="contact-link" data-page="contact" class=""><i class="fa fa-address-book fa-3x"></i> Contact
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <div class="col-12 col-md-12 col-lg-10">
            <div class="box box-content">
              <div>
                <div class="pb-0 pb-sm-2">
                  <h1 class="title title--h1 first-title title__separate">
                    Resume
                  </h1>
                </div>
                <div class="row">
                  <div class="col">
                    <h2 class="title title--h3">
                      <img src="icons/portfolio.png" alt="experience" class="title-icon" />
                      Experience
                    </h2>
                    <div class="timeline">
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Lion Parcel <small> as </small> Site Reliability
                          Engineer (SRE)
                        </h5>
                        <span class="timeline__period">
                          Jan 2021 - Present
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">- Provide technical support and assistance to
                            developers, addressing their problems and needs,
                            ensuring smooth development processes. - Utilize
                            JIRA for project management and issue tracking,
                            ensuring efficient collaboration and task
                            management. - Develop and maintain an automated
                            CI/CD pipeline using Jenkins, enabling seamless
                            code deployment for every release. - Create and
                            maintain deployment processes for mobile apps on
                            Android and iOS platforms, ensuring efficient and
                            reliable distribution. - Provision infrastructure,
                            servers, and services using Terraform, enabling
                            scalable and consistent deployment and management.
                            - Set up and monitoring, tracing, and logging
                            tools such as ELK, Grafana, and Datadog, ensuring
                            comprehensive visibility into system performance
                            and issues. - Implement monitoring alerts for
                            services, databases, and logs, reducing the
                            occurrence of errors in production environments. -
                            Manage and monitor a Kubernetes-based container
                            cluster, ensuring high availability with a 99.9%
                            uptime. - Actively manage, improve, and monitor
                            cloud infrastructure services on AWS and GCP,
                            including backups, patches, and scaling. -
                            Administer GitHub repositories and permissions,
                            including branching and tagging, ensuring
                            efficient version control and collaboration. -
                            Develop and maintain scripts to automate tasks,
                            improving efficiency and reducing manual effort. -
                            Integrate automation testing into the CI/CD
                            pipeline, ensuring the quality and reliability of
                            software releases. - Scale Jenkins agents in
                            Kubernetes to increase the number of executors,
                            optimizing build and deployment processes for Go
                            and Node.js projects. - Implement a single
                            dashboard monitoring solution using Prometheus,
                            Thanos, and Grafana, providing a centralized view
                            of system metrics. - Successfully involved in the
                            migration from GCP to AWS, minimizing downtime and
                            ensuring a smooth transition. - Import existing
                            infrastructure to Terraform and implementing
                            GitOps for managing and automating IaC. <br /></span>
                          Jakarta, Indonesia
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          BuangDisini <small> as </small> DevOps / Cloud
                          Engineer
                        </h5>
                        <span class="timeline__period">
                          May 2022 - Nov 2022
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">- Provisioned and managed infrastructure using
                            Terraform and Ansible, ensuring efficient and
                            reliable deployment of resources. - Created CI/CD
                            automation for code deployment using Github
                            Actions, streamlining the development and release
                            process. - Implemented container management and
                            monitoring using Portainer, enhancing visibility
                            and control over containerized applications. -
                            Integrated various tools and systems, improving
                            collaboration and efficiency across the
                            development and operations teams. - Conducted
                            troubleshooting and root cause analysis, swiftly
                            identifying and resolving issues to minimize
                            downtime and optimize system performance. -
                            Maintained clear and concise documentation of
                            infrastructure configurations and processes,
                            facilitating ease of understanding and knowledge
                            transfer. <br /></span>
                          Remote
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Transletin <small> as </small> Full-stack Developer
                        </h5>
                        <span class="timeline__period">
                          May 2020 - Jun 2020
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">- Web-based application development using Laravel
                            to help the translation service business process -
                            Redesign website interface with custom Content
                            Management System. <br /></span>
                          Remote
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Laboratory Learning FILKOM UB <small> as </small>
                          Practicum Assistant
                        </h5>
                        <span class="timeline__period">
                          Sep 2017 - May 2019
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">- Coordinate with lecturers and laboratory staff
                            regarding the details of the Computer Network
                            course. - Helping to organize practical classroom
                            teaching effectively. <br /></span>
                          Malang, Indonesia
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          NOC FIA UB <small> as </small> Network Engineer
                          Intern
                        </h5>
                        <span class="timeline__period">
                          Jul 2018 - Sep 2018
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">- Working on project to design network with a
                            high level availability based on MikroTik <br /></span>
                          Malang, Indonesia
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-sm">
                    <h2 class="title title--h3">
                      <img src="icons/graduation.png" alt="education" class="title-icon" />
                      Education
                    </h2>
                    <div class="timeline">
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          University of Brawijaya
                        </h5>
                        <span class="timeline__period">
                          Sep 2015 - Feb 2020
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">Informatics Engineering focused on Network-Based
                            Computing <br /></span>
                          Malang, Indonesia
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          SMA Negeri 1 Banjarbaru
                        </h5>
                        <span class="timeline__period">
                          Aug 2012 - Jun 2015
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">Majored in Science <br /></span>
                          Banjarbaru, Indonesia
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          SMP Negeri 1 Kuranji
                        </h5>
                        <span class="timeline__period">
                          Jul 2009 - Jun 2012
                        </span>
                        <p class="timeline__description">
                          <!---->
                          Tanah Bumbu, Indonesia
                        </p>
                      </article>
                    </div>
                  </div>
                  <div class="col-sm">
                    <h2 class="title title--h3">
                      <img src="icons/online-education.png" alt="education" class="title-icon" />
                      Nonformal Education
                    </h2>
                    <div class="timeline">
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Dicoding - AWS
                        </h5>
                        <span class="timeline__period">
                          Jul 2021 - Jul 2021 ( 40 Hours)
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">Architecting on AWS (Membangun Arsitektur Cloud
                            di AWS) | Cloud and Back-End Developer Scholarship
                            Program <br /></span>
                          Online
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Dicoding - IBM
                        </h5>
                        <span class="timeline__period">
                          May 2021 - May 2021 ( 35 Hours)
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">DevOps Praktis dengan IBM Cloud (Practical DevOps
                            with IBM Cloud) <br /></span>
                          Online
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Dicoding - AWS
                        </h5>
                        <span class="timeline__period">
                          Mar 2021 - Mar 2021 ( 13 Hours)
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">Cloud Practitioner Essentials (Belajar Dasar AWS
                            Cloud) | Knowledge refresher on the basics of AWS
                            <br /></span>
                          Online
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Digitalent Scholarship 2020 by Kominfo
                        </h5>
                        <span class="timeline__period">
                          May 2020 - Jul 2020 ( 189 Hours)
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">CCNA Cybersecurity Operations <br /></span>
                          Online
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Dicoding - Azure
                        </h5>
                        <span class="timeline__period">
                          Feb 2020 - Feb 2020 ( 40 Hours)
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">Belajar Dasar-Dasar Azure Cloud | Preparation for
                            AZ-900 certification <br /></span>
                          Online
                        </p>
                      </article>
                      <article class="timeline__item">
                        <h5 class="title title--h5 timeline__title">
                          Digitalent Scholarship 2019 by Kominfo
                        </h5>
                        <span class="timeline__period">
                          Jul 2019 - Aug 2019 ( 144 Hours)
                        </span>
                        <p class="timeline__description">
                          <span style="white-space: pre-wrap">AWS Cloud Computing Training <br /></span>
                          Malang, Indonesia
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-12">
                    <h2 class="title title--h3">Skills</h2>
                    <div class="box box__border">
                      <div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Google Cloud Platform </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Google Cloud Platform </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Amazon Web Service </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Amazon Web Service </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Microsoft Azure </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Microsoft Azure </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Linux Environment </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Linux Environment </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Infrastructure as Code </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Infrastructure as Code </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Automation and scripting </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Automation and scripting </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> CICD </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text"><span> CICD </span></div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Git </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text"><span> Git </span></div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Full Stack Web Development </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Full Stack Web Development </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Adobe Creative Suite </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Adobe Creative Suite </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Graphic Design & Digital Arts </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Graphic Design & Digital Arts </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Photography and Editing </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Photography and Editing </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-12">
                    <h2 class="title title--h3">Code Skills</h2>
                    <div class="box box__border">
                      <div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Python Development & Scripting </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Python Development & Scripting </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Java </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text"><span> Java </span></div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> HTML, CSS & JavaScript </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> HTML, CSS & JavaScript </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Docker </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Docker </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Kubernetes </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Kubernetes </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Jenkins </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Jenkins </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Terraform </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Terraform </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Helm charts </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Helm charts </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Kong API Gateway </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Kong API Gateway </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Nginx </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Nginx </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Prometheus </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Prometheus </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Grafana </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Grafana </span>
                          </div>
                        </div>
                        <div class="progress">
                          <div role="progressbar" aria-valuemin="0" aria-valuemax="100" class="progress-bar"
                            style="width: 66%; z-index: 2">
                            <div class="progress-text">
                              <span> Elastic Stack </span><span> Intermediate </span>
                            </div>
                          </div>
                          <div class="progress-text">
                            <span> Elastic Stack </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer class="footer">
              <span><em class="font-icon icon-check-circle" style="color: green"></em>
                All rights reserved.
              </span>
              .
              <a target="_blank" rel="noopener" href="" title="Status">
                Status
              </a>
              .
              <a target="_blank" rel="noopener" href="" title="Uptime">
                Uptime
              </a>
            </footer>
          </div>
        </div>
        `;
        document.getElementById('content-container').innerHTML = resumeContent;
        attachEventListeners(); // Reattach event listeners
    }

    function loadPortfolioContent() {
        const portfolioContent = `
        <script>
            $(document).ready(function () {
    // Initialize Isotope
    var $grid = $('.js-grid').isotope({
        // options...
        itemSelector: '.gallery-grid__item',
        layoutMode: 'masonry', // Adjust layout automatically
    });

    // Filter items on button click
    $('.filter__item').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Change active class on filter buttons
    $('.filter__item').on('click', function () {
        $('.filter__item').removeClass('active');
        $(this).addClass('active');
    });
});
          </script>
          <div class="row sticky-parent">
            <aside class="col-12 col-md-12 col-lg-2">
              <div class="sidebar box sticky-column">
                <ul class="nav">
                  <li class="nav__item">
                    <a href="#" id="index-link" data-page="index" class=""
                      ><i class="fa fa-user-o fa-3x"></i> About
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#" id="resume-link" data-page="resume" class=""
                      ><i class="fa fa-file-text-o fa-3x"></i> Resume
                    </a>
                  </li>
                  <li class="nav__item">
                    <a
                      href="#" id="portfolio-link" data-page="portfolio" class="router-link-exact-active router-link-active"
                      aria-current="page"
                      ><i class="fa fa-cube fa-3x"></i> Portfolio
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#" id="blog-link" data-page="blog" class=""
                      ><i class="fa fa-book-open fa-3x"></i> Blog
                    </a>
                  </li>
                  <li class="nav__item">
                    <a href="#" id="contact-link" data-page="contact" class=""
                      ><i class="fa fa-address-book fa-3x"></i> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            <!-- About Body content -->
              <div class="col-12 col-md-12 col-lg-10">
              <div class="box box-content">
                <div>
                  <div class="pb-2">
                    <h1 class="title title--h1 first-title title__separate">
                      Portfolio
                    </h1>
                  </div>
                  <div>
                    <div class="select">
                      <span class="placeholder"> All </span>
                      <ul class="filter">
                        <li class="filter__item">Category</li>
                        <li data-filter="*" class="filter__item active">
                          <a href="#filter" class="filter__link active">
                            All
                          </a>
                        </li>
                        <li
                          data-filter=".category-Certifications"
                          class="filter__item"
                        >
                          <a href="#filter" class="filter__link">
                            Certifications
                          </a>
                        </li>
                        <li
                          data-filter=".category-Project"
                          class="filter__item"
                        >
                          <a href="#filter" class="filter__link"> Project </a>
                        </li>
                        <li data-filter=".category-Badge" class="filter__item">
                          <a href="#filter" class="filter__link"> Badge </a>
                        </li>
                      </ul>
                      <input type="hidden" name="changemetoo" />
                    </div>
                    <div
                      class="gallery-grid-two js-grid js-filter-container"
                      style="position: relative; height: 3811.44px"
                    >
                      <div class="gutter-sizer"></div>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="position: absolute; left: 0%; top: 0px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src="img/art.jpg"
                              alt="Dicoding_Practical_Dev_Ops_with_IBM_Cloud.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Completed the DevOps Praktis dengan IBM Cloud
                                  (Practical DevOps with IBM Cloud) class from
                                  Dicoding
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Dicoding - Practical DevOps with IBM Cloud
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="position: absolute; left: 51.6279%; top: 0px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="Telkomsel_Tech_Titans_League.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Top 30 Super Titans in Online Challenge
                                  Telkomsel Tech Titans League - Software
                                  Development
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Telkomsel Tech Titans League - Software
                              Development
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 328.547px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="DTS_2020_CCNA_Cybersecurity_Operations.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Completed the CCNA Cybersecurity Operations
                                  training from Digitalent Scholarship by
                                  Kominfo
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              DTS 2020 - CCNA Cybersecurity Operations
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="position: absolute; left: 0%; top: 378.484px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="Serverless_Web_App.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>AWS - reCAPTCHA</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Serverless Web App
                            </h4>
                            <a href="#" class="link-btn mt-2"> Article </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Badge"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 692.625px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Badge</span>
                            </div>
                            <img
                              src=""
                              alt="CCNA_Introductionto_Networks.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            /><!---->
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              CCNA Introductionto Networks
                            </h4>
                            <a href="#" class="link-btn mt-2"> Verify </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="position: absolute; left: 0%; top: 726.89px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="Cajero_App.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>CodeIgniter - HTML - CSS - JS</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Cajero App
                            </h4>
                            <a href="#" class="link-btn mt-2"> Github </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="position: absolute; left: 0%; top: 1068.61px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="Dicoding_Belajar_Dasar_Dasar_Azure_Cloud.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Completed the Belajar Dasar-Dasar Azure Cloud
                                  Class from Dicoding
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Dicoding - Belajar Dasar-Dasar Azure Cloud
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Badge"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 1198.02px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Badge</span>
                            </div>
                            <img
                              src=""
                              alt="Try_Hack_Me_Badge.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            /><!---->
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              TryHackMe Badge
                            </h4>
                            <a href="#" class="link-btn mt-2"> Profile </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="position: absolute; left: 0%; top: 1447.09px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="Hidemail.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>Full Stack MEVN - Vercel - Heroku</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Hidemail
                            </h4>
                            <a href="#" class="link-btn mt-2"> Website </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 1703.41px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="High_Availability_Network_Design.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>GNS3 - MikroTik</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              High-Availability Network Design
                            </h4>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="position: absolute; left: 0%; top: 1793.44px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="Telkomsel_Tech_Titans_League.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Finalist Top 150 Titans in Telkomsel Tech
                                  Titans League - Cyber Security
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Telkomsel Tech Titans League - Cyber Security
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 2096.5px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="Transletin_Webiste.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>Laravel - HTML - CSS - JS</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Transletin Webiste
                            </h4>
                            <a href="#" class="link-btn mt-2"> Website </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="position: absolute; left: 0%; top: 2121.98px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt=""
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>NodeJs - NPM - NPX</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              NPM Card (npx adityacprtm)
                            </h4>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="position: absolute; left: 0%; top: 2435.31px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="My_Birthday_Countdown.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>HTML - CSS - Javascript - VueJs</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Birthday Countdown
                            </h4>
                            <a href="#" class="link-btn mt-2"> Website </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 2437.19px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="GCP-Associate Cloud Engineer"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            /><!---->
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              GCP - Associate Cloud Engineer
                            </h4>
                            <a href="#" class="link-btn mt-2"> Verify </a
                            ><a href="#" class="link-btn mt-2"> Certificate </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="position: absolute; left: 0%; top: 2767.25px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="Dicoding_Cloud_Practitioner_Essentials.png"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Completed the AWS Cloud Practitioner
                                  Essentials from Dicoding
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Dicoding - Cloud Practitioner Essentials
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 2942.58px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="Minilink"
                              data-zoom=""
                              class="gallery-grid__image cover medium-zoom-image ls-is-cached lazyloaded"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Full Stack MEVN - Heroku | My mini-link got
                                  suspended. Someone used it for phishing
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              Mini-link
                            </h4>
                            <a href="#" class="link-btn mt-2"> Website </a
                            ><a href="#" class="link-btn mt-2"> Github </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Project"
                        style="position: absolute; left: 0%; top: 3122.34px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Project</span>
                            </div>
                            <img
                              src=""
                              alt="Things_Bin_Weband_Application_IoT.png"
                              data-zoom=""
                              class="gallery-grid__image cover lazyload medium-zoom-image"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <h1>Tech Stack</h1>
                                <p>AWS - NodeJs</p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              ThingsBin Web and Application IoT
                            </h4>
                            <a href="#" class="link-btn mt-2"> Github </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="
                          position: absolute;
                          left: 51.6279%;
                          top: 3260.63px;
                        "
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="AWS_Certified_Cloud_Practitioner"
                              data-zoom=""
                              class="gallery-grid__image cover lazyload medium-zoom-image"
                            /><!---->
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              AWS Certified Cloud Practitioner
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a
                            ><a href="#" class="link-btn mt-2"> Verify </a>
                          </figcaption>
                        </div>
                      </figure>
                      <figure
                        class="gallery-grid__item category-Certifications"
                        style="position: absolute; left: 0%; top: 3470.75px"
                      >
                        <div class="box-gallery-grid__item box__border">
                          <div class="gallery-grid__image-wrap">
                            <div class="portfolio-item__category">
                              <span>Certifications</span>
                            </div>
                            <img
                              src=""
                              alt="DTS_2019_Cloud_Computing.png"
                              data-zoom=""
                              class="gallery-grid__image cover lazyload medium-zoom-image"
                            />
                            <div class="caption">
                              <div class="blur"></div>
                              <div class="caption-text">
                                <!---->
                                <p>
                                  Completed the AWS Cloud Computing training
                                  from Digitalent Scholarship by Kominfo
                                </p>
                              </div>
                            </div>
                          </div>
                          <figcaption class="gallery-grid__caption">
                            <h4 class="title title--h4 gallery-grid__title">
                              DTS 2019 - Cloud Computing
                            </h4>
                            <a href="#" class="link-btn mt-2"> Certificate </a
                            ><a href="#" class="link-btn mt-2">
                              Final Project
                            </a>
                          </figcaption>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <footer class="footer">
                <span
                  ><em
                    class="font-icon icon-check-circle"
                    style="color: green"
                  ></em>
                  All rights reserved
                </span>
                .
                <a
                  target="_blank"
                  rel="noopener"
                  href=""
                  title="Status"
                >
                  Status
                </a>
                .
                <a
                  target="_blank"
                  rel="noopener"
                  href=""
                  title="Uptime"
                >
                  Uptime
                </a>
              </footer>
            </div>
          </div>
        `;
        document.getElementById('content-container').innerHTML = portfolioContent;
        attachEventListeners(); // Reattach event listeners
        initializeIsotope();

        // Function to initialize Isotope
    function initializeIsotope() {
        var $grid = $('.js-grid').isotope({
            itemSelector: '.gallery-grid__item',
            layoutMode: 'masonry'
        });

        $('.filter__item').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        $('.filter__item').on('click', function () {
            $('.filter__item').removeClass('active');
            $(this).addClass('active');
        });
    }
    }


    function loadBlogContent() {
        const blogContent = `
            <div class="row sticky-parent">
                <aside class="col-12 col-md-12 col-lg-2">
                    <div class="sidebar box sticky-column">
                        <ul class="nav">
                            <li class="nav__item">
                                <a href="#" data-page="index" id="index-link" class="router-link-exact-active router-link-active"><i
                                    class="fa fa-user-o fa-3x"></i> About
                                </a>
                            </li>
                            <li class="nav__item">
                                <a href="#" data-page="resume" id="resume-link"><i class="fa fa-file-text-o fa-3x"></i> Resume
                                </a>
                            </li>
                            <!-- Add other navigation links here -->
                        </ul>
                    </div>
                </aside>
                <div class="col-12 col-md-12 col-lg-10">
                    <div class="box box-content">
                        <h1>Resume Content</h1>
                        <!-- Add the rest of your resume content here -->
                    </div>
                </div>
            </div>
        `;
        document.getElementById('content-container').innerHTML = blogContent;
        attachEventListeners(); // Reattach event listeners
    }

    function loadContactContent() {
        const contactContent = `
            <div class="row sticky-parent">
                <aside class="col-12 col-md-12 col-lg-2">
                    <div class="sidebar box sticky-column">
                        <ul class="nav">
                            <li class="nav__item">
                                <a href="#" data-page="index" id="index-link" class="router-link-exact-active router-link-active"><i
                                    class="fa fa-user-o fa-3x"></i> About
                                </a>
                            </li>
                            <li class="nav__item">
                                <a href="#" data-page="resume" id="resume-link"><i class="fa fa-file-text-o fa-3x"></i> Resume
                                </a>
                            </li>
                            <!-- Add other navigation links here -->
                        </ul>
                    </div>
                </aside>
                <div class="col-12 col-md-12 col-lg-10">
                    <div class="box box-content">
                        <h1>Resume Content</h1>
                        <!-- Add the rest of your resume content here -->
                    </div>
                </div>
            </div>
        `;
        document.getElementById('content-container').innerHTML = contactContent;
        attachEventListeners(); // Reattach event listeners
    }




    // Function to attach event listeners to navigation links
    function attachEventListeners() {
        // Attach event listener to the resume link
        document.getElementById('resume-link').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            loadResumeContent(); // Load resume content
        });

        // Attach event listener to the index link
        document.getElementById('index-link').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            loadIndexContent(); // Load index content
        });

        // Attach event listener to the index link
        document.getElementById('portfolio-link').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            loadPortfolioContent(); // Load portfolio content
        });

        // Attach event listener to the index link
        document.getElementById('blog-link').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            loadBlogContent(); // Load blog content
        });


        // Attach event listener to the index link
        document.getElementById('contact-link').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            loadContactContent(); // Load contact content
        });
    }

    // Initial load of index content
    loadIndexContent();
});








document.addEventListener("DOMContentLoaded", function () {
  var loaderOverlay = document.getElementById("loader-overlay");

  // Show loader on initial page load
  loaderOverlay.style.display = 'flex';

  // Hide the loader when the content has finished loading
  window.addEventListener("load", function () {
    setTimeout(hideLoader, 500); // Ensure loader is visible for 1.5 seconds to complete the animation
  });

  function showLoader() {
    loaderOverlay.style.display = 'flex';
  }

  function hideLoader() {
    // Wait until the loader animation completes
    loaderOverlay.style.transition = 'opacity 0.5s ease';  // Smooth fade-out effect
    loaderOverlay.style.opacity = 0;  // Start fading out the loader

    // Hide the loader completely after the fade-out
    setTimeout(function () {
      loaderOverlay.style.display = 'none';
      loaderOverlay.style.opacity = 1; // Reset opacity for next time
    }, 500);  // Match this with the CSS transition duration (0.5 seconds)
  }

  // Attach showLoader and hideLoader to your dynamic navigation
  var navLinks = document.querySelectorAll(".nav-item a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior

      var target = this.getAttribute("href");

      showLoader();

      // Simulate content loading with a timeout (replace with actual navigation logic)
      setTimeout(function () {
        hideLoader();  // Hide loader first
        setTimeout(function () {
          window.location.href = target;  // Redirect after hiding the loader
        }, 1500);  // Delay the page change to ensure the loader finishes
      }, 1500);  // Ensure content loads only after the loader animation ends
    });
  });
});

