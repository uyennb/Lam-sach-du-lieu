/**
 * Data Cleaner & Normalization App Logic
 */

// User's sample comments compiled for easy loading
const SAMPLE_COMMENTS = `Nguyễn Tuấn Anh
1 giờ trước
Cho mình xin 1 suất trải nghiệm phần mềm nhé! Cảm ơn bác. Email: anhnt.hn@gmail.com
Thích · Phản hồi · 2

Trần Minh Tâm
45 phút trước
App hay quá! Cho mình xin link tải với nha. email của mình: tam.tranminh@gmai.com. Cảm ơn admin nhiều!
Thích · Phản hồi · 1

Lê Hoàng Long
30 phút trước
Cám ơn bạn nhiều nhé, gửi cho mình vào hoanglong88@yahoo.com
Thích · Phản hồi

Phạm Thanh Hương
20 phút trước
Cho em xin với ạ, e cảm ơn: huongpt_92@gmail .com
Thích · Phản hồi · 3

Đỗ Gia Bảo
18 phút trước
Mình một suất nhé thớt! giabao_do@hotmail.com.vn. Thanks!
Thích · Phản hồi

Nguyễn Thị Mai
15 phút trước
mail của mình đây ạ: maintt_2001@gmail.con. Hóng quá!
Thích · Phản hồi · 1

Vũ Đức Cường
12 phút trước
Cho mình xin 1 slot nha bác. cuongvd90@gmail..com. Cảm ơn nhiều!
Thích · Phản hồi

Bùi Hồng Hạnh
10 phút trước
Cảm ơn admin đã chia sẻ, cho em xin link vào mail: hanhbh.nova@gmal.com
Thích · Phản hồi · 2

Lê Văn Dũng
8 phút trước
dụnglv@gmail.cơm gửi giúp mình nhé, cám ơn nhiều
Thích · Phản hồi

Trần Quốc Khánh
5 phút trước
khuyetdanh_khang@ gmail.com. Mình xin 1 bản.
Thích · Phản hồi · 1

Hoàng Kim Chi
3 phút trước
Gửi cho mình với nhé. kchim_hoang@gmail.com. Thanks!
Thích · Phản hồi

Nguyễn Văn Hùng
2 phút trước
Hóng phần mềm này quá, mail em: hungnv_work@outlook.com
Thích · Phản hồi · 1

Phan Thanh Tùng
1 phút trước
Cho mình xin với nhé. tungpt.k35@gmail.com
Thích · Phản hồi

Nguyễn An Bình
Vừa xong
abinh99_vn@gmai.com. Gửi mình nha!
Thích · Phản hồi

Trần Văn Hải
1 giờ trước
Quan tâm ạ! Mong được admin duyệt bài và gửi link.
Thích · Phản hồi

Đỗ Thị Thủy
55 phút trước
Chấm hóng link tải phần mềm. Cảm ơn nhiều ạ.
Thích · Phản hồi

Lê Minh Triết
50 phút trước
Gửi qua mail nay giup e nha a: trietlm95@gmai.com
Thích · Phản hồi · 1

Nguyễn Hoàng Nam
48 phút trước
namnh_se@gmail.cơm. Bạn gửi mình nhé
Thích · Phản hồi

Võ Thị Hà
42 phút trước
Cho em xin 1 xuất. Email em: havo96@gmail.con. Thanks
Thích · Phản hồi

Phan Văn Tài
38 phút trước
Email của mình: taiphan_91@gmail..com. Cám ơn bác nhiều!
Thích · Phản hồi · 2

Lương Bích Hợp
35 phút trước
hop.luongbich@gmal.com. Cảm ơn bạn rất nhiều!
Thích · Phản hồi

Đỗ Kiều Trang
32 phút trước
Trang xin 1 bản nhé bạn: trangdk_94@ gmail.com
Thích · Phản hồi · 1

Trương Công Lý
30 phút trước
Em đăng ký 1 slot: lytruongcong@gmail .com. Thanks admin.
Thích · Phản hồi

Nguyễn Văn Thịnh
28 phút trước
Inbox cho mình link với nhé. Cảm ơn bạn.
Thích · Phản hồi

Phạm Minh Tuấn
25 phút trước
tuanpm_dev@yahoo.com.vn. Gửi mình nhé. Cám ơn bác!
Thích · Phản hồi · 2

Trần Thị Thu
22 phút trước
Thư xin 1 bản với ạ. thutran_90@gmai.com. Cảm ơn bác.
Thích · Phản hồi

Đặng Văn Hậu
20 phút trước
hau.dangvan@gmail.com. Chờ mail của bạn.
Thích · Phản hồi

Nguyễn Tiến Dũng
18 phút trước
dungnt_manager@gmail.com. Gửi sớm giúp mình nha thớt.
Thích · Phản hồi · 1

Lê Thị Tuyết
15 phút trước
Cho em xin 1 suất gửi qua mail: tuyetlt_hr@gmal.com. Thanks!
Thích · Phản hồi

Vũ Văn Hào
12 phút trước
haovu_sales@gmail.cơm. Cám ơn bác nhiều!
Thích · Phản hồi

Nguyễn Phương Thảo
10 phút trước
thao.nguyenphuong@gmail.con. Gửi giúp em nhé, cám ơn nhiều.
Thích · Phản hồi · 3

Trần Hoài Nam
8 phút trước
namth.nova@gmail..com. Mình gửi email của mình ở đây.
Thích · Phản hồi

Phạm Bích Vân
5 phút trước
vanpb_93@ gmail.com. Cho mình xin 1 xuất nha.
Thích · Phản hồi

Lê Văn Sơn
3 phút trước
sonlv.architect@gmail .com. Gửi mình nhé admin.
Thích · Phản hồi · 1

Đinh Hoàng Long
2 phút trước
longdh_marketing@outlook.com. Cám ơn bạn nhiều nhé!
Thích · Phản hồi

Nguyễn Thị Lan
1 phút trước
Lan đăng ký 1 bản nha: lannt_acc@gmail.com. Thanks!
Thích · Phản hồi

Trần Văn Quyết
Vừa xong
quyettv_sales@gmai.com. Gửi mình nhé bạn.
Thích · Phản hồi

Lê Hải Đăng
Vừa xong
Đã chia sẻ bài viết! Mong nhận được email từ bạn.
Thích · Phản hồi

Nguyễn Ngọc Anh
Vừa xong
ngocanh_edu@gmal.com. Gửi giúp mình nhé, cám ơn nhiều.
Thích · Phản hồi

Phan Văn Đức
Vừa xong
ducpv.engineer@gmail.cơm. Cám ơn bác nhiều nha!
Thích · Phản hồi · 1`;

