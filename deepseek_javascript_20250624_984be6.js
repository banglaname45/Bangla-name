// Sample data - in a real app, this would be in a separate JSON file
const namesData = [
    {
        "id": 1,
        "name_bn": "আরাফ",
        "name_en": "Araf",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "জান্নাতের একটি স্তর",
        "meaning_en": "A level of paradise",
        "origin": "Arabic",
        "pronunciation": "Ah-raf"
    },
    {
        "id": 2,
        "name_bn": "আয়েশা",
        "name_en": "Ayesha",
        "gender": "Girl",
        "religion": "Islamic",
        "meaning_bn": "জীবন্ত, প্রাণবন্ত",
        "meaning_en": "Living, prosperous",
        "origin": "Arabic",
        "pronunciation": "Ah-yee-sha"
    },
    {
        "id": 3,
        "name_bn": "অর্ণব",
        "name_en": "Arnab",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "সমুদ্র",
        "meaning_en": "Ocean",
        "origin": "Sanskrit",
        "pronunciation": "Ar-nob"
    },
    {
        "id": 4,
        "name_bn": "অনন্যা",
        "name_en": "Ananya",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "অদ্বিতীয়া",
        "meaning_en": "Unique",
        "origin": "Sanskrit",
        "pronunciation": "Un-un-ya"
    },
    {
        "id": 5,
        "name_bn": "বরকত",
        "name_en": "Barkat",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "আশীর্বাদ",
        "meaning_en": "Blessing",
        "origin": "Arabic",
        "pronunciation": "Bar-kat"
    },
    {
        "id": 6,
        "name_bn": "বর্ষা",
        "name_en": "Barsha",
        "gender": "Girl",
        "religion": "Neutral",
        "meaning_bn": "বৃষ্টি",
        "meaning_en": "Rain",
        "origin": "Bengali",
        "pronunciation": "Bor-sha"
    },
    {
        "id": 7,
        "name_bn": "চন্দন",
        "name_en": "Chandan",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "সুগন্ধি কাঠ",
        "meaning_en": "Sandalwood",
        "origin": "Sanskrit",
        "pronunciation": "Chon-don"
    },
    {
        "id": 8,
        "name_bn": "চৈতি",
        "name_en": "Chaiti",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "চৈত্র মাসে জন্মগ্রহণকারী",
        "meaning_en": "Born in Chaitra month",
        "origin": "Sanskrit",
        "pronunciation": "Chai-tee"
    },
    {
        "id": 9,
        "name_bn": "দিব্য",
        "name_en": "Divya",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "দিব্য, স্বর্গীয়",
        "meaning_en": "Divine, heavenly",
        "origin": "Sanskrit",
        "pronunciation": "Dib-yo"
    },
    {
        "id": 10,
        "name_bn": "দীপ",
        "name_en": "Deep",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "আলো",
        "meaning_en": "Light",
        "origin": "Sanskrit",
        "pronunciation": "Deep"
    },
    {
        "id": 11,
        "name_bn": "এহসান",
        "name_en": "Ehsan",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "দয়া, অনুগ্রহ",
        "meaning_en": "Kindness, favor",
        "origin": "Arabic",
        "pronunciation": "Eh-saan"
    },
    {
        "id": 12,
        "name_bn": "এলিনা",
        "name_en": "Elina",
        "gender": "Girl",
        "religion": "Neutral",
        "meaning_bn": "জ্ঞানী",
        "meaning_en": "Intelligent",
        "origin": "Greek",
        "pronunciation": "Eh-lee-na"
    },
    {
        "id": 13,
        "name_bn": "ফাহিম",
        "name_en": "Fahim",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "বুদ্ধিমান",
        "meaning_en": "Intelligent",
        "origin": "Arabic",
        "pronunciation": "Faa-heem"
    },
    {
        "id": 14,
        "name_bn": "ফারিহা",
        "name_en": "Fariha",
        "gender": "Girl",
        "religion": "Islamic",
        "meaning_bn": "আনন্দিত",
        "meaning_en": "Happy, joyful",
        "origin": "Arabic",
        "pronunciation": "Fa-ree-ha"
    },
    {
        "id": 15,
        "name_bn": "গৌরব",
        "name_en": "Gourab",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "গর্ব, সম্মান",
        "meaning_en": "Pride, honor",
        "origin": "Sanskrit",
        "pronunciation": "Go-rob"
    },
    {
        "id": 16,
        "name_bn": "গীতা",
        "name_en": "Geeta",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "পবিত্র গ্রন্থ",
        "meaning_en": "Holy book",
        "origin": "Sanskrit",
        "pronunciation": "Gee-ta"
    },
    {
        "id": 17,
        "name_bn": "হাসান",
        "name_en": "Hasan",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "সুন্দর",
        "meaning_en": "Handsome",
        "origin": "Arabic",
        "pronunciation": "Ha-saan"
    },
    {
        "id": 18,
        "name_bn": "হাসিনা",
        "name_en": "Hasina",
        "gender": "Girl",
        "religion": "Islamic",
        "meaning_bn": "সুন্দরী",
        "meaning_en": "Beautiful",
        "origin": "Arabic",
        "pronunciation": "Ha-see-na"
    },
    {
        "id": 19,
        "name_bn": "ইব্রাহিম",
        "name_en": "Ibrahim",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "জাতির পিতা",
        "meaning_en": "Father of nations",
        "origin": "Arabic",
        "pronunciation": "Ib-ra-heem"
    },
    {
        "id": 20,
        "name_bn": "ইশিতা",
        "name_en": "Ishita",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "প্রভুত্ব",
        "meaning_en": "Superiority",
        "origin": "Sanskrit",
        "pronunciation": "Ish-ee-ta"
    },
    {
        "id": 21,
        "name_bn": "জাহিদ",
        "name_en": "Jahid",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "পরিশ্রমী",
        "meaning_en": "Hardworking",
        "origin": "Arabic",
        "pronunciation": "Jaa-hid"
    },
    {
        "id": 22,
        "name_bn": "জারিন",
        "name_en": "Jarin",
        "gender": "Girl",
        "religion": "Neutral",
        "meaning_bn": "সুন্দর ফুল",
        "meaning_en": "Beautiful flower",
        "origin": "Bengali",
        "pronunciation": "Ja-reen"
    },
    {
        "id": 23,
        "name_bn": "কাব্য",
        "name_en": "Kabya",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "কবিতা",
        "meaning_en": "Poetry",
        "origin": "Sanskrit",
        "pronunciation": "Kob-yo"
    },
    {
        "id": 24,
        "name_bn": "কৃষ্ণ",
        "name_en": "Krishna",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "অন্ধকার, ভগবান বিষ্ণুর অষ্টম অবতার",
        "meaning_en": "Dark, the eighth avatar of Lord Vishnu",
        "origin": "Sanskrit",
        "pronunciation": "Krish-no"
    },
    {
        "id": 25,
        "name_bn": "লাবণ্য",
        "name_en": "Labanya",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "সৌন্দর্য",
        "meaning_en": "Beauty",
        "origin": "Sanskrit",
        "pronunciation": "Lo-bon-yo"
    },
    {
        "id": 26,
        "name_bn": "লিমন",
        "name_en": "Limon",
        "gender": "Boy",
        "religion": "Neutral",
        "meaning_bn": "লেবু গাছ",
        "meaning_en": "Lemon tree",
        "origin": "Bengali",
        "pronunciation": "Lee-mon"
    },
    {
        "id": 27,
        "name_bn": "মাহি",
        "name_en": "Mahi",
        "gender": "Girl",
        "religion": "Neutral",
        "meaning_bn": "পৃথিবী",
        "meaning_en": "Earth",
        "origin": "Sanskrit",
        "pronunciation": "Maa-hee"
    },
    {
        "id": 28,
        "name_bn": "মাসুম",
        "name_en": "Masum",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "নির্দোষ",
        "meaning_en": "Innocent",
        "origin": "Arabic",
        "pronunciation": "Maa-soom"
    },
    {
        "id": 29,
        "name_bn": "নাবিলা",
        "name_en": "Nabila",
        "gender": "Girl",
        "religion": "Islamic",
        "meaning_bn": "উচ্চ মর্যাদাসম্পন্ন",
        "meaning_en": "Noble",
        "origin": "Arabic",
        "pronunciation": "Naa-bee-la"
    },
    {
        "id": 30,
        "name_bn": "নাঈম",
        "name_en": "Naeem",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "আরামদায়ক",
        "meaning_en": "Comfortable",
        "origin": "Arabic",
        "pronunciation": "Naa-eem"
    },
    {
        "id": 31,
        "name_bn": "ওয়াসিম",
        "name_en": "Wasim",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "সুন্দর",
        "meaning_en": "Handsome",
        "origin": "Arabic",
        "pronunciation": "Waa-seem"
    },
    {
        "id": 32,
        "name_bn": "ওমর",
        "name_en": "Omar",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "দীর্ঘজীবী",
        "meaning_en": "Long-lived",
        "origin": "Arabic",
        "pronunciation": "O-mar"
    },
    {
        "id": 33,
        "name_bn": "প্রীতম",
        "name_en": "Pritam",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "প্রিয়তম",
        "meaning_en": "Beloved",
        "origin": "Sanskrit",
        "pronunciation": "Pree-tom"
    },
    {
        "id": 34,
        "name_bn": "প্রিয়া",
        "name_en": "Priya",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "প্রিয়",
        "meaning_en": "Beloved",
        "origin": "Sanskrit",
        "pronunciation": "Pree-ya"
    },
    {
        "id": 35,
        "name_bn": "কিউবা",
        "name_en": "Quba",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "মসজিদের নাম",
        "meaning_en": "Name of a mosque",
        "origin": "Arabic",
        "pronunciation": "Koo-ba"
    },
    {
        "id": 36,
        "name_bn": "কুরাইশ",
        "name_en": "Quraish",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "কুরাইশ গোত্র",
        "meaning_en": "Quraish tribe",
        "origin": "Arabic",
        "pronunciation": "Koo-raish"
    },
    {
        "id": 37,
        "name_bn": "রাহাত",
        "name_en": "Rahat",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "আরাম",
        "meaning_en": "Comfort",
        "origin": "Arabic",
        "pronunciation": "Raa-hat"
    },
    {
        "id": 38,
        "name_bn": "রিয়া",
        "name_en": "Riya",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "গায়ক",
        "meaning_en": "Singer",
        "origin": "Sanskrit",
        "pronunciation": "Ree-ya"
    },
    {
        "id": 39,
        "name_bn": "সাকিব",
        "name_en": "Sakib",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "তারা",
        "meaning_en": "Star",
        "origin": "Arabic",
        "pronunciation": "Saa-kib"
    },
    {
        "id": 40,
        "name_bn": "সায়রা",
        "name_en": "Sayra",
        "gender": "Girl",
        "religion": "Islamic",
        "meaning_bn": "যাত্রা",
        "meaning_en": "Travel",
        "origin": "Arabic",
        "pronunciation": "Saa-y-ra"
    },
    {
        "id": 41,
        "name_bn": "তানভীর",
        "name_en": "Tanvir",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "আলোকিত",
        "meaning_en": "Enlightened",
        "origin": "Arabic",
        "pronunciation": "Tan-veer"
    },
    {
        "id": 42,
        "name_bn": "তৃষা",
        "name_en": "Trisha",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "তৃষ্ণা",
        "meaning_en": "Thirst",
        "origin": "Sanskrit",
        "pronunciation": "Tree-sha"
    },
    {
        "id": 43,
        "name_bn": "উজ্জ্বল",
        "name_en": "Ujjal",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "উজ্জ্বল",
        "meaning_en": "Bright",
        "origin": "Sanskrit",
        "pronunciation": "Ooj-jol"
    },
    {
        "id": 44,
        "name_bn": "উর্মি",
        "name_en": "Urmi",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "তরঙ্গ",
        "meaning_en": "Wave",
        "origin": "Sanskrit",
        "pronunciation": "Oor-mee"
    },
    {
        "id": 45,
        "name_bn": "ভাস্কর",
        "name_en": "Bhaskar",
        "gender": "Boy",
        "religion": "Hindu",
        "meaning_bn": "সূর্য",
        "meaning_en": "Sun",
        "origin": "Sanskrit",
        "pronunciation": "Bhaas-kor"
    },
    {
        "id": 46,
        "name_bn": "ভূমিকা",
        "name_en": "Bhumika",
        "gender": "Girl",
        "religion": "Hindu",
        "meaning_bn": "পৃথিবী",
        "meaning_en": "Earth",
        "origin": "Sanskrit",
        "pronunciation": "Bhoo-mee-ka"
    },
    {
        "id": 47,
        "name_bn": "ইয়াসিন",
        "name_en": "Yasin",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "কুরআনের একটি সূরা",
        "meaning_en": "A chapter in Quran",
        "origin": "Arabic",
        "pronunciation": "Yaa-seen"
    },
    {
        "id": 48,
        "name_bn": "ইয়াসমিন",
        "name_en": "Yasmin",
        "gender": "Girl",
        "religion": "Islamic",
        "meaning_bn": "ফুল",
        "meaning_en": "Flower",
        "origin": "Arabic",
        "pronunciation": "Yaas-meen"
    },
    {
        "id": 49,
        "name_bn": "জায়েদ",
        "name_en": "Zayed",
        "gender": "Boy",
        "religion": "Islamic",
        "meaning_bn": "সমৃদ্ধি",
        "meaning_en": "Prosperity",
        "origin": "Arabic",
        "pronunciation": "Zaa-yed"
    },
    {
        "id": 50,
        "name_bn": "জারা",
        "name_en": "Zara",
        "gender": "Girl",
        "religion": "Islamic",
        "meaning_bn": "উজ্জ্বল ফুল",
        "meaning_en": "Bright flower",
        "origin": "Arabic",
        "pronunciation": "Zaa-ra"
    }
];

