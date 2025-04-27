document.addEventListener('DOMContentLoaded', function() {
            // Create twinkling stars
            function createTwinkles() {
                const hero = document.querySelector('.hero');
                const colors = ['gold', 'white', 'silver'];
                
                for (let i = 0; i < 50; i++) {
                    const twinkle = document.createElement('div');
                    twinkle.className = `twinkle ${colors[Math.floor(Math.random() * colors.length)]}`;
                    twinkle.style.left = `${Math.random() * 100}%`;
                    twinkle.style.top = `${Math.random() * 100}%`;
                    twinkle.style.animationDelay = `${Math.random() * 2}s`;
                    hero.appendChild(twinkle);
                }
            }
            createTwinkles();

            // Mobile Navigation
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                this.classList.toggle('active');
                navLinks.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    this.querySelectorAll('.line').forEach((line, index) => {
                        if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 6px)';
                        if (index === 1) line.style.opacity = '0';
                        if (index === 2) line.style.transform = 'rotate(-45deg) translate(5px, -6px)';
                    });
                } else {
                    this.querySelectorAll('.line').forEach(line => {
                        line.style.transform = 'none';
                        line.style.opacity = '1';
                    });
                }
            });
            
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    if (navLinks.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                        hamburger.querySelectorAll('.line').forEach(line => {
                            line.style.transform = 'none';
                            line.style.opacity = '1';
                        });
                    }
                });
            });
            
            // Hero Slider
            const sliderTrack = document.querySelector('.slider-track');
            const slides = [
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/landingpage/image/retina/def_bg.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80', 
                    title: 'PREMIUM PHOTOGRAPHY' 
                },
               
            ];
            
            slides.forEach((slide, index) => {
                const slideElement = document.createElement('div');
                slideElement.className = 'slide';
                slideElement.innerHTML = `
                    <img src="${slide.image}" alt="${slide.title}">
                `;
                sliderTrack.appendChild(slideElement);
            });
            
            const slideElements = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.slider-prev');
            const nextBtn = document.querySelector('.slider-next');
            const indicatorsContainer = document.querySelector('.slider-indicators');
            let currentIndex = 0;
            
            indicatorsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            const indicators = document.querySelectorAll('.indicator');
            
            function updateSlider() {
                sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentIndex);
                });
                document.querySelector('.hero-content h1').textContent = slides[currentIndex].title;
            }
            
            function goToSlide(index) {
                currentIndex = index;
                updateSlider();
            }
            
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            }
            
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            let slideInterval = setInterval(nextSlide, 5000);
            
            sliderTrack.addEventListener('mouseenter', () => clearInterval(slideInterval));
            sliderTrack.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 5000));
            
            // Gallery Grid
            const galleryGrid = document.querySelector('.masonry-gallery');
            const galleryItems = [
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/IMG-20240126-WA0018.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
                    title: 'Tarakeshwar', 
                    category: 'Urban',
                    type: 'photo'
                },
                { 
                    video: 'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
                    title: 'Flowering Tree', 
                    category: 'Nature',
                    type: 'video'
                },
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/IMG-20240127-WA0029.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80', 
                    title: '', 
                    category: 'Urban',
                    type: 'photo'
                },
                { 
                    video: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/vid/79587735/IMG_16.mp4',
                    title: 'Siddha Pokhari Bhaktapur', 
                    category: 'Urban',
                    type: 'video'
                },
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/20231101_064955.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 
                    title: '', 
                    category: 'Nature',
                    type: 'photo'
                },
                { 
                    video: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/vid/79587735/IMG_15.mp4',
                    title: 'Mardi Himal Kaski', 
                    category: 'Nature',
                    type: 'video'
                },
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/20231101_081836.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
                    title: 'Mountain Landscape', 
                    category: 'Nature',
                    type: 'photo'
                },
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/20231101_080916.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', 
                    title: 'Mountain Landscape', 
                    category: 'Nature',
                    type: 'photo'
                },
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/IMG-20240126-WA0019.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
                    title: 'Sunrise', 
                    category: 'Ultra Luxury',
                    type: 'photo'
                },
                { 
                    video: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/vid/79587735/IMG_14.mp4',
                    title: 'Mardi Himal Kaski', 
                    category: 'Ultra Luxury',
                    type: 'video'
                },
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/IMG-20240127-WA0045.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
                    title: 'Luxury Mansion', 
                    category: 'Ultra Luxury',
                    type: 'photo'
                },
                { 
                    image: 'https://cdn.shrabyadahal.com.np/cGF0aGl2YXJh-main/sublandibgpage/1236adsa4d/asewch5s5s2s22/img/TmV3Zm9sZGVyXw/image/20231101_073518.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', 
                    title: 'Private Jet', 
                    category: 'Ultra Luxury',
                    type: 'photo'
                }
            ];
            
            let filteredItems = galleryItems;
            const itemsPerLoad = 4;
            let loadedItemsCount = itemsPerLoad;
            
            // Initially display only the first set of items
            galleryGrid.innerHTML = '';
            displayGalleryItems(filteredItems.slice(0, loadedItemsCount));
            updateLoadButtons();
            
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.dataset.filter;
                    filteredItems = filter === 'all' ? galleryItems :
                        filter === 'photo' ? galleryItems.filter(item => item.type === 'photo') :
                        filter === 'video' ? galleryItems.filter(item => item.type === 'video') :
                        galleryItems.filter(item => item.category.toLowerCase() === filter);
                    
                    galleryGrid.innerHTML = '';
                    loadedItemsCount = filteredItems.length > itemsPerLoad ? itemsPerLoad : filteredItems.length;
                    displayGalleryItems(filteredItems.slice(0, loadedItemsCount));
                    updateLoadButtons();
                });
            });
            
            function displayGalleryItems(items) {
                items.forEach((item, index) => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.dataset.category = item.category;
                    galleryItem.dataset.type = item.type;
                    galleryItem.dataset.index = galleryItems.indexOf(item);
                    
                    if (item.type === 'photo') {
                        galleryItem.innerHTML = `
                            <img src="${item.image}" alt="${item.title}" loading="lazy">
                            <div class="item-overlay">
                                <h3>${item.title}</h3>
                                <p>${item.category}</p>
                            </div>
                        `;
                    } else {
                        galleryItem.innerHTML = `
                            <video loop muted preload="metadata">
                                <source src="${item.video}" type="video/mp4">
                            </video>
                            <div class="play-icon"><i class="fas fa-play"></i></div>
                            <div class="item-overlay">
                                <h3>${item.title}</h3>
                                <p>${item.category}</p>
                            </div>
                        `;
                        const video = galleryItem.querySelector('video');
                        galleryItem.addEventListener('mouseenter', () => video.play());
                        galleryItem.addEventListener('mouseleave', () => {
                            video.pause();
                            video.currentTime = 0;
                        });
                    }
                    
                    galleryGrid.appendChild(galleryItem);
                    galleryItem.addEventListener('click', function() {
                        openLightbox(parseInt(this.dataset.index));
                    });
                });
            }
            
            function updateLoadButtons() {
                const loadMoreBtn = document.getElementById('load-more-btn');
                const loadLessBtn = document.getElementById('load-less-btn');
                loadMoreBtn.style.display = loadedItemsCount < filteredItems.length ? 'block' : 'none';
                loadLessBtn.style.display = loadedItemsCount > itemsPerLoad ? 'block' : 'none';
            }
            
            const loadMoreBtn = document.getElementById('load-more-btn');
            const loadLessBtn = document.getElementById('load-less-btn');
            
            loadMoreBtn.addEventListener('click', function() {
                const remainingItems = filteredItems.slice(loadedItemsCount, loadedItemsCount + itemsPerLoad);
                
                if (remainingItems.length > 0) {
                    displayGalleryItems(remainingItems);
                    loadedItemsCount += remainingItems.length;
                    
                    // Scroll to the last loaded item
                    const lastItem = document.querySelector('.gallery-item:last-child');
                    lastItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    updateLoadButtons();
                }
            });
            
            loadLessBtn.addEventListener('click', function() {
                if (loadedItemsCount > itemsPerLoad) {
                    loadedItemsCount = Math.max(itemsPerLoad, loadedItemsCount - itemsPerLoad);
                    galleryGrid.innerHTML = '';
                    displayGalleryItems(filteredItems.slice(0, loadedItemsCount));
                    
                    // Scroll to the first item
                    const firstItem = document.querySelector('.gallery-item:first-child');
                    firstItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    updateLoadButtons();
                }
            });
            
            // Video Controls
            const video = document.getElementById('featured-video');
            const playPauseBtn = document.getElementById('play-pause');
            const fullscreenBtn = document.getElementById('fullscreen');
            
            // Ensure video is muted and autoplays
            video.muted = true;
            video.autoplay = true;
            
            playPauseBtn.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    video.pause();
                    this.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
            
            fullscreenBtn.addEventListener('click', function() {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                }
            });
            
            // Contact Form
            const contactForm = document.getElementById('contactForm');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Your message has been prepared for sending. Please confirm to proceed in your email client.');
                this.submit();
                this.reset();
            });
            
            // Lightbox functionality
            const lightbox = document.getElementById('lightbox');
            const closeLightbox = document.querySelector('.close-lightbox');
            const lightboxMediaContainer = document.querySelector('.lightbox-media-container');
            const lightboxCaption = document.querySelector('.lightbox-caption');
            const lightboxPrev = document.querySelector('.lightbox-prev');
            const lightboxNext = document.querySelector('.lightbox-next');
            
            let currentLightboxIndex = 0;
            
            function openLightbox(index) {
                currentLightboxIndex = index;
                updateLightbox();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function updateLightbox() {
                const item = galleryItems[currentLightboxIndex];
                lightboxMediaContainer.innerHTML = '';
                
                if (item.type === 'photo') {
                    const img = document.createElement('img');
                    img.src = item.image;
                    img.alt = item.title;
                    lightboxMediaContainer.appendChild(img);
                } else {
                    const video = document.createElement('video');
                    video.src = item.video;
                    video.controls = true;
                    video.autoplay = true;
                    video.muted = true;
                    lightboxMediaContainer.appendChild(video);
                }
                
                lightboxCaption.textContent = `${item.title} - ${item.category}`;
            }
            
            function prevLightboxItem() {
                currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
                updateLightbox();
            }
            
            function nextLightboxItem() {
                currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
                updateLightbox();
            }
            
            closeLightbox.addEventListener('click', function() {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
                const video = lightboxMediaContainer.querySelector('video');
                if (video) video.pause();
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    const video = lightboxMediaContainer.querySelector('video');
                    if (video) video.pause();
                }
            });
            
            lightboxPrev.addEventListener('click', prevLightboxItem);
            lightboxNext.addEventListener('click', nextLightboxItem);
            
            // Keyboard navigation for lightbox
            document.addEventListener('keydown', function(e) {
                if (lightbox.classList.contains('active')) {
                    e.preventDefault();
                    switch(e.key) {
                        case 'ArrowLeft':
                            prevLightboxItem();
                            break;
                        case 'ArrowRight':
                            nextLightboxItem();
                            break;
                        case 'Escape':
                            lightbox.classList.remove('active');
                            document.body.style.overflow = 'auto';
                            const video = lightboxMediaContainer.querySelector('video');
                            if (video) video.pause();
                            break;
                    }
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Set active navigation link based on scroll position
            const sections = document.querySelectorAll('section');
            window.addEventListener('scroll', function() {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                });
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        });