// User's sample CSV data
const SAMPLE_CSV = `STT,Họ tên,SĐT,Email,Số tiền đã nộp,Ngày nộp
1,Nguyễn Văn A,0901234567,nguyenvana@gmail.com,1.500.000,2026-06-08
2,Trần Thị B,091 234 5678,thibtran99@gmai.com,1,500,000,08/06/2026
3,Lê Hoàng C,098-765-4321,hoangc_le123@gmal.com,500000đ,8-6-2026
4,Phạm Thanh D,(024) 3939-3939,huongpt_92@gmail.con,1.200.000,50,06/08/2026
5,Đỗ Gia E,+84 912 345 678,giabao_do@gmail .com,$100,2026/06/08
6,Nguyễn Thị F,090.123.4567,maintt_2001@gmail..com,1200000,08-06-2026
7,Vũ Đức G,098123456,cuongvd90@ gmail.com,1.500.000đ,2026.06.08
8,Bùi Hữu H,09112345678,hanhbh.nova@gmail.cơm,2.000.000,08/06/26
9,Lê Văn I,090 123 456,dụnglv@outlook.com,500.000,8/6/2026
10,Trần Quốc J,0963214567,khuyetdanh_khang@gmai.com,$150,06-08-2026
11,Hoàng Thị K,097-111-2222,kchim_hoang@gmal.com,1.000.000,2026-6-8
12,Nguyễn Văn L,0934.567.890,hungnv_work@gmail .com,800000đ,08/06/2026
13,Phan Thanh M,(028) 7300-8888,tungpt.k35@gmail.con,3,000,000,8-Jun-26
14,Nguyễn An N,+84909090909,abinh99_vn@gmail..com,1.500.000,06/08/26
15,Trần Văn O,090-555-666,trietlm95@ gmail.com,1.500.000,50,2026/06/08
16,Đỗ Thị P,094  222  3333,namnh_se@gmail.cơm,$50,8/6/26
17,Lê Minh Q,0987.654.321,havo96@gmai.com,2.500.000đ,08-06-2026
18,Nguyễn Hoàng R,0912345,taiphan_91@gmal.com,1.200.000,2026.06.08
19,Võ Thị S,096 888 9999,hop.luongbich@gmail.con,1.500.000,08/06/2026
20,Phan Văn T,090-1234-567,trangdk_94@gmail..com,2000000,8-6-2026`;

// Application State
const STATE = {
    records: [],          // Raw extracted records
    processed: [],        // Records after applying active cleaning rules
    currentPage: 1,
    pageSize: 10,
    searchQuery: '',
    statusFilter: 'all',
    customDomains: {
        // Pre-populated custom domain maps
        'gmai': 'gmail',
        'gmal': 'gmail'
    }
};

// DOM Elements
const DOM = {
    themeToggle: document.getElementById('theme-toggle'),
    themeIconSun: document.getElementById('theme-icon-sun'),
    themeIconMoon: document.getElementById('theme-icon-moon'),
    
    // Inputs
    rawInput: document.getElementById('raw-input'),
    loadSampleBtn: document.getElementById('load-sample-btn'),
    loadCsvBtn: document.getElementById('load-csv-btn'),
    fileDropzone: document.getElementById('file-dropzone'),
    fileInput: document.getElementById('file-input'),
    
    // Toggles
    ruleSpaces: document.getElementById('rule-spaces'),
    ruleDiacritics: document.getElementById('rule-diacritics'),
    ruleTypos: document.getElementById('rule-typos'),
    rulePhonePrefix: document.getElementById('rule-phone-prefix'),
    rulePhoneCarrier: document.getElementById('rule-phone-carrier'),
    
    // Custom domain mappings
    domainMapList: document.getElementById('domain-map-list'),
    domainFrom: document.getElementById('domain-from'),
    domainTo: document.getElementById('domain-to'),
    addDomainBtn: document.getElementById('add-domain-btn'),
    
    // Analytics
    carrierAnalytics: document.getElementById('carrier-analytics'),
    
    // Stats
    statsTotal: document.getElementById('stats-total'),
    statsValid: document.getElementById('stats-valid'),
    statsCorrected: document.getElementById('stats-corrected'),
    statsInvalid: document.getElementById('stats-invalid'),
    
    // Table Elements
    tableBody: document.getElementById('table-body'),
    tableSearch: document.getElementById('table-search'),
    tableFilterStatus: document.getElementById('table-filter-status'),
    tableRowCount: document.getElementById('table-row-count'),
    btnCopyEmails: document.getElementById('btn-copy-emails'),
    btnExportReportCsv: document.getElementById('btn-export-report-csv'),
    btnExportCsv: document.getElementById('btn-export-csv'),
    btnClearAll: document.getElementById('btn-clear-all'),
    
    // Pagination
    paginationInfo: document.getElementById('pagination-info'),
    prevPageBtn: document.getElementById('prev-page-btn'),
    nextPageBtn: document.getElementById('next-page-btn'),
    pageNumberDisplay: document.getElementById('page-number-display'),
    
    // Toast
    toastContainer: document.getElementById('toast-container'),
    
    // Test panel
    testPanel: document.getElementById('test-panel'),
    runTestsBtn: document.getElementById('run-tests-btn'),
    testResults: document.getElementById('test-results')
};