// Common utility functions
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function navigateToNameDetails(nameId) {
    window.location.href = `name-details.html?id=${nameId}`;
}

function getGenderColorClass(gender) {
    return gender === 'Boy' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800';
}

function getReligionColorClass(religion) {
    switch(religion) {
        case 'Islamic': return 'bg-teal-100 text-teal-800';
        case 'Hindu': return 'bg-purple-100 text-purple-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

// Home Page Functionality
if (document.getElementById('randomNameBtn')) {
    document.getElementById('randomNameBtn').addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * namesData.length);
        const randomName = namesData[randomIndex];
        
        const resultDiv = document.getElementById('randomNameResult');
        document.getElementById('randomName').textContent = `${randomName.name_en} (${randomName.name_bn})`;
        document.getElementById('randomMeaning').textContent = `Meaning: ${randomName.meaning_en}`;
        document.getElementById('randomNameLink').href = `name-details.html?id=${randomName.id}`;
        
        resultDiv.classList.remove('hidden');
    });
}

// Name List Page Functionality
if (document.getElementById('nameList')) {
    let currentPage = 1;
    const namesPerPage = 9;
    let filteredNames = [...namesData];
    
    // Apply initial filters from URL params
    function applyInitialFilters() {
        const genderFilter = getQueryParam('gender');
        const religionFilter = getQueryParam('religion');
        
        if (genderFilter) {
            document.getElementById('genderFilter').value = genderFilter;
            filteredNames = filteredNames.filter(name => name.gender === genderFilter);
        }
        
        if (religionFilter) {
            document.getElementById('religionFilter').value = religionFilter;
            filteredNames = filteredNames.filter(name => name.religion === religionFilter);
        }
        
        renderNameList();
    }
    
    // Render name cards
    function renderNameList() {
        const nameListContainer = document.getElementById('nameList');
        nameListContainer.innerHTML = '';
        
        const startIndex = (currentPage - 1) * namesPerPage;
        const endIndex = startIndex + namesPerPage;
        const paginatedNames = filteredNames.slice(startIndex, endIndex);
        
        if (paginatedNames.length === 0) {
            document.getElementById('noResults').classList.remove('hidden');
            document.getElementById('pagination').classList.add('hidden');
            return;
        } else {
            document.getElementById('noResults').classList.add('hidden');
            document.getElementById('pagination').classList.remove('hidden');
        }
        
        paginatedNames.forEach(name => {
            const nameCard = document.createElement('div');
            nameCard.className = `name-card ${name.gender === 'Boy' ? 'name-card-boy' : 'name-card-girl'}`;
            nameCard.innerHTML = `
                <div class="p-5">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h3 class="text-xl font-bold text-gray-800">${name.name_en}</h3>
                            <p class="text-lg text-gray-700">${name.name_bn}</p>
                        </div>
                        <div>
                            <span class="${getGenderColorClass(name.gender)} px-2 py-1 rounded-full text-xs font-medium">${name.gender}</span>
                            <span class="${getReligionColorClass(name.religion)} px-2 py-1 rounded-full text-xs font-medium ml-1">${name.religion}</span>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4"><span class="font-medium">Meaning:</span> ${name.meaning_en}</p>
                    <button onclick="navigateToNameDetails(${name.id})" class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition duration-300">
                        See Details
                    </button>
                </div>
            `;
            nameListContainer.appendChild(nameCard);
        });
        
        renderPagination();
    }
    
    // Render pagination
    function renderPagination() {
        const totalPages = Math.ceil(filteredNames.length / namesPerPage);
        const pageNumbersContainer = document.getElementById('pageNumbers');
        pageNumbersContainer.innerHTML = '';
        
        document.getElementById('prevPage').disabled = currentPage === 1;
        document.getElementById('nextPage').disabled = currentPage === totalPages;
        
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                renderNameList();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbersContainer.appendChild(pageBtn);
        }
    }
    
    // Event listeners for filters
    document.getElementById('genderFilter').addEventListener('change', function() {
        filterNames();
    });
    
    document.getElementById('religionFilter').addEventListener('change', function() {
        filterNames();
    });
    
    document.getElementById('letterFilter').addEventListener('change', function() {
        filterNames();
    });
    
    document.getElementById('prevPage').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderNameList();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    document.getElementById('nextPage').addEventListener('click', function() {
        const totalPages = Math.ceil(filteredNames.length / namesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderNameList();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', function() {
        filterNames();
    });
    
    document.getElementById('searchInput').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            filterNames();
        }
    });
    
    // Filter names based on selected criteria
    function filterNames() {
        currentPage = 1;
        const genderFilter = document.getElementById('genderFilter').value;
        const religionFilter = document.getElementById('religionFilter').value;
        const letterFilter = document.getElementById('letterFilter').value;
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        
        filteredNames = namesData.filter(name => {
            const matchesGender = !genderFilter || name.gender === genderFilter;
            const matchesReligion = !religionFilter || name.religion === religionFilter;
            const matchesLetter = !letterFilter || name.name_en.charAt(0).toUpperCase() === letterFilter;
            const matchesSearch = !searchTerm || 
                name.name_en.toLowerCase().includes(searchTerm) || 
                name.name_bn.includes(searchTerm) || 
                name.meaning_en.toLowerCase().includes(searchTerm) || 
                name.meaning_bn.includes(searchTerm);
            
            return matchesGender && matchesReligion && matchesLetter && matchesSearch;
        });
        
        renderNameList();
    }
    
    // Initialize
    applyInitialFilters();
}