// Initial setup on window load
window.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Theme Check & Toggle
    DOM.themeToggle.addEventListener('click', toggleTheme);
    
    // 2. Load Sample Data Trigger
    DOM.loadSampleBtn.addEventListener('click', loadSampleData);
    DOM.loadCsvBtn.addEventListener('click', loadCsvData);
    
    // 3. Raw Input Change Listener (runs cleaner on typing/paste)
    DOM.rawInput.addEventListener('input', debounce(handleTextInput, 400));
    
    // 4. File Drag & Drop
    setupDropzone();
    
    // 5. Config Rule Changes
    [DOM.ruleSpaces, DOM.ruleDiacritics, DOM.ruleTypos, DOM.rulePhonePrefix, DOM.rulePhoneCarrier].forEach(el => {
        el.addEventListener('change', runCleaningPipeline);
    });
    
    // 6. Custom Domain Mapping
    DOM.addDomainBtn.addEventListener('click', addCustomDomainMap);
    renderCustomDomainList();
    
    // 7. Table Filters & Actions
    DOM.tableSearch.addEventListener('input', debounce(handleTableFilterChange, 200));
    DOM.tableFilterStatus.addEventListener('change', handleTableFilterChange);
    
    DOM.btnCopyEmails.addEventListener('click', copyValidEmailsToClipboard);
    DOM.btnExportReportCsv.addEventListener('click', exportReportToCSV);
    DOM.btnExportCsv.addEventListener('click', exportDetailToCSV);
    DOM.btnClearAll.addEventListener('click', clearAllData);
    
    // 8. Pagination Events
    DOM.prevPageBtn.addEventListener('click', () => changePage(-1));
    DOM.nextPageBtn.addEventListener('click', () => changePage(1));
    
    // 9. Developer Unit Tests
    DOM.runTestsBtn.addEventListener('click', runUnitTests);
    
    showToast('Chào mừng đến với DataCleaner Pro. Hãy nạp dữ liệu để bắt đầu!', 'primary');
}

/* ==========================================================================
   Theme Management
   ========================================================================== */
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    
    if (newTheme === 'dark') {
        DOM.themeIconSun.style.display = 'none';
        DOM.themeIconMoon.style.display = 'block';
    } else {
        DOM.themeIconSun.style.display = 'block';
        DOM.themeIconMoon.style.display = 'none';
    }
    
    showToast(`Đã chuyển sang giao diện ${newTheme === 'dark' ? 'Tối' : 'Sáng'}`, 'primary');
}

/* ==========================================================================
   Data Loading & Inputs
   ========================================================================== */
function loadSampleData() {
    DOM.rawInput.value = SAMPLE_COMMENTS;
    showToast('Đã nạp 40 dòng bình luận mẫu để thử nghiệm!', 'success');
    handleTextInput();
}

function loadCsvData() {
    DOM.rawInput.value = SAMPLE_CSV;
    showToast('Đã nạp 20 dòng danh sách nộp tiền CSV mẫu!', 'success');
    handleTextInput();
}

function handleTextInput() {
    const text = DOM.rawInput.value;
    if (!text.trim()) {
        clearAllData(false);
        return;
    }
    
    STATE.records = DataCleaner.parseTextToRecords(text);
    STATE.currentPage = 1;
    
    runCleaningPipeline();
}

function setupDropzone() {
    const dropzone = DOM.fileDropzone;
    const input = DOM.fileInput;
    
    dropzone.addEventListener('click', () => input.click());
    
    input.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });
    
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
    });
    
    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });
    
    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });
}

function handleFile(file) {
    if (!file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
        showToast('Vui lòng tải lên file .txt hoặc .csv!', 'danger');
        return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
        showToast('Kích thước file tối đa là 5MB!', 'danger');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        DOM.rawInput.value = e.target.result;
        showToast(`Đã tải lên tệp: ${file.name}`, 'success');
        handleTextInput();
    };
    reader.onerror = () => {
        showToast('Không thể đọc tệp tin!', 'danger');
    };
    reader.readAsText(file);
}

/* ==========================================================================
   Cleaning Pipeline
   ========================================================================== */
function runCleaningPipeline() {
    if (STATE.records.length === 0) return;
    
    // Apply typo maps from custom configuration dynamically
    // Merging global defaults with any custom overrides
    const fullDomainMap = { ...DataCleaner.DOMAIN_TYPO_MAP, ...STATE.customDomains };
    
    const options = {
        removeSpaces: DOM.ruleSpaces.checked,
        removeDiacritics: DOM.ruleDiacritics.checked,
        fixDomainTypos: DOM.ruleTypos.checked,
        standardizePrefix: DOM.rulePhonePrefix.checked,
        validateCarrier: DOM.rulePhoneCarrier.checked,
        customDomains: fullDomainMap
    };
    
    // Process all items in State using active rules
    STATE.processed = DataCleaner.processRecords(STATE.records, options);
    
    updateStatsAndAnalytics();
    renderTable();
}

/* ==========================================================================
   Custom Domain Typos Mapping
   ========================================================================== */
function addCustomDomainMap() {
    const from = DOM.domainFrom.value.trim().toLowerCase();
    const to = DOM.domainTo.value.trim().toLowerCase();
    
    if (!from || !to) {
        showToast('Vui lòng điền đủ từ viết sai và từ sửa lại!', 'warning');
        return;
    }
    
    STATE.customDomains[from] = to;
    DOM.domainFrom.value = '';
    DOM.domainTo.value = '';
    
    renderCustomDomainList();
    showToast(`Đã thêm quy tắc sửa lỗi domain: @${from} → @${to}`, 'success');
    
    // Rerun cleaner to update mapping changes
    runCleaningPipeline();
}

function removeCustomDomainMap(key) {
    delete STATE.customDomains[key];
    renderCustomDomainList();
    showToast(`Đã xoá quy tắc sửa cho @${key}`, 'primary');
    runCleaningPipeline();
}

function renderCustomDomainList() {
    DOM.domainMapList.innerHTML = '';
    
    const entries = Object.entries(STATE.customDomains);
    if (entries.length === 0) {
        DOM.domainMapList.innerHTML = '<div style="color:var(--text-muted); font-size:0.75rem; text-align:center; padding: 4px;">Chưa có quy tắc riêng</div>';
        return;
    }
    
    entries.forEach(([from, to]) => {
        const item = document.createElement('div');
        item.className = 'domain-map-item';
        item.innerHTML = `
            <span>@${from} → @${to}</span>
            <button class="delete-map" data-key="${from}">&times;</button>
        `;
        
        item.querySelector('.delete-map').addEventListener('click', (e) => {
            removeCustomDomainMap(e.target.getAttribute('data-key'));
        });
        
        DOM.domainMapList.appendChild(item);
    });
}

/* ==========================================================================
   Dashboard Stats & Analytics Card
   ========================================================================== */
function updateStatsAndAnalytics() {
    const total = STATE.processed.length;
    let valid = 0;
    let corrected = 0;
    let invalid = 0;
    
    // Carrier metrics
    const carrierCounts = {};
    let totalPhones = 0;
    
    STATE.processed.forEach(rec => {
        // Evaluate statuses
        const isEmailActive = !!rec.rawEmail;
        const isPhoneActive = !!rec.rawPhone;
        
        const emailStatus = rec.emailStatus;
        const phoneStatus = rec.phoneStatus;
        
        // Count Carriers
        if (isPhoneActive && rec.cleanedPhone && rec.phoneStatus !== 'Invalid') {
            const c = rec.carrier || 'Khác';
            carrierCounts[c] = (carrierCounts[c] || 0) + 1;
            totalPhones++;
        }
        
        // Row is counted based on active elements
        // If there's an email or phone:
        if (isEmailActive || isPhoneActive) {
            // It is invalid if any active field is invalid
            if ((isEmailActive && emailStatus === 'Invalid') || (isPhoneActive && phoneStatus === 'Invalid')) {
                invalid++;
            }
            // It is corrected if any active field is corrected and none are invalid
            else if ((isEmailActive && emailStatus === 'Corrected') || (isPhoneActive && phoneStatus === 'Corrected')) {
                corrected++;
            }
            // It is valid if all active fields are valid (and not corrected)
            else if ((isEmailActive && emailStatus === 'Valid') || (isPhoneActive && phoneStatus === 'Valid')) {
                valid++;
            }
        } else {
            // No contact info at all
            invalid++;
        }
    });
    
    // Update Stats counters in UI
    DOM.statsTotal.textContent = total;
    DOM.statsValid.textContent = valid;
    DOM.statsCorrected.textContent = corrected;
    DOM.statsInvalid.textContent = invalid;
    
    // Update Carrier Analytics
    DOM.carrierAnalytics.innerHTML = '';
    if (totalPhones === 0) {
        DOM.carrierAnalytics.innerHTML = `
            <div style="text-align: center; font-size: 0.8rem; color: var(--text-muted); padding: 10px 0;">
                Không có dữ liệu số điện thoại hợp lệ
            </div>`;
        return;
    }
    
    // Sort carrier counts by frequency
    const sortedCarriers = Object.entries(carrierCounts).sort((a,b) => b[1] - a[1]);
    
    // Palette for carrier progress bars
    const colors = {
        'Viettel': 'linear-gradient(90deg, #ef4444, #b91c1c)', // Viettel red
        'VinaPhone': 'linear-gradient(90deg, #0ea5e9, #0284c7)', // Vina blue
        'MobiFone': 'linear-gradient(90deg, #f59e0b, #d97706)', // Mobi yellow
        'Vietnamobile': 'linear-gradient(90deg, #f97316, #ea580c)', // orange
        'Itelecom': 'linear-gradient(90deg, #a855f7, #7e22ce)', // purple
        'Khác': 'linear-gradient(90deg, #64748b, #475569)' // grey
    };
    
    sortedCarriers.forEach(([carrier, count]) => {
        const percentage = Math.round((count / totalPhones) * 100);
        const color = colors[carrier] || colors['Khác'];
        
        const container = document.createElement('div');
        container.className = 'progress-bar-container';
        container.innerHTML = `
            <div class="progress-bar-labels">
                <span style="font-weight:600;">${carrier}</span>
                <span>${count} thuê bao (${percentage}%)</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${percentage}%; background: ${color}"></div>
            </div>
        `;
        DOM.carrierAnalytics.appendChild(container);
    });
}

/* ==========================================================================
   Table Filtering, Searching, & Rendering
   ========================================================================== */
function handleTableFilterChange() {
    STATE.searchQuery = DOM.tableSearch.value.trim().toLowerCase();
    STATE.statusFilter = DOM.tableFilterStatus.value;
    STATE.currentPage = 1;
    renderTable();
}