// Name Details Page Functionality
if (document.getElementById('nameEn')) {
    const nameId = parseInt(getQueryParam('id'));
    const name = namesData.find(n => n.id === nameId);
    
    if (name) {
        // Set page title
        document.getElementById('nameTitle').textContent = `${name.name_en} - Meaning & Details | Bangla Name Finder`;
        
        // Populate name details
        document.getElementById('nameEn').textContent = name.name_en;
        document.getElementById('nameBn').textContent = name.name_bn;
        document.getElementById('meaningEn').textContent = name.meaning_en;
        document.getElementById('meaningBn').textContent = name.meaning_bn;
        document.getElementById('pronunciation').textContent = name.pronunciation;
        document.getElementById('origin').textContent = name.origin;
        
        // Set gender and religion tags
        const genderTag = document.getElementById('nameGender');
        genderTag.textContent = name.gender;
        genderTag.className = `inline-block px-3 py-1 rounded-full text-sm font-medium ${getGenderColorClass(name.gender)}`;
        
        const religionTag = document.getElementById('nameReligion');
        religionTag.textContent = name.religion;
        religionTag.className = `inline-block px-3 py-1 rounded-full text-sm font-medium ${getReligionColorClass(name.religion)}`;
        
        // Find similar names (same gender and religion)
        const similarNames = namesData.filter(n => 
            n.id !== name.id && 
            n.gender === name.gender && 
            n.religion === name.religion
        ).slice(0, 5);
        
        const similarNamesContainer = document.getElementById('similarNames');
        similarNames.forEach(similarName => {
            const tag = document.createElement('a');
            tag.href = `name-details.html?id=${similarName.id}`;
            tag.className = 'similar-name-tag';
            tag.textContent = similarName.name_en;
            similarNamesContainer.appendChild(tag);
        });
        
        // If no similar names, show message
        if (similarNames.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'No similar names found';
            message.className = 'text-gray-500';
            similarNamesContainer.appendChild(message);
        }
    } else {
        // Name not found, redirect to names list
        window.location.href = 'names.html';
    }
}

// Common search functionality for all pages
const searchButtons = document.querySelectorAll('#searchBtn');
searchButtons.forEach(button => {
    button.addEventListener('click', function() {
        const searchTerm = document.getElementById('searchInput').value.trim();
        if (searchTerm) {
            window.location.href = `names.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });
});

// Make navigateToNameDetails available globally
window.navigateToNameDetails = navigateToNameDetails;