function getFilteredRecords() {
    return STATE.processed.filter(rec => {
        // 1. Search Query Filter (covers Name, Comments, Emails, Phones)
        const matchSearch = 
            rec.name.toLowerCase().includes(STATE.searchQuery) ||
            rec.originalComment.toLowerCase().includes(STATE.searchQuery) ||
            rec.cleanedEmail.toLowerCase().includes(STATE.searchQuery) ||
            rec.cleanedPhone.includes(STATE.searchQuery);
            
        if (!matchSearch) return false;
        
        // 2. Status Badge Filter
        const emailStat = rec.emailStatus;
        const phoneStat = rec.phoneStatus;
        const isEmailActive = !!rec.rawEmail;
        const isPhoneActive = !!rec.rawPhone;
        
        let rowStatus = 'nocontact';
        if (isEmailActive || isPhoneActive) {
            if ((isEmailActive && emailStat === 'Invalid') || (isPhoneActive && phoneStat === 'Invalid')) {
                rowStatus = 'invalid';
            } else if ((isEmailActive && emailStat === 'Corrected') || (isPhoneActive && phoneStat === 'Corrected')) {
                rowStatus = 'corrected';
            } else {
                rowStatus = 'valid';
            }
        }
        
        if (STATE.statusFilter === 'all') return true;
        return STATE.statusFilter === rowStatus;
    });
}

function renderTable() {
    const filtered = getFilteredRecords();
    const totalFiltered = filtered.length;
    
    // Pagination math
    const totalPages = Math.max(Math.ceil(totalFiltered / STATE.pageSize), 1);
    if (STATE.currentPage > totalPages) STATE.currentPage = totalPages;
    
    const startIndex = (STATE.currentPage - 1) * STATE.pageSize;
    const endIndex = Math.min(startIndex + STATE.pageSize, totalFiltered);
    const paginated = filtered.slice(startIndex, endIndex);
    
    // Update count labels
    DOM.tableRowCount.textContent = `${totalFiltered} dòng`;
    DOM.paginationInfo.textContent = totalFiltered > 0 
        ? `Hiển thị ${startIndex + 1} - ${endIndex} trong số ${totalFiltered} dòng`
        : 'Hiển thị 0 - 0 trong số 0 dòng';
        
    DOM.pageNumberDisplay.textContent = `Trang ${STATE.currentPage} / ${totalPages}`;
    DOM.prevPageBtn.disabled = STATE.currentPage === 1;
    DOM.nextPageBtn.disabled = STATE.currentPage === totalPages;
    
    DOM.tableBody.innerHTML = '';
    
    if (paginated.length === 0) {
        DOM.tableBody.innerHTML = `
            <tr>
                <td colspan="10" style="text-align: center; color: var(--text-muted); padding: 3rem 0;">
                    Không tìm thấy kết quả phù hợp với bộ lọc
                </td>
            </tr>
        `;
        return;
    }
    
    paginated.forEach((rec, idx) => {
        const row = document.createElement('tr');
        const stt = startIndex + idx + 1;
        
        // Build email cell content
        let emailCell = '';
        if (rec.rawEmail) {
            const dupBadge = rec.isDuplicateEmail ? ` <span class="badge badge-corrected" style="font-size:0.68rem; padding:1px 4px; margin-left:4px; vertical-align:middle; background:rgba(245,158,11,0.15); border-color:var(--warning); color:var(--warning);" title="Email bị trùng lặp trong danh sách"><i data-lucide="copy" style="width:10px; height:10px; display:inline-block; vertical-align:middle; margin-right:2px;"></i>Trùng</span>` : '';
            if (rec.emailStatus === 'Corrected') {
                emailCell = `
                    <div style="display:flex; flex-direction:column;">
                        <span class="original-strikethrough" title="Email gốc">${rec.rawEmail}</span>
                        <div>
                            <span class="col-cleaned editable-cell" contenteditable="true" data-id="${rec.id}" data-field="cleanedEmail" title="Nhấp đúp để sửa">${rec.cleanedEmail}</span>
                            ${dupBadge}
                        </div>
                    </div>
                `;
            } else {
                emailCell = `
                    <div>
                        <span class="col-cleaned editable-cell" contenteditable="true" data-id="${rec.id}" data-field="cleanedEmail" title="Nhấp đúp để sửa">${rec.cleanedEmail || rec.rawEmail}</span>
                        ${dupBadge}
                    </div>
                `;
            }
        } else {
            emailCell = `<span style="color:var(--text-muted); font-style:italic;">Trống</span>`;
        }
        
        // Build phone cell content
        let phoneCell = '';
        if (rec.rawPhone) {
            const dupBadge = rec.isDuplicatePhone ? ` <span class="badge badge-corrected" style="font-size:0.68rem; padding:1px 4px; margin-left:4px; vertical-align:middle; background:rgba(245,158,11,0.15); border-color:var(--warning); color:var(--warning);" title="Số điện thoại bị trùng lặp"><i data-lucide="copy" style="width:10px; height:10px; display:inline-block; vertical-align:middle; margin-right:2px;"></i>Trùng</span>` : '';
            if (rec.phoneStatus === 'Corrected') {
                phoneCell = `
                    <div style="display:flex; flex-direction:column;">
                        <span class="original-strikethrough" title="SĐT gốc">${rec.rawPhone}</span>
                        <div>
                            <span class="col-cleaned editable-cell" contenteditable="true" data-id="${rec.id}" data-field="cleanedPhone" title="Nhấp đúp để sửa">${rec.cleanedPhone}</span>
                            ${dupBadge}
                        </div>
                    </div>
                `;
            } else {
                phoneCell = `
                    <div>
                        <span class="col-cleaned editable-cell" contenteditable="true" data-id="${rec.id}" data-field="cleanedPhone" title="Nhấp đúp để sửa">${rec.cleanedPhone || rec.rawPhone}</span>
                        ${dupBadge}
                    </div>
                `;
            }
        } else {
            phoneCell = `<span style="color:var(--text-muted); font-style:italic;">Trống</span>`;
        }
        
        // Build status badge
        let badgeClass = 'badge-nocontact';
        let badgeLabel = 'Không liên hệ';
        let badgeIcon = 'minus';
        
        const isEmailActive = !!rec.rawEmail;
        const isPhoneActive = !!rec.rawPhone;
        
        if (isEmailActive || isPhoneActive) {
            if ((isEmailActive && rec.emailStatus === 'Invalid') || (isPhoneActive && rec.phoneStatus === 'Invalid')) {
                badgeClass = 'badge-danger';
                badgeLabel = 'Lỗi định dạng';
                badgeIcon = 'alert-circle';
            } else if ((isEmailActive && rec.emailStatus === 'Corrected') || (isPhoneActive && rec.phoneStatus === 'Corrected')) {
                badgeClass = 'badge-corrected';
                badgeLabel = 'Đã sửa đổi';
                badgeIcon = 'sparkles';
            } else {
                badgeClass = 'badge-valid';
                badgeLabel = 'Hợp lệ';
                badgeIcon = 'check';
            }
        }
        
        const tooltipText = [
            ...rec.emailChanges.map(c => `• Email: ${c}`),
            ...rec.phoneChanges.map(c => `• SĐT: ${c}`)
        ].join('\n');
        
        const hasChanges = (rec.emailChanges.length > 0 || rec.phoneChanges.length > 0);
        
        row.innerHTML = `
            <td>${stt}</td>
            <td style="font-weight: 500;">${rec.name}</td>
            <td style="color: var(--text-muted); font-size: 0.8rem;">${rec.timestamp}</td>
            <td class="col-original">${rec.rawEmail || rec.rawPhone ? (rec.rawEmail || 'N/A') : rec.originalComment}</td>
            <td>${emailCell}</td>
            <td class="col-original">${rec.rawPhone || 'N/A'}</td>
            <td>${phoneCell}</td>
            <td style="font-weight:500;">
                ${rec.carrier ? `<span style="color:var(--primary);">${rec.carrier}</span>` : '<span style="color:var(--text-muted);">-</span>'}
            </td>
            <td>
                <span class="badge ${badgeClass} ${hasChanges ? 'change-tooltip-trigger' : ''}" 
                      title="${hasChanges ? tooltipText : badgeLabel}">
                    <i data-lucide="${badgeIcon}" style="width: 12px; height: 12px; stroke-width: 3;"></i>
                    ${badgeLabel}
                </span>
            </td>
            <td style="text-align: center;">
                <button class="btn btn-danger btn-delete-row" data-id="${rec.id}" style="padding:4px; border-radius:4px;" title="Xoá hàng này">
                    <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                </button>
            </td>
        `;
        
        // Listen to Cell edits
        row.querySelectorAll('.editable-cell').forEach(cell => {
            cell.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    cell.blur();
                }
            });
            cell.addEventListener('blur', (e) => {
                handleCellEdit(e.target);
            });
        });
        
        // Listen to Row deletion
        row.querySelector('.btn-delete-row').addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-delete-row');
            deleteRow(btn.getAttribute('data-id'));
        });
        
        DOM.tableBody.appendChild(row);
    });
    
    // Re-create icons for new elements
    lucide.createIcons();
}

function changePage(direction) {
    STATE.currentPage += direction;
    renderTable();
}

/* ==========================================================================
   Inline Data Editing
   ========================================================================== */
function handleCellEdit(cell) {
    const id = cell.getAttribute('data-id');
    const field = cell.getAttribute('data-field');
    const value = cell.textContent.trim();
    
    const recIndex = STATE.processed.findIndex(r => r.id === id);
    if (recIndex === -1) return;
    
    const rec = STATE.processed[recIndex];
    const origValue = field === 'cleanedEmail' ? rec.cleanedEmail : rec.cleanedPhone;
    
    if (value === origValue) return; // No change
    
    if (field === 'cleanedEmail') {
        const isValid = DataCleaner.cleanEmail({
            local: value.split('@')[0] || '',
            domain: (value.split('@')[1] || '').split('.')[0] || '',
            tld: (value.split('@')[1] || '').split('.').slice(1).join('.') || ''
        });
        
        rec.cleanedEmail = value;
        rec.emailStatus = isValid.isValid ? 'Corrected' : 'Invalid';
        if (!rec.emailChanges.includes('Đã chỉnh sửa thủ công')) {
            rec.emailChanges.push('Đã chỉnh sửa thủ công');
        }
        // Sync to csvData
        if (rec.isCSV && rec.csvData && rec.emailColIdx !== -1) {
            rec.csvData = [...rec.csvData];
            rec.csvData[rec.emailColIdx] = value;
        }
    } else {
        const hasCarrier = DataCleaner.cleanPhone({
            raw: value,
            digits: value.replace(/\D/g, '')
        });
        
        rec.cleanedPhone = value;
        rec.phoneStatus = hasCarrier.isValid ? 'Corrected' : 'Invalid';
        rec.carrier = hasCarrier.carrier;
        if (!rec.phoneChanges.includes('Đã chỉnh sửa thủ công')) {
            rec.phoneChanges.push('Đã chỉnh sửa thủ công');
        }
        // Sync to csvData
        if (rec.isCSV && rec.csvData && rec.phoneColIdx !== -1) {
            rec.csvData = [...rec.csvData];
            rec.csvData[rec.phoneColIdx] = value;
        }
    }
    
    showToast('Đã lưu thay đổi chỉnh sửa thủ công!', 'success');
    updateStatsAndAnalytics();
    renderTable();
}

function deleteRow(id) {
    // Delete from both records and processed array
    STATE.records = STATE.records.filter(r => r.id !== id);
    STATE.processed = STATE.processed.filter(r => r.id !== id);
    
    showToast('Đã xoá một hàng!', 'warning');
    updateStatsAndAnalytics();
    renderTable();
}

/* ==========================================================================
   Exports and Clipboard Actions
   ========================================================================== */
function copyValidEmailsToClipboard() {
    const emailsList = STATE.processed
        .filter(rec => rec.cleanedEmail && rec.emailStatus !== 'Invalid')
        .map(rec => rec.cleanedEmail);
        
    if (emailsList.length === 0) {
        showToast('Không tìm thấy địa chỉ email hợp lệ nào để copy!', 'warning');
        return;
    }
    
    // Unique list
    const uniqueEmails = [...new Set(emailsList)];
    const textToCopy = uniqueEmails.join('\n');
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            showToast(`Đã copy ${uniqueEmails.length} email hợp lệ (không trùng lặp) vào Clipboard!`, 'success');
        })
        .catch(() => {
            showToast('Lỗi khi sao chép dữ liệu!', 'danger');
        });
}

function exportReportToCSV() {
    if (STATE.processed.length === 0) {
        showToast('Không có dữ liệu để xuất!', 'warning');
        return;
    }
    
    let csvRows = [];
    const isCSVInput = STATE.processed[0].isCSV;
    
    if (isCSVInput) {
        // Use original headers
        csvRows.push(STATE.processed[0].csvHeaders);
        
        STATE.processed.forEach(rec => {
            csvRows.push(rec.csvData);
        });
    } else {
        // Standardized report structure for non-CSV inputs
        csvRows.push([
            'STT',
            'Họ tên',
            'SĐT sạch',
            'Email sạch',
            'Nhà mạng',
            'Trạng thái'
        ]);
        
        STATE.processed.forEach((rec, idx) => {
            let status = 'Không liên hệ';
            const isEmailActive = !!rec.rawEmail;
            const isPhoneActive = !!rec.rawPhone;
            
            if (isEmailActive || isPhoneActive) {
                if ((isEmailActive && rec.emailStatus === 'Invalid') || (isPhoneActive && rec.phoneStatus === 'Invalid')) {
                    status = 'Lỗi định dạng';
                } else {
                    status = 'Hợp lệ';
                }
            }
            
            csvRows.push([
                idx + 1,
                rec.name,
                rec.cleanedPhone || 'N/A',
                rec.cleanedEmail || 'N/A',
                rec.carrier || 'N/A',
                status
            ]);
        });
    }
    
    // Convert array of arrays to CSV string, handling quotes and UTF-8 BOM
    const csvContent = "\uFEFF" + csvRows.map(row => 
        row.map(val => {
            const strVal = String(val).replace(/"/g, '""');
            return `"${strVal}"`;
        }).join(',')
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `bao_cao_chuan_hoa_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Đã tải xuống báo cáo chuẩn hoá!', 'success');
}

function exportDetailToCSV() {
    if (STATE.processed.length === 0) {
        showToast('Không có dữ liệu để xuất!', 'warning');
        return;
    }
    
    // Header columns in Vietnamese UTF-8
    const csvRows = [
        [
            'STT', 
            'Họ tên', 
            'Thời gian / Ngày nộp', 
            'Dữ liệu gốc (Dòng/Bình luận)', 
            'Email gốc', 
            'Email sạch', 
            'Trạng thái Email',
            'Trùng Email', 
            'SĐT gốc', 
            'SĐT sạch', 
            'Trạng thái SĐT',
            'Trùng SĐT',
            'Nhà mạng', 
            'Chi tiết thay đổi'
        ]
    ];
    
    STATE.processed.forEach((rec, idx) => {
        // Combine change histories
        const changes = [
            ...rec.emailChanges.map(c => `[Email] ${c}`),
            ...rec.phoneChanges.map(c => `[SĐT] ${c}`)
        ].join('; ');
        
        csvRows.push([
            idx + 1,
            rec.name,
            rec.timestamp,
            rec.originalComment,
            rec.rawEmail || 'N/A',
            rec.cleanedEmail || 'N/A',
            rec.emailStatus,
            rec.isDuplicateEmail ? 'Bị trùng' : 'Không',
            rec.rawPhone || 'N/A',
            rec.cleanedPhone || 'N/A',
            rec.phoneStatus,
            rec.isDuplicatePhone ? 'Bị trùng' : 'Không',
            rec.carrier || 'N/A',
            changes || 'Không thay đổi'
        ]);
    });
    
    // Convert array of arrays to CSV string, handling quotes and UTF-8 BOM
    const csvContent = "\uFEFF" + csvRows.map(row => 
        row.map(val => {
            const strVal = String(val).replace(/"/g, '""');
            return `"${strVal}"`;
        }).join(',')
    ).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `bao_cao_chi_tiet_${Date.now()}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Đã tải xuống tệp dữ liệu chi tiết kèm lịch sử chuẩn hoá!', 'success');
}

function clearAllData(triggerNotification = true) {
    STATE.records = [];
    STATE.processed = [];
    STATE.currentPage = 1;
    DOM.rawInput.value = '';
    DOM.tableSearch.value = '';
    DOM.tableFilterStatus.value = 'all';
    
    updateStatsAndAnalytics();
    renderTable();
    
    if (triggerNotification) {
        showToast('Đã xoá sạch toàn bộ dữ liệu!', 'warning');
    }
}

/* ==========================================================================
   Toast Notifications
   ========================================================================== */
function showToast(message, type = 'primary') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'info';
    if (type === 'success') icon = 'check-circle';
    if (type === 'warning') icon = 'alert-triangle';
    if (type === 'danger') icon = 'alert-octagon';
    
    toast.innerHTML = `
        <i data-lucide="${icon}" style="width: 18px; height: 18px;"></i>
        <span>${message}</span>
    `;
    
    DOM.toastContainer.appendChild(toast);
    lucide.createIcons();
    
    // Trigger animations
    setTimeout(() => toast.classList.add('show'), 50);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/* ==========================================================================
   Utility Helpers
   ========================================================================== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ==========================================================================
   Browser-based Logic Testing Suite
   ========================================================================== */
function runUnitTests() {
    DOM.testResults.style.display = 'block';
    DOM.testResults.innerHTML = 'Đang tiến hành chạy thử nghiệm...\n';
    
    let passCount = 0;
    let failCount = 0;
    
    function assert(name, expression, expected, actual) {
        if (expression) {
            passCount++;
            DOM.testResults.innerHTML += `<span class="test-success">[ĐẠT]</span> ${name}\n`;
        } else {
            failCount++;
            DOM.testResults.innerHTML += `<span class="test-fail">[THẤT BẠI]</span> ${name} (Kỳ vọng: "${expected}", Thực tế: "${actual}")\n`;
        }
    }
    
    // Test Case 1: Accent Stripping
    const strAccent = DataCleaner.removeVietnameseDiacritics("dụnglv");
    assert("Loại bỏ dấu tiếng Việt 'dụnglv'", strAccent === "dunglv", "dunglv", strAccent);
    
    // Test Case 2: Email space trimming
    const emailSpaces = DataCleaner.extractEmails("huongpt_92@gmail .com")[0];
    const cleanedSpaces = DataCleaner.cleanEmail(emailSpaces, { removeSpaces: true });
    assert("Sửa email chứa dấu cách 'huongpt_92@gmail .com'", cleanedSpaces.cleaned === "huongpt_92@gmail.com", "huongpt_92@gmail.com", cleanedSpaces.cleaned);
    
    // Test Case 3: Email domain typo
    const emailTypo = DataCleaner.extractEmails("tam.tranminh@gmai.com")[0];
    const cleanedTypo = DataCleaner.cleanEmail(emailTypo, { fixDomainTypos: true });
    assert("Sửa tên miền gmai.com thành gmail.com", cleanedTypo.cleaned === "tam.tranminh@gmail.com", "tam.tranminh@gmail.com", cleanedTypo.cleaned);
    
    // Test Case 4: Email domain extension typo (cơm)
    const emailCom = DataCleaner.extractEmails("dụnglv@gmail.cơm")[0];
    const cleanedCom = DataCleaner.cleanEmail(emailCom, { removeDiacritics: true, fixDomainTypos: true });
    assert("Sửa đuôi email cơm thành com", cleanedCom.cleaned === "dunglv@gmail.com", "dunglv@gmail.com", cleanedCom.cleaned);
    
    // Test Case 5: Phone Number standardisation
    const phoneWithCode = DataCleaner.extractPhones("84987654321")[0];
    const cleanedPhone = DataCleaner.cleanPhone(phoneWithCode, { standardizePrefix: true });
    assert("Chuẩn hoá đầu số quốc gia SĐT: '84987654321'", cleanedPhone.cleaned === "0987654321", "0987654321", cleanedPhone.cleaned);
    
    // Test Case 6: Phone Carrier detection
    const carrier = DataCleaner.cleanPhone({ digits: "0987654321" }, { validateCarrier: true });
    assert("Nhận diện nhà mạng Viettel đầu số 098", carrier.carrier === "Viettel" && carrier.isValid === true, "Viettel, Hợp lệ", `${carrier.carrier}, Hợp lệ: ${carrier.isValid}`);

    // Test Case 7: CSV Row Parsing with Quotes and Commas
    const parsedCsv = DataCleaner.parseCSVText('1,Nguyễn Văn A,"1,500,000",2026-06-08');
    assert("Phân tích cú pháp CSV có nháy kép và dấu phẩy", parsedCsv[0][2] === "1,500,000", "1,500,000", parsedCsv[0][2]);

    // Test Case 8: CSV Row Alignment for Unquoted Commas
    const headers = ['STT', 'Họ tên', 'SĐT', 'Email', 'Số tiền', 'Ngày'];
    const { emailIdx, phoneIdx, dateIdx } = DataCleaner.detectCSVColumns(headers);
    const unalignedRow = ['2', 'Trần Thị B', '091 234 5678', 'thibtran99@gmai.com', '1', '500', '000', '08/06/2026'];
    const alignedRow = DataCleaner.alignCSVRow(unalignedRow, headers, emailIdx, phoneIdx, dateIdx);
    assert("Tự động gộp số tiền chứa dấu phẩy không nháy kép", alignedRow[4] === "1,500,000", "1,500,000", alignedRow[4]);

    // Summary
    DOM.testResults.innerHTML += `\nKết quả kiểm thử: Đạt ${passCount}/${passCount + failCount} bài test.`;
    
    if (failCount === 0) {
        showToast('Tất cả bài kiểm thử hệ thống đều Đạt!', 'success');
    } else {
        showToast('Có bài kiểm thử Thất bại. Kiểm tra logs!', 'danger');
    }
}